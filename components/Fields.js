import React from 'react';
import PasswordInput from './PasswordInput';

const inputStyles =
  'w-full px-4 py-2 mt-4 text-base leading-6 transition-all duration-300 bg-gray-200 border border-gray-200 placeholder-gray-600 font-medium rounded focus:bg-white focus:outline-none hover:border-blue-300 focus:border-blue-300';

export const LoginFields = ({ register, errors }) => (
  <>
    <input
      ref={register({ required: true })}
      name="user"
      className={inputStyles}
      placeholder="Correo o nombre de usuario"
    />
    {errors?.user && errors?.user?.message}
    <PasswordInput
      registeredRef={register({ required: true })}
      name="password"
      placeholder="Contraseña"
      error={errors?.password}
    />
  </>
);

export const RegisterFields = ({ register, errors }) => (
  <>
    <input ref={register({ required: true })} name="username" className={inputStyles} placeholder="Username" />
    {errors?.username && errors?.username?.message}
    <input
      ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
      name="email"
      className={inputStyles}
      placeholder="Correo"
    />
    {errors?.email && errors?.email?.message}
    <PasswordInput
      registeredRef={register({ required: true })}
      name="password"
      placeholder="Contraseña"
      error={errors?.password}
    />
    <PasswordInput
      registeredRef={register({ required: true })}
      name="passwordConfirmation"
      placeholder="Repetir Contraseña"
      error={errors?.passwordConfirmation}
    />
  </>
);
