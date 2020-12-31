import * as React from 'react';
import HeroBackground from './HeroBackground';

export default function HeroSection() {
  return (
    <section className="relative text-gray-700">
      <HeroBackground className="absolute inset-0" />
      <div className="container relative z-10 flex flex-col items-center justify-center px-5 py-40 mx-auto md:flex-row">
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Crea tu propio blog en minutos!</h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust
            fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
            meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
    </section>
  );
}
