import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return router.isFallback ? <p>Loading…</p> : <p>Sup</p>;
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
