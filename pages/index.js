import React from 'react';
import Link from 'next/link';
import { getIcon } from '../icons/utils';
import { getAllPosts } from '../lib/api';

const ReportSummary = ({ report: { title, description, lang, url } }) => {
  const Icon = getIcon(lang);
  return (
    <div className="w-full p-4 xl:w-1/3 md:w-1/2">
      <Link href={`/posts/${url}`}>
        <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md">
          <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-blue-500 bg-blue-100 rounded-full">
            <Icon className="w-6 h-6" />
          </div>
          <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">{title}</h2>
          <p className="text-base leading-relaxed">{description}</p>
        </div>
      </Link>
    </div>
  );
};

const Index = ({ posts }) => (
  <div className="container max-w-6xl min-h-screen mx-auto">
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full text-center">
          <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Seminarios de Lenguajes de Programación
          </h1>
          <p className="w-full text-base leading-relaxed lg:w-1/2">
            {'Fuente en markdown '}
            <a
              href="https://github.com/alexfertel/reports"
              className="text-blue-500 focus:outline-none focus:text-blue-700 focus:underline hover:underline"
            >
              aquí.
            </a>
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative flex items-center w-full h-12 max-w-3xl">
            <div className="absolute inset-y-0 left-0 z-10 flex items-center ml-3">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gray-500"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="absolute w-full py-3 pl-10 pr-4 font-medium text-gray-800 placeholder-gray-500 transition-all duration-300 bg-gray-200 border border-transparent rounded-lg shadow-sm focus:bg-white focus:border-gray-800 hover:border-gray-400 focus:outline-none"
              placeholder="Intenta buscar seminarios (Título, contenido, etc.)"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap mt-10 -m-4">
          {posts.map(post => (
            <ReportSummary key={post.url} report={post} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

export default Index;
