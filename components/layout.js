import React from 'react';
import Meta from './meta';

export default function Layout({ children }) {
  return (
    <div className="antialiased bg-gray-100 font-quicksand">
      <Meta />
      <main>{children}</main>
    </div>
  );
}
