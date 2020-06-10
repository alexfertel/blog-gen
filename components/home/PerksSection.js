import React from 'react';

export default function PerksSection() {
  return (
    <section className="text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-blue-500 bg-blue-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 sm:w-16 sm:h-16"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
            <h2 className="mb-2 text-lg font-medium text-gray-900">Shooting Stars</h2>
            <p className="text-base leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
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
        <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
          <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
            <h2 className="mb-2 text-lg font-medium text-gray-900">The Catalyzer</h2>
            <p className="text-base leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
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
          <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-blue-500 bg-blue-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 sm:w-16 sm:h-16"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto lg:w-3/5 sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-blue-500 bg-blue-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 sm:w-16 sm:h-16"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
            <h2 className="mb-2 text-lg font-medium text-gray-900">The 400 Blows</h2>
            <p className="text-base leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
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
        <button
          type="button"
          className="flex px-8 py-2 mx-auto mt-20 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600"
        >
          Button
        </button>
      </div>
    </section>
  );
}
