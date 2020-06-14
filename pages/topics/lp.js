import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '../../icons/utils';
import { getAllPosts } from '../../lib/api';
import useFilter from '../../hooks/useFilter';
import { SearchIcon, XIcon } from '../../icons';

const ReportSummary = ({ report: { title, description, lang, url } }) => {
  const Icon = getIcon(lang);
  return (
    <Link href={`/posts/${url}`}>
      <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-sm cursor-pointer hover:scale-105 hover:shadow-lg">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-medium text-gray-800">{title}</h2>
          <div className="inline-flex items-center justify-center text-blue-500 rounded-full">
            <Icon className="w-8 h-8" />
          </div>
        </div>
        <p className="pt-4 text-base leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

const ProgrammingLanguages = ({ posts }) => {
  const [filteredPosts, filter] = useFilter(posts);
  const [keywords, setKeywords] = useState('');

  const handleOnChange = ({ target: { value } }) => setKeywords(value || '');

  const handleClear = () => setKeywords('');

  useEffect(() => {
    filter(keywords);
  }, [keywords]);

  return (
    <div className="container max-w-6xl min-h-screen mx-auto">
      <section className="text-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col flex-wrap items-center w-full text-center">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              Seminarios de Lenguajes de Programación
            </h1>
            <p className="w-full text-base leading-relaxed lg:w-1/2">
              {'Fuente en markdown '}
              <a
                href="https://github.com/alexfertel/blog-gen"
                className="text-blue-500 focus:outline-none focus:text-blue-700 focus:underline hover:underline"
              >
                aquí.
              </a>
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="relative flex items-center w-full h-12 max-w-3xl">
              <div className="absolute inset-y-0 left-0 z-10 flex items-center ml-3">
                <SearchIcon className="w-5 h-5 text-gray-500 stroke-2" />
              </div>
              <input
                className="absolute w-full py-3 pl-10 pr-10 font-medium text-gray-800 placeholder-gray-500 transition-all duration-300 bg-gray-200 border border-transparent rounded-lg shadow-sm focus:bg-white focus:border-gray-400 hover:border-gray-400 focus:outline-none"
                placeholder="Intenta buscar seminarios (Título, contenido, etc.)"
                type="text"
                value={keywords}
                onChange={handleOnChange}
              />
              <div className="absolute inset-y-0 right-0 z-10 flex items-center mr-3">
                {keywords && (
                  <button type="button" className="focus:outline-none" onClick={handleClear}>
                    <XIcon className="w-5 h-5 text-gray-600 stroke-2" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-10 -m-4 overflow-y-hidden">
            <AnimatePresence>
              {filteredPosts.map(post => (
                <motion.div
                  key={post.url}
                  positionTransition={{ type: 'tween', duration: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.55 }}
                  exit={{ opacity: 0 }}
                  className="w-full p-4 xl:w-1/3 md:w-1/2"
                >
                  <ReportSummary report={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

export default ProgrammingLanguages;
