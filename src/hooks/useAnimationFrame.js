import React from 'react';

// from css-tricks.com
const useAnimationFrame = (canvasRef, callback) => {
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();

    const animate = (context, time) => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(context, deltaTime)
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame((time) => animate(context, time));
    }

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        console.log(context);

        requestRef.current = requestAnimationFrame((time) => animate(context, time));
        return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once
}

export default useAnimationFrame;
