import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '../../../icons/utils';
import { getAllPosts } from '../../../lib/api';
import { filterPosts } from '../../../lib/filter';
import SearchBar from '../../../components/shared/SearchBar';

const ReportSummary = ({ report: { title, description, lang, url } }) => {
  const Icon = getIcon(lang);
  return (
    <Link href={`/topics/lp/${url}`}>
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
  const [keyWords, setKeyWords] = useState('');

  const handleOnChange = ({ target: { value } }) => setKeyWords(value);
  const handleOnClear = () => setKeyWords('');

  const filteredPosts = filterPosts(posts, keyWords);

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
          <SearchBar value={keyWords} onChange={handleOnChange} onClear={handleOnClear} />
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
