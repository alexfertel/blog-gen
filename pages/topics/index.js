import React from 'react';
import Link from 'next/link';
import { RightArrowIcon } from '../../icons/index';

const Topics = ({ topics }) => (
  <section className="w-full py-2 text-gray-700">
    <h1 className="mt-10 text-3xl sm:text-4xl font-medium text-gray-900 text-center">Topics</h1>
    <div className="mt-10">
      {topics ? (
        topics.map(({ name, description, author, postsCount, link }) => (
          <div key={link} className="py-8 px-5 mt-4 mx-auto flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">{author}</span>
              <span className="mt-1 text-gray-500 text-sm">{`${postsCount} Posts`}</span>
            </div>
            <div className="mt-4 md:mt-0 md:flex-grow">
              <h2 className="text-xl md:text-2xl font-medium text-gray-900 title-font mb-2">{name}</h2>
              <p className="leading-relaxed">{description}</p>
              <Link href={link}>
                <a
                  className="mt-4 text-indigo-500 font-medium flex items-center 
                  hover:text-indigo-800 transition-colors duration-300"
                >
                  Explorar
                  <RightArrowIcon className="w-4 h-4 ml-1" />
                </a>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <span />
      )}
    </div>
  </section>
);

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
      topics,
    },
  };
}

export default Topics;
