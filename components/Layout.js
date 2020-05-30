import React from 'react';
import Meta from './Meta';

export default function Layout({ children }) {
  return (
    <div className="antialiased text-gray-800 bg-gray-100 font-quicksand">
      <Meta />
      <main>{children}</main>
    </div>
  );
}
