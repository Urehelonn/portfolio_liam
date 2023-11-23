// next.js && React
import dynamic from 'next/dynamic'
import * as React from "react";
import {useCallback, useEffect, useRef} from 'react';

// styles
import colours from '@/styles/colours'

// 3rd party lb
import p5Types from "p5";


// will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
})

type MountainProps = {
    layer: number,
    x: number,
    y: number,
    width: number,
    height: number,
    colour: string,
}

class Mountain {
    layer: number;
    x: number;
    y: number;
    width: number;
    height: number;
    colour: string;

    constructor({layer, x, y, width, height, colour}: MountainProps) {
        this.layer = layer;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colour = colour;
    }

    reset({layer, x, y, width, height, colour}: MountainProps) {
        this.layer = layer;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colour = colour;
    }
}

type MountainRangeProps = {
    layer: number;
    width: { min: number; max: number };
    height: { min: number; max: number };
    speed: number;
    colour: string;
    sketchWidth: number;
    sketchHeight: number;
}

class MountainRange {
    x: number;
    mountains: Mountain[];
    layer: number;
    width: { min: number; max: number };
    height: { min: number; max: number };
    speed: number;
    colour: string;
    sketchWidth: number;
    sketchHeight: number;

    constructor(config: MountainRangeProps) {
        this.x = 0;
        this.mountains = [];
        this.layer = config.layer;
        this.width = {
            min: config.width.min,
            max: config.width.max,
        };
        this.height = {
            min: config.height.min,
            max: config.height.max,
        };
        this.speed = config.speed;
        this.colour = config.colour;
        this.sketchWidth = config.sketchWidth;
        this.sketchHeight = config.sketchHeight;
        this.populate();
    }

    // populate function creates the static mountainRange

    populate() {
        let totalWidth = 0;
        while (totalWidth <= this.sketchWidth + this.width.max * 4) {
            const newWidth = Math.round(Math.random() * (this.width.max - this.width.min) + this.width.min);
            const newHeight = Math.round(Math.random() * (this.height.max - this.height.min) + this.height.min);
            this.mountains.push(new Mountain({
                layer: this.layer,
                x: this.mountains.length === 0 ? 0 : this.mountains[this.mountains.length - 1].x + this.mountains[this.mountains.length - 1].width,
                y: this.sketchHeight - newHeight,
                width: newWidth,
                height: newHeight,
                colour: this.colour,
            }));
            totalWidth += newWidth;
        }
    }

    update() {
        this.x -= this.speed;
        const firstMountain = this.mountains[0];
        if (firstMountain.width + firstMountain.x + this.x < -this.width.max) {
            const newWidth = Math.round(Math.random() * (this.width.max - this.width.min) + this.width.min);
            const newHeight = Math.round(Math.random() * (this.height.max - this.height.min) + this.height.min);
            const lastMountain = this.mountains[this.mountains.length - 1];
            firstMountain.reset({
                layer: this.layer,
                x: lastMountain.x + lastMountain.width,
                y: this.sketchHeight - newHeight,
                width: newWidth,
                height: newHeight,
                colour: this.colour,
            });
            let mt = this.mountains.shift()
            if (mt) {
                this.mountains.push(mt);
            }
        }
    }

    render(p5: p5Types) {
        p5.push();
        p5.translate(this.x, (p5.height - p5.mouseY) / 40 * this.layer);
        p5.beginShape();
        const pointCount = this.mountains.length;
        p5.vertex(this.mountains[0].x, this.mountains[0].y);
        for (let i = 0; i < pointCount - 1; i += 1) {
            const c = (this.mountains[i].x + this.mountains[i + 1].x) / 2;
            const d = (this.mountains[i].y + this.mountains[i + 1].y) / 2;
            p5.quadraticVertex(this.mountains[i].x, this.mountains[i].y, c, d);
        }

        // set line and filling colour
        p5.fill(this.colour);
        p5.stroke(this.colour);

        p5.vertex(p5.width - this.x, p5.height);
        p5.vertex(0 - this.x, p5.height);
        p5.endShape(p5.CLOSE);
        p5.pop();
    }
}

export type MountainAnimationDivProps = {
    height: number;
    width?: number;
}

const MountainAnimationDiv = (props: MountainAnimationDivProps) => {
    // default width as 1500, height 200
    const viewportWidth = props.width && props.width > 800 ? props.width : 1500;
    const vpHeight = props.height && props.height > 200 ? props.height : 200;

    let mountainAmount = 5;
    const mountainRangesRef = useRef<MountainRange[]>([]);
    const setup = useCallback((p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(viewportWidth, vpHeight).parent(canvasParentRef);
    }, [vpHeight, viewportWidth])

    useEffect(() => {
        const mountainRanges: MountainRange[] = [];
        const coloursSet = [
            colours.green["100"],
            colours.green["200"],
            colours.green["300"],
            colours.green["400"],
            colours.green["500"],
        ]

        let i = mountainAmount;
        while (i--) {
            mountainRanges.push(
                new MountainRange({
                    layer: i + 1,
                    width: {
                        min: (i + 1) * 50,
                        max: (i + 1) * 70,
                    },
                    height: {
                        min: vpHeight * 2 / 5 - i * 40,
                        max: vpHeight * 3 / 5 - i * 40,
                    },
                    speed: (i + 1) * 0.5,
                    colour: coloursSet[i],
                    sketchWidth: viewportWidth,
                    sketchHeight: vpHeight,
                })
            );
        }
        mountainRangesRef.current = mountainRanges;
    }, [viewportWidth, vpHeight, mountainAmount]);

    const draw = useCallback((p5: p5Types) => {
        // p5.clear(189, 216, 231, 1);
        p5.clear();
        let i = mountainRangesRef.current.length;
        while (i--) {
            mountainRangesRef.current[i].update();
            mountainRangesRef.current[i].render(p5);
        }
    }, [])

    return (<div>
        <Sketch setup={setup} draw={draw}/>
    </div>)
};

export default MountainAnimationDiv;