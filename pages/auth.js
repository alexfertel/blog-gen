import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { UserIcon } from '../icons';
import withAnimation from '../hocs/withAnimation';
import { LoginFields, RegisterFields } from '../components/Fields';

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, errors } = useForm();

  const Fields = withAnimation(isLogin ? LoginFields : RegisterFields);
  const onSubmit = () => (isLogin ? 'login' : 'register');
  const getPageText = condition => (condition ? 'Iniciar sesión' : 'Crear cuenta');

  const BottomNavigation = withAnimation(() => (
    <div className="flex items-center justify-between w-full mt-4 text-sm leading-4">
      <button
        className="text-gray-500 transition-colors duration-300 focus:outline-none hover:text-gray-800"
        type="button"
        onClick={() => setIsLogin(prevIsLogin => !prevIsLogin)}
      >
        {getPageText(!isLogin)}
      </button>
      <a className="text-blue-500 transition-colors duration-300 cursor-pointer focus:outline-none hover:text-blue-800">
        {isLogin && 'Recuperar contraseña'}
      </a>
    </div>
  ));

  return (
    <section className="relative w-full text-gray-700 bg-white">
      <div className="flex flex-wrap h-full sm:flex-no-wrap">
        <div className="relative flex items-end justify-start overflow-hidden bg-gray-100 bg-gray-200 md:w-1/2" />
        <div className="container flex flex-col w-full max-w-md mx-auto mt-8 md:w-1/2 md:mt-0">
          <div className="flex flex-col justify-center h-full">
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
                <AnimatePresence initial={false}>
                  <BottomNavigation />
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationPage;
