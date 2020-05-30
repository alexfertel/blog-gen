import React from 'react';
import mdStyles from '../styles/md.module.css';

const Layout = ({ children }) => (
  <div className="w-full max-w-sm mx-auto sm:max-w-md md:max-w-3xl">
    <div className={mdStyles.markdown}>{children}</div>
  </div>
);

export default Layout;
