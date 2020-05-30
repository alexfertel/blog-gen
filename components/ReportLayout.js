import React from 'react';
import mdStyles from '../styles/md.module.css';

const Layout = ({ children }) => (
  <div className="w-full max-w-sm min-h-screen pt-10 pb-20 mx-auto text-md sm:text-lg sm:max-w-md md:max-w-3xl">
    <div className={mdStyles.markdown}>{children}</div>
  </div>
);

export default Layout;
