import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post }) {
  const router = useRouter();

  console.log(post)
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return router.isFallback ? <p>Loading…</p> : <p>Sup</p>;
}

export async function getStaticProps({ params }) {
  console.log(params)
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  console.log(posts.map(post => ({...post, content: ''})));
  
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug,
        url: post.url
      },
    })),

    fallback: false,
  };
}
