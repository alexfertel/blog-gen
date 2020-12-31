import React, { useState } from 'react';
import Link from 'next/link';
import { RightArrowIcon } from '../../icons/index';
import SearchBar from '../../components/shared/SearchBar';
import { filterTopics } from '../../lib/filter';
import BreadcrumbNav from '../../components/shared/BreadcrumbNav';

const TopicSummary = ({ topic: { name, description, postsCount, link } }) => (
  <div className="flex flex-wrap px-5 py-8 mx-auto mt-4 border-t-2 border-gray-200 md:flex-no-wrap">
    <div className="flex flex-col flex-shrink-0 w-full md:w-32">
      <span className="mt-1 text-sm text-gray-400">{`${postsCount} Posts`}</span>
    </div>
    <div className="w-full mt-4 md:mt-0 md:flex-grow">
      <h2 className="w-full mb-2 text-xl font-medium text-gray-900 break-words md:text-2xl title-font">{name}</h2>
      <p className="leading-relaxed">{description}</p>
      <Link href={link}>
        <a className="inline-flex items-center mt-4 font-medium text-blue-500 transition-colors duration-300 hover:text-blue-800">
          Explorar
          <RightArrowIcon className="w-4 h-4 ml-1" />
        </a>
      </Link>
    </div>
  </div>
);

const Topics = ({ topics }) => {
  const [keywords, setKeywords] = useState('');

  const handleOnChange = ({ target: { value } }) => setKeywords(value);
  const handleOnClear = () => setKeywords('');

  const filteredTopics = filterTopics(topics, keywords);

  return (
    <div className="container max-w-6xl min-h-screen mx-auto">
      <section className="container px-5 py-10 mx-auto text-gray-700">
        <BreadcrumbNav links={[['Topics']]} />
        <h1 className="mt-10 text-3xl font-medium text-center text-gray-900 sm:text-4xl">Temas</h1>
        <SearchBar value={keywords} onChange={handleOnChange} onClear={handleOnClear} />
        <div className="mt-16">
          {filteredTopics.map(topic => (
            <TopicSummary key={topic.link} topic={topic} />
          ))}
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const topics = [
    {
      name: 'Lenguajes de programacion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      postsCount: 25,
      link: 'topics/lp',
    },
    {
      name: 'Dummy Topic',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
