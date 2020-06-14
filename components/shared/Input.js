/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const baseStyles =
  'absolute w-full py-2 pl-4 pr-10 text-base bg-gray-200 leading-6 transition-all duration-300 font-medium rounded focus:bg-white focus:outline-none';
const cleanStyles = 'border-2 border-gray-200 placeholder-gray-600 hover:border-blue-300 focus:border-blue-300';
const errorStyles = 'border-2 border-red-200 placeholder-red-600 hover:border-red-300 focus:border-red-300';

const Input = ({ register, error, endIcon, ...other }) => (
  <div className="mt-4">
    <div className="relative flex items-center w-full h-12 max-w-3xl">
      <input ref={register} className={`${baseStyles} ${error ? errorStyles : cleanStyles}`} {...other} />
      <div className="absolute inset-y-0 right-0 z-10 flex items-center mr-6">{endIcon}</div>
    </div>
    <p className="text-xs font-medium leading-4 text-red-600">{error && error.message}</p>
  </div>
);

export default Input;
