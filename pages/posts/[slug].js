/* eslint-disable react/no-danger */
import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Layout from '../../components/ReportLayout';
import ReportHead from '../../components/ReportHead'

const ReportPage = ({ post: { title, content } }) => (
  <Layout>
    <h2 className="py-10 text-3xl font-semibold text-center text-gray-800">{title}</h2>
    <ReportHead />
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </Layout>
);

export default function Report({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return router.isFallback ? <p>Loading…</p> : <ReportPage post={post} />;
}

export const getStaticPaths = async () => ({
  paths: getAllPosts().map(post => ({
    params: {
      slug: post.url,
    },
  })),

  fallback: false,
});

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(`${params.slug}.md`);
  const content = await markdownToHtml(post.content || '');
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};
