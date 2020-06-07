/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion } from 'framer-motion';

const withAnimation = WrappedComponent => props => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.1, type: 'tween', opacity: { delay: 0.4 }, duration: 0.7 }}
  >
    <WrappedComponent {...props} />
  </motion.div>
);

export default withAnimation;
