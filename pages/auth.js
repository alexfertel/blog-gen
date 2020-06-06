/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { UserIcon, EyeIcon, EyeOffIcon } from '../icons';

const inputStyles =
  'w-full px-4 py-2 mt-4 text-base leading-6 transition-all duration-300 bg-gray-200 border border-gray-200 placeholder-gray-500 rounded-lg focus:bg-white focus:outline-none hover:border-blue-300 focus:border-blue-300';

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

const withAnimation = WrappedComponent => props => (
  <motion.div
    initial={{ x: 600, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.3, type: 'tween' }}
    exit={{ opacity: 0 }}
  >
    <WrappedComponent {...props} />
  </motion.div>
);

const LoginFields = ({ register, errors }) => (
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

const RegisterFields = ({ register, errors }) => (
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

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, errors } = useForm();

  const Fields = withAnimation(isLogin ? LoginFields : RegisterFields);
  const onSubmit = () => (isLogin ? 'login' : 'register');
  const getPageText = condition => (condition ? 'Iniciar sesión' : 'Crear cuenta');
  const RetrievePassword = withAnimation(() => (
    <p className="mt-3 text-xs text-right text-gray-500">Recuperar contraseña</p>
  ));

  return (
    <section className="relative w-full text-gray-700 bg-white">
      <div className="flex flex-wrap h-full sm:flex-no-wrap">
        <div className="relative flex items-end justify-start overflow-hidden bg-gray-100 bg-gray-200 md:w-1/2" />
        <div className="container flex flex-col w-full max-w-md mx-auto mt-8 md:w-1/2 md:mt-0">
          <div className="flex justify-end w-full">
            <button
              className="py-3 pr-4 text-sm font-medium leading-4 text-gray-500 transition-colors duration-300 focus:outline-none hover:text-gray-800"
              type="button"
              onClick={() => setIsLogin(prevIsLogin => !prevIsLogin)}
            >
              {getPageText(!isLogin)}
            </button>
          </div>
          <div className="flex flex-col justify-center h-full pb-10">
            <motion.div layoutTransition={{ type: 'tween', duration: 0.5 }}>
              <motion.div className="flex justify-center w-full">
                <UserIcon className="w-20 h-20 text-center text-blue-500" />
              </motion.div>
              <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col">
                <AnimatePresence>
                  <Fields register={register} errors={errors} />
                </AnimatePresence>
                <button
                  type="submit"
                  className="px-4 py-2 mt-4 text-lg font-medium text-white transition-all duration-300 bg-blue-500 border-0 rounded-lg focus:outline-none focus:shadow-outline hover:bg-blue-600"
                >
                  {getPageText(isLogin)}
                </button>
                <AnimatePresence initial={false}>{isLogin ? <RetrievePassword /> : <div className="mt-3 text-xs text-white">Dummy</div> }</AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationPage;
