// You would not believe your eyes...

import React, { useRef } from 'react';
import useDimensions from '../../hooks/useDimensions';
import useAnimationFrame from '../../hooks/useAnimationFrame';
import './Fireflies.css';

const backgroundImage = new Image();
const fireflies = [];
const maxFireflies = 50;
const horizontalVelocityRange = [-1, 1];
const verticalVelocityRange = [-0.5, 0.5];
const sizeRange = [1, 5];
const lifespanRange = [150, 250];
const fireflyColor = {
    red: 243,
    green: 211,
    blue: 64,
    alpha: 0
};

function randomRange([min, max]) {
    return Math.random() * (max - min) + min;
}

function createFly(screenWidth, screenHeight) {
    return {
        x: randomRange([0, screenWidth]),
        y: randomRange([0, screenHeight]),
        xVel: randomRange(horizontalVelocityRange),
        yVel: randomRange(verticalVelocityRange),
        size: randomRange(sizeRange),
        lifespan: randomRange(lifespanRange),
        age: 0,
        color: Object.assign({}, fireflyColor)
    };
}

function clearCanvas(context) {
    context.beginPath();
    if (!backgroundImage.complete) {
        context.fillStyle = 'rgba(0,0,0,1)';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    } else{
        let adjWidth = Math.max(context.canvas.width, 800);
        let adjHeight = Math.max(context.canvas.height, 800);

        context.drawImage(backgroundImage, 0, 0, adjWidth, adjHeight);
    }
}

function replenishFirefiles(fireflies, screenWidth, screenHeight) {
    if (fireflies.length < maxFireflies) {
        fireflies.push(createFly(screenWidth, screenHeight));
    }
}

function updateFireflies(fireflies) {
    // console.log(fireflies);
    fireflies.forEach(fly => {
        fly.x += fly.xVel;
        fly.y += fly.yVel;
        fly.age += 1;

        let halfLife = fly.lifespan / 2;
        if (fly.age < halfLife) {
            // glow brighter for half its life
            fly.color.alpha += 1 / halfLife;
            if (fly.color.alpha > 1) fly.color.alpha = 1;
        } else {
            // glow dimmer for the rest of its life
            fly.color.alpha -= 1 / halfLife;
            if (fly.color.alpha < 0) fly.color.alpha = 0;
        }
    });
}

function removeFireflies(fireflies) {
    let i = fireflies.length;
    while (i--) {
        let firefly = fireflies[i];
        if (firefly.age >= firefly.lifespan)
            fireflies.splice(i, 1);
    }
}

function drawFireflies(context, fireflies) {
    fireflies.forEach(fly => {
        context.beginPath();
        context.fillStyle = `rgba(${fly.color.red}, ${fly.color.green}, ${fly.color.blue}, ${fly.color.alpha})`;
        context.arc(fly.x, fly.y, fly.size, 0, 2 * Math.PI, false);
        context.fill();
    });
}

function Fireflies(props) {
    const canvasRef = useRef(null);
    const { width, height } = useDimensions();

    backgroundImage.src = "images/background.jpg";

    useAnimationFrame(canvasRef, (context, time) => {
        // draw some lovely flying fireflies
        clearCanvas(context);
        replenishFirefiles(fireflies, context.canvas.width, context.canvas.height);
        updateFireflies(fireflies);
        removeFireflies(fireflies);
        drawFireflies(context, fireflies);
    });

    return (
        <div id="firefliesContainer">
            <canvas ref={canvasRef} width={width} height={height} />
            <div id="firefliesOverlay" style={{ width, height }}>{props.overlay()}</div>
        </div>
    );
}

export default Fireflies;