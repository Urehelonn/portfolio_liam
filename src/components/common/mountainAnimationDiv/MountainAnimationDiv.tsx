// next.js && React
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

// styles
import colours from '@/styles/colours';

// 3rd party lb
import { type Sketch } from '@p5-wrapper/react';
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import { P5CanvasInstance } from '@p5-wrapper/react/dist/component/contracts/P5CanvasInstance';

type Mountain = {
  layer: number;
  x: number;
  y: number;
  width: number;
  height: number;
  colour: string;
};
type MountainRange = {
  x: number;
  mountains: Mountain[];
  layer: number;
  width: { min: number; max: number };
  height: { min: number; max: number };
  speed: number;
  colour: string;
  sketchWidth: number;
  sketchHeight: number;
}
type MountainRangeProps = {
  layer: number;
  width: { min: number; max: number };
  height: { min: number; max: number };
  speed: number;
  colour: string;
  sketchWidth: number;
  sketchHeight: number;
};
export type MountainAnimationDivProps = {
  height: number;
  width?: number;
};

const mountainRangeConstructor = (config: MountainRangeProps) => {
  let mountainRange: MountainRange = {
    x: 0,
    mountains: [],
    layer: config.layer,
    width: {
      min: config.width.min,
      max: config.width.max,
    },
    height: {
      min: config.height.min,
      max: config.height.max,
    },
    speed: config.speed,
    colour: config.colour,
    sketchWidth: config.sketchWidth,
    sketchHeight: config.sketchHeight,
  };

  // populate function creates the static mountainRange
  const populate = () => {
    let totalWidth = 0;
    while (totalWidth <= mountainRange.sketchWidth + mountainRange.width.max * 4) {
      const newWidth = Math.round(
        Math.random() * (mountainRange.width.max - mountainRange.width.min) + mountainRange.width.min,
      );
      const newHeight = Math.round(
        Math.random() * (mountainRange.height.max - mountainRange.height.min) + mountainRange.height.min,
      );
      mountainRange.mountains.push(
        {
          layer: mountainRange.layer,
          x:
            mountainRange.mountains.length === 0
              ? 0
              : mountainRange.mountains[mountainRange.mountains.length - 1].x +
              mountainRange.mountains[mountainRange.mountains.length - 1].width,
          y: mountainRange.sketchHeight - newHeight,
          width: newWidth,
          height: newHeight,
          colour: mountainRange.colour,
        });
      totalWidth += newWidth;
    }
  };

  populate();
  return mountainRange;
};
const update = (mountainRange: MountainRange) => {
  mountainRange.x -= mountainRange.speed;
  let firstMountain = mountainRange.mountains[0];
  if (firstMountain.width + firstMountain.x + mountainRange.x < -mountainRange.width.max) {
    const newWidth = Math.round(
      Math.random() * (mountainRange.width.max - mountainRange.width.min) + mountainRange.width.min,
    );
    const newHeight = Math.round(
      Math.random() * (mountainRange.height.max - mountainRange.height.min) + mountainRange.height.min,
    );
    const lastMountain = mountainRange.mountains[mountainRange.mountains.length - 1];
    firstMountain = ({
      layer: mountainRange.layer,
      x: lastMountain.x + lastMountain.width,
      y: mountainRange.sketchHeight - newHeight,
      width: newWidth,
      height: newHeight,
      colour: mountainRange.colour,
    });
    mountainRange.mountains.shift();
    mountainRange.mountains.push(firstMountain);
  }
};
const render = (mountainRange: MountainRange, p5: P5CanvasInstance) => {
  p5.push();
  p5.translate(mountainRange.x, ((p5.height - p5.mouseY) / 40) * mountainRange.layer);

  p5.beginShape();
  const pointCount = mountainRange.mountains.length;
  p5.vertex(mountainRange.mountains[0].x, mountainRange.mountains[0].y);
  for (let i = 0; i < pointCount - 1; i += 1) {
    const c = (mountainRange.mountains[i].x + mountainRange.mountains[i + 1].x) / 2;
    const d = (mountainRange.mountains[i].y + mountainRange.mountains[i + 1].y) / 2;
    p5.quadraticVertex(mountainRange.mountains[i].x, mountainRange.mountains[i].y, c, d);
  }

  // set line and filling colour
  p5.fill(mountainRange.colour);
  p5.stroke(mountainRange.colour);

  // Adjust the y-coordinate of the last vertex based on mouse position
  if (p5.mouseY <= p5.height) {
    p5.vertex(p5.width - mountainRange.x, p5.height);
    p5.vertex(0 - mountainRange.x, p5.height);
    // p5.endShape(p5.CLOSE);
  } else {
    const lastMountain = mountainRange.mountains[pointCount - 1];
    p5.vertex(p5.width - mountainRange.x, lastMountain.y + p5.mouseY * 0.4);
    p5.vertex(0 - mountainRange.x, lastMountain.y + p5.mouseY * 0.4);
  }
  p5.endShape(p5.CLOSE);
  p5.pop();
};

const MountainAnimationDiv = (props: MountainAnimationDivProps) => {
  // default width as 1500, height 200
  const [viewportWidth, setViewportWidth] = useState(props.width && props.width > 800 ? props.width : 1500);
  const vpHeight = props.height && props.height > 200 ? props.height : 200;

  let mountainAmount = 5;
  const mountainRangesRef = useRef<MountainRange[]>([]);

  useEffect(() => {
    const mountainRanges: MountainRange[] = [];
    const coloursSet = [
      colours.green['100'],
      colours.green['200'],
      colours.green['300'],
      colours.green['400'],
      colours.green['500'],
    ];

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      // console.log('window.innerWidth', window.innerWidth)
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let i = mountainAmount;
    while (i--) {
      let newMountainRg: MountainRange = mountainRangeConstructor({
        layer: i + 1,
        width: {
          min: (i + 1) * 50,
          max: (i + 1) * 70,
        },
        height: {
          min: (vpHeight * 2) / 5 - i * 40,
          max: (vpHeight * 3) / 5 - i * 40,
        },
        speed: (i + 1) * 0.5,
        colour: coloursSet[i],
        sketchWidth: viewportWidth,
        sketchHeight: vpHeight,
      });
      mountainRanges.push(newMountainRg);
    }
    mountainRangesRef.current = mountainRanges;

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [viewportWidth, vpHeight, mountainAmount]);

  const sketch: Sketch = p5 => {
    p5.setup = () => p5.createCanvas(viewportWidth, vpHeight);
    p5.draw = () => {
      p5.clear();
      let i = mountainRangesRef.current.length;
      while (i--) {
        update(mountainRangesRef.current[i]);
        render(mountainRangesRef.current[i], p5);
      }
    };
  };

  return (
    <div>
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default MountainAnimationDiv;
