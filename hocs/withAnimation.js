/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion } from 'framer-motion';


const withAnimation = WrappedComponent => props => (
  <motion.div
    initial={{ x: 600, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.3, type: 'tween' }}
    exit={{ opacity: 0 }}
  >
    <WrappedComponent {...props} />
  </motion.div>
);

export default withAnimation