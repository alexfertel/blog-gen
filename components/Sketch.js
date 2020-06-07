/* eslint-disable no-param-reassign */
/* eslint-disable new-cap */
/* eslint-disable no-new */
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Sketch = ({ setup, draw }) => {
  const ref = useRef(null);

  useEffect(() => {
    new p5(p => {
      p.setup = () => setup(p);
      p.draw = () => draw(p);
    }, ref.current);
  }, []);

  return <div ref={ref} />;
};

export default Sketch;
