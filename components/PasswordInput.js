import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '../icons';

const PasswordInput = ({ registeredRef, placeholder, name, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const Icon = showPassword ? EyeOffIcon : EyeIcon;
  return (
    <div className="mt-4">
      <div className="relative flex items-center w-full h-12 max-w-3xl">
        <input
          ref={registeredRef}
          className="absolute w-full py-2 pl-4 pr-10 leading-6 text-gray-800 placeholder-gray-500 transition-all duration-300 bg-gray-200 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-300 hover:border-blue-300 focus:outline-none"
          placeholder={placeholder}
          name={name}
          autoComplete="off"
          type={showPassword ? 'text' : 'password'}
        />
        <div className="absolute inset-y-0 right-0 z-10 flex items-center mr-6">
          <Icon
            className="w-6 h-6 text-gray-500 cursor-pointer stroke-2"
            onClick={() => setShowPassword(prevShow => !prevShow)}
          />
        </div>
      </div>
      {error && error.message}
    </div>
  );
};

export default PasswordInput;
