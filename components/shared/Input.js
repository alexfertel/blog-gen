import React from 'react';

const baseStyles = 'w-full px-4 py-2 mt-4 text-base leading-6 transition-all duration-300 font-medium rounded focus:bg-white focus:outline-none';
const cleanStyles = 'bg-gray-200 border border-gray-200 placeholder-gray-600 hover:border-blue-300 focus:border-blue-300';
const errorStyles = '';

const Input = ({ registeredRef, placeholder, name, error }) => (
  <div className="mt-4">
    <div className="relative flex items-center w-full h-12 max-w-3xl">
      <input
        ref={registeredRef}
        className="absolute w-full py-2 pl-4 pr-10 font-medium leading-6 text-gray-800 placeholder-gray-600 transition-all duration-300 bg-gray-200 border border-gray-200 rounded focus:bg-white focus:border-blue-300 hover:border-blue-300 focus:outline-none"
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        type='text'
      />
    </div>
    {error && error.message}
  </div>
);

export default Input;
