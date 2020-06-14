import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('../Sketch'), { ssr: false });

const useSketch = () => {
  let clouds = [];
  const radius = 25;

  const setup = (p5, rect) => {
    // eslint-disable-next-line no-param-reassign
    p5.disableFriendlyErrors = true;
    p5.createCanvas(rect?.width || 0, rect?.height || 0);
    p5.colorMode(p5.HSL, 255);
    p5.angleMode(p5.DEGREES);
    p5.fill(255);
    p5.noStroke();

    let cloudCount = 40;
    while (cloudCount-- > 0) {
      let circles = p5.random(20, 40);
      const cloud = [];
      const centerX = p5.random(0, rect.width);
      const centerY = p5.random(0, rect.height);
      const speed = p5.random(0.1, .2);

      while (circles-- > 0) {
        cloud.push({
          y: p5.random(centerY - 5, centerY + 5),
          x: p5.random(centerX - 25, centerX + 25),
          width: p5.random(radius - 15, radius),
          height: p5.random(radius - 15, radius),
          speed,
        });
      }

      clouds.push(cloud);
    }
  };

  const draw = (p5, rect) => {
    const c = p5.color('#3490DC');
    p5.background(c);

    // draw clouds
    clouds.forEach(cloud => {
      cloud.forEach(({ x, y, width, height }) => {
        p5.ellipse(x, y, width, height);
      });
    });

    const wrap = (x, speed) => x > rect.width + 50 ? -50 : x + speed;

    // move clouds
    clouds = clouds.map(cloud =>
      cloud.map(({ x, ...rest }) => ({ x: wrap(x, rest.speed), ...rest }))
    );
  };

  const windowResized = (p, rect) => p.resizeCanvas(rect?.width || 0, rect?.height || 0);

  return [setup, draw, windowResized];
};

const HeroBackground = ({ className }) => {
  const [, setRect] = useState({ width: 100, height: 100 });
  const [setup, draw, windowResized] = useSketch();

  return (
    <Sketch onRect={r => setRect(r)} setup={setup} draw={draw} windowResized={windowResized} className={className} />
  );
};

export default HeroBackground;
