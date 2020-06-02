import React from 'react';

const Layout = ({ children }) => (
  <div className="w-full max-w-sm min-h-screen pt-10 mx-auto text-md sm:text-lg sm:max-w-md md:max-w-3xl">
    {children}
  </div>
);

export default Layout;
