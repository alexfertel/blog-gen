import React from 'react';
// import Layout from '../components/layout';
// import { getAllPosts } from '../lib/api';

const ReportSummary = ({ title, description, lang }) => (
  <div className="p-4 xl:w-1/3 md:w-1/2">
    <div className="bg-white p-6 border border-gray-300 rounded-lg">
      <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-blue-500 bg-blue-100 rounded-full">
        {lang}
        {/* <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg> */}
      </div>
      <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">{title}</h2>
      <p className="text-base leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Index = () => (
  <div className="container max-w-6xl min-h-screen mx-auto">
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full text-center">
          <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Seminarios de Lenguajes de Programación
          </h1>
          <p className="w-full text-base leading-relaxed lg:w-1/2">
            Fuente en markdown
            {' '}
            <a href="https://github.com/alexfertel/reports" className="text-blue-500">
              aquí.
            </a>
          </p>
        </div>
        <div className="flex flex-wrap -m-4 mt-20">
          {[1,2,3,4,5,6].map((i) => <ReportSummary key={i} title="Some title" description="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm." lang="C#" />)}
        </div>
      </div>
    </section>
  </div>
);

// export async function getStaticProps() {
//   // const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);
//   const allPosts = [];
//   return {
//     props: { allPosts },
//   };
// }

export default Index;
