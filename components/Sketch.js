/* eslint-disable no-param-reassign */
/* eslint-disable new-cap */
/* eslint-disable no-new */
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const wr = p => p.resizeCanvas(p.windowWidth, p.windowHeight);

const Sketch = ({ setup, draw, windowResized = wr, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    new p5(p => {
      p.setup = () => setup(p, ref);
      p.draw = () => draw(p, ref);
      p.windowResized = () => windowResized(p);
    }, ref.current);
  }, []);

  return <div className={className} ref={ref} />;
};

export default Sketch;
