import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { UserIcon } from '../../icons';
import withAnimation from '../../hocs/withAnimation';
import { LoginFields, RegisterFields } from './Fields';
import AuthBackground from './AuthBackground';
import firebase from '../../firebase/clientApp';

export default function AuthenticationSection({ isLogin }) {
  const { register, handleSubmit, errors, setError } = useForm();

  const createUser = ({ email, password }) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        setError(error);
      });

  const loginUser = ({ email, password }) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        setError(error);
      });

  const Fields = withAnimation(isLogin ? LoginFields : RegisterFields);
  const onSubmit = isLogin ? loginUser : createUser;
  const getPageText = condition => (condition ? 'Iniciar sesión' : 'Crear cuenta');
  const href = isLogin ? '/signup' : '/signin';

  const BottomNavigation = withAnimation(() => (
    <div className="flex items-center justify-between w-full mt-3 text-sm leading-4">
      <Link href={href}>
        <a className="px-2 py-1 text-blue-500 transition-all duration-300 rounded cursor-pointer focus:outline-none focus:shadow-outline hover:bg-gray-100 focus:text-gray-700 hover:text-gray-700">
          {getPageText(!isLogin)}
        </a>
      </Link>
      <a className="px-2 py-1 text-blue-500 transition-all duration-300 rounded cursor-pointer focus:outline-none hover:bg-gray-100 hover:text-blue-700">
        {isLogin && 'Recuperar contraseña'}
      </a>
    </div>
  ));

  return (
    <section className="relative flex w-full text-gray-700 bg-blue-500">
      <div className="absolute inset-0">
        <AuthBackground />
      </div>
      <div className="container relative z-10 flex flex-col justify-center w-full max-w-lg mx-auto mt-8 md:mt-0">
        <motion.div
          layoutTransition={{ type: 'tween', duration: 0.5 }}
          className="flex flex-col px-10 pt-2 pb-6 bg-white border border-gray-200 rounded-lg"
        >
          <motion.div className="flex justify-center w-full">
            <UserIcon className="w-20 h-20 text-center text-blue-500" />
          </motion.div>
          <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col">
            <AnimatePresence>
              <Fields register={register} errors={errors} />
            </AnimatePresence>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-lg font-medium text-white transition-all duration-300 bg-blue-500 border-0 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
            >
              {getPageText(isLogin)}
            </button>
            <AnimatePresence initial={false}>
              <BottomNavigation />
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
