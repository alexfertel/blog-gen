/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '../../icons';
import Input from '../shared/Input';

const PasswordInput = props => {
  const [showPassword, setShowPassword] = useState(false);

  const Icon = showPassword ? EyeOffIcon : EyeIcon;
  return (
    <Input
      {...props}
      autoComplete="off"
      type={showPassword ? 'text' : 'password'}
      endIcon={(
        <Icon
          className="w-6 h-6 text-gray-500 cursor-pointer stroke-2"
          onClick={() => setShowPassword(prevShow => !prevShow)}
        />
      )}
    />
  );
};

export default PasswordInput;
