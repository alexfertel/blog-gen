import React from 'react';

const Login = () => (
  <section className="relative w-full text-gray-700 bg-white">
    <div className="container flex flex-wrap h-full px-5 py-24 mx-auto sm:flex-no-wrap">
      
      <div className="flex flex-col justify-center w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
        <h2 className="mb-1 text-lg font-medium text-gray-900">Feedback</h2>
        <p className="mb-5 leading-relaxed text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <input
          className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
          placeholder="Name"
          type="text"
        />
        <input
          className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-indigo-500"
          placeholder="Message"
        />
        <button
          type="submit"
          className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
        >
          Button
        </button>
        <p className="mt-3 text-xs text-gray-500">
          Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
        </p>
      </div>
    </div>
  </section>
);

export default Login;
