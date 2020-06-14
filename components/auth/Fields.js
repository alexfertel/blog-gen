import React from 'react';
import PasswordInput from './PasswordInput';
import Input from '../shared/Input';

export const LoginFields = ({ register, errors }) => (
  <>
    <Input error={errors?.email} register={register({ required: true })} name="email" placeholder="Correo" />
    <PasswordInput
      register={register({ required: true })}
      name="password"
      placeholder="Contraseña"
      error={errors?.password}
    />
  </>
);

export const RegisterFields = ({ register, errors }) => (
  <>
    <Input
      error={errors?.email}
      register={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
      name="email"
      placeholder="Correo"
    />
    {errors?.email && errors?.email?.message}
    <PasswordInput
      register={register({ required: true })}
      name="password"
      placeholder="Contraseña"
      error={errors?.password}
    />
    <PasswordInput
      register={register({ required: true })}
      name="passwordConfirmation"
      placeholder="Repetir Contraseña"
      error={errors?.passwordConfirmation}
    />
  </>
);
