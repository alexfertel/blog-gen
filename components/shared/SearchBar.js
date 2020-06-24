import React from 'react';
import { SearchIcon, XIcon } from '../../icons/index';

const SearchBar = ({ value, onChange }) => (
  <div className="flex justify-center mt-8">
    <div className="relative flex items-center w-full h-12 max-w-3xl">
      <div className="absolute inset-y-0 left-0 z-10 flex items-center ml-3">
        <SearchIcon className="w-5 h-5 text-gray-500 stroke-2" />
      </div>
      <input
        className="absolute w-full py-3 pl-10 pr-10 font-medium text-gray-800 placeholder-gray-500 transition-all duration-300 bg-gray-200 border border-transparent rounded-lg shadow-sm focus:bg-white focus:border-gray-400 hover:border-gray-400 focus:outline-none"
        placeholder="Intenta buscar temas"
        type="text"
        value={value}
        onChange={onChange}
      />
      <div className="absolute inset-y-0 right-0 z-10 flex items-center mr-3">
        {value && (
          <button type="button" className="focus:outline-none">
            <XIcon className="w-5 h-5 text-gray-600 stroke-2" />
          </button>
        )}
      </div>
    </div>
  </div>
);

export default SearchBar;
