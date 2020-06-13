/* eslint-disable no-param-reassign */
/* eslint-disable new-cap */
/* eslint-disable no-new */
import React, { useEffect, useCallback, useState, useRef } from 'react';
import p5 from 'p5';

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null && node.getBoundingClientRect) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

const wr = p => p.resizeCanvas(p.windowWidth, p.windowHeight);

const Sketch = ({ setup, draw, windowResized = wr, className, onRect }) => {
  const [rect, ref] = useClientRect();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current)
      new p5(p => {
        p.setup = () => setup(p, rect);
        p.draw = () => draw(p, rect);
        p.windowResized = () => windowResized(p, rect);
      }, canvasRef.current);
  }, [canvasRef.current]);

  useEffect(() => {
    if (rect !== null) onRect(rect);
  }, ref.current);

  return (
    <div ref={ref} className={className}>
      {rect !== null && <div ref={canvasRef} />}
    </div>
  );
};

export default Sketch;
