import React from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('./Sketch'), { ssr: false });

const useSketch = () => {
  let disc = [];

  const setup = p5 => {
    const generateDisc = (center, lineCount) => {
      const arcs = [];
      for (let i = 0; i < lineCount; i++) {
        const radius = p5.random(100, 2000);
        const start = p5.random(360);
        const stop = p5.random(30, 180);
        const delta = p5.random(1) < 0.5 ? p5.random(0.1, 0.6) : p5.random(-0.6, -0.1);
        arcs.push({
          w: radius,
          h: radius,
          start,
          stop,
          delta,
        });
      }
      return arcs;
    };

    // eslint-disable-next-line no-param-reassign
    p5.disableFriendlyErrors = true;
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.colorMode(p5.HSL, 255);
    p5.angleMode(p5.DEGREES);
    p5.strokeWeight(2);

    disc = generateDisc({ x: 0, y: 0 }, 50);
  };

  const draw = p5 => {
    const drawArcs = arcs => {
      return arcs.map(({ w, h, start, stop, delta }) => {
        p5.push();
        p5.rotate(start);
        p5.arc(0, 0, w, h, 0, stop);
        p5.pop();
        return { w, h, start: start + delta, stop, delta };
      });
    };

    p5.translate(p5.windowWidth / 2, p5.windowHeight / 2);

    const c = p5.color('#3182ce');
    p5.background(c);

    p5.noFill();

    p5.stroke(255);
    disc = drawArcs(disc);
  };

  return [setup, draw];
};

const AuthBackground = () => {
  const [setup, draw] = useSketch();
  return <Sketch setup={setup} draw={draw} />;
};

export default AuthBackground;
