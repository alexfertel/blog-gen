import React, { useState } from 'react';
import Link from 'next/link';
import { RightArrowIcon, SearchIcon, XIcon } from '../../icons/index';

const Topics = ({ topics }) => {
  const [keywords, setKeywords] = useState('');

  return (
    <section className="container text-gray-700 px-8 py-10 min-h-screen mx-auto">
      <h1 className="mt-10 text-3xl sm:text-4xl font-medium text-gray-900 text-center">Temas</h1>
      <div className="flex justify-center mt-10">
        <div className="relative flex items-center w-full h-12 max-w-3xl">
          <div className="absolute inset-y-0 left-0 z-10 flex items-center ml-3">
            <SearchIcon className="w-5 h-5 text-gray-500 stroke-2" />
          </div>
          <input
            className="absolute w-full py-3 pl-10 pr-10 font-medium text-gray-800 placeholder-gray-500 transition-all duration-300 bg-gray-200 border border-transparent rounded-lg shadow-sm focus:bg-white focus:border-gray-400 hover:border-gray-400 focus:outline-none"
            placeholder="Intenta buscar temas"
            type="text"
            value={keywords}
            onChange={({ target: { value } }) => setKeywords(value)}
          />
          <div className="absolute inset-y-0 right-0 z-10 flex items-center mr-3">
            {keywords && (
              <button type="button" className="focus:outline-none" onClick={() => setKeywords('')}>
                <XIcon className="w-5 h-5 text-gray-600 stroke-2" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-16">
        {topics.map(({ name, description, postsCount, link }) => (
          <div key={link} className="py-8 px-5 mt-4 mx-auto flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div className="w-full md:w-32 flex-shrink-0 flex flex-col">
              <span className="mt-1 text-gray-500 text-sm">{`${postsCount} Posts`}</span>
            </div>
            <div className="w-full mt-4 md:mt-0 md:flex-grow">
              <h2 className="text-xl md:text-2xl font-medium text-gray-900 title-font mb-2 break-words w-full">
                {name}
              </h2>
              <p className="leading-relaxed">{description}</p>
              <Link href={link}>
                <a
                  className="mt-4 text-blue-500 font-medium inline-flex items-center 
                  hover:text-blue-800 transition-colors duration-300"
                >
                  Explorar
                  <RightArrowIcon className="w-4 h-4 ml-1" />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const topics = [
    {
      name: 'Lenguajes de programacion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Alex Fertel',
      postsCount: 25,
      link: 'topics/lp',
    },
    {
      name: 'Dummy Topic',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Dummy Author',
      postsCount: 13,
      link: 'topics/dummy',
    },
  ];

  return {
    props: {
      topics: topics || [],
    },
  };
}

export default Topics;
