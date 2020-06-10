import React, { useState } from 'react';
import Link from 'next/link';
import { useUser } from '../../hooks/useUser';
import firebase from '../../firebase/clientApp';

const logInteractionStyles =
  'px-4 py-1 text-lg transition-all duration-150 transform rounded cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:scale-105';
const commonLogStyles = 'text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-gray-100';

const AuthLink = ({ link, href }) => <Link href={href}>{link}</Link>;

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signOut = async () => {
    setIsLoading(true);
    return firebase
      ?.auth()
      .signOut()
      .then(() => setIsLoading(false))
      .catch(e => {
        setError(e);
        setIsLoading(false);
      });
  };

  return (
    <button type="button" className={`${logInteractionStyles} ${commonLogStyles}`} onClick={signOut}>
      Cerrar Sesión
    </button>
  );
};

export default function HeroSection() {
  const { user } = useUser();
  console.log(user);

  const log = user ? (
    <LogoutButton />
  ) : (
    <AuthLink link={<a className={`${logInteractionStyles} ${commonLogStyles}`}>Iniciar Sesión</a>} href="/signin" />
  );

  const signUp = (
    <AuthLink
      link={<a className={`${logInteractionStyles} ml-4 text-gray-100 bg-blue-400 hover:bg-blue-500`}>Crear cuenta</a>}
      href="/signup"
    />
  );

  return (
    <section className="text-gray-700 bg-gray-200">
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto md:flex-row">
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            Crea tu propio blog en minutos!
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust
            fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
            meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            {log}
            {signUp}
          </div>
        </div>
      </div>
    </section>
  );
}
