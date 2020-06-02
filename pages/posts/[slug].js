/* eslint-disable react/no-danger */
import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import mdStyles from '../../styles/md.module.css';
import { getPostBySlug, getAllPosts, getNextPostSlug, getPreviousPostSlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Layout from '../../components/ReportLayout';
import ReportHead from '../../components/ReportHead';
import PostNavigation from '../../components/PostNavigation';
import BreadcrumbNav from '../../components/BreadcrumbNav';

const ReportPage = ({ post: { title, content, nextSlug, prevSlug } }) => (
  <Layout>
    <BreadcrumbNav postTitle={title} />
    <div className={mdStyles.markdown}>
      <h2 className="text-3xl font-semibold text-center text-gray-800">{title}</h2>
      <ReportHead />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
    <PostNavigation nextSlug={nextSlug} prevSlug={prevSlug} />
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
        nextSlug: getNextPostSlug(post.id),
        prevSlug: getPreviousPostSlug(post.id),
      },
    },
  };
};
