import React from 'react';

const Layout = ({children}) => (
  <div className="w-full max-w-sm mx-auto sm:max-w-md md:max-w-3xl">
    {children}
  </div>
);

export default Layout;