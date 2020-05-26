import React from 'react';
import Layout from '../components/layout';
// import { getAllPosts } from '../lib/api';

const Index = ({ allPosts }) => (
  <Layout>
    Sup
  </Layout>
);

// export async function getStaticProps() {
//   // const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);
//   const allPosts = [];
//   return {
//     props: { allPosts },
//   };
// }

export default Index;
