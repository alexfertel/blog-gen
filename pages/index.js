import React from 'react';
// import Layout from '../components/layout';
// import { getAllPosts } from '../lib/api';

const Index = () => (
  <div className="container max-w-6xl min-h-screen mx-auto">
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="mb-20 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font">
          Seminarios de Lenguajes de Programación
          <br className="hidden sm:block" />
          <span className="text-lg sm:text-xl">
            Fuente en markdown
            {' '}
            <a href="https://github.com/alexfertel/reports" className="text-blue-500">
              aquí.
            </a>
          </span>
        </h1>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="flex p-4 mb-6 md:w-1/3 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-blue-500 bg-blue-100 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Shooting Stars</h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
              </p>
              <a className="inline-flex items-center mt-3 text-blue-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex p-4 mb-6 md:w-1/3 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-blue-500 bg-blue-100 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
              </p>
              <a className="inline-flex items-center mt-3 text-blue-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex p-4 mb-6 md:w-1/3 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-blue-500 bg-blue-100 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Neptune</h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
              </p>
              <a className="inline-flex items-center mt-3 text-blue-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
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
