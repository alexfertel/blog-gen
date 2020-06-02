import React from 'react';

const Layout = ({ children }) => (
  <div className="w-full max-w-xs min-h-screen pt-10 mx-auto xs:max-w-sm text-md sm:text-lg sm:max-w-md md:max-w-3xl">
    {children}
  </div>
);

export default Layout;
