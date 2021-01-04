import { useState, useEffect } from 'react';

function getDimensions() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

export default function useDimensions() {
    const [dimensions, setDimensions] = useState(getDimensions());

    useEffect(() => {
        function onResize() {
            setDimensions(getDimensions());
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    });
    return dimensions;
}
