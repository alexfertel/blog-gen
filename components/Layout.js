import React from 'react';
import Meta from './Meta';

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen overflow-x-hidden antialiased text-gray-800 bg-gray-100 font-quicksand">
      <Meta />
      {children}
    </main>
  );
}
