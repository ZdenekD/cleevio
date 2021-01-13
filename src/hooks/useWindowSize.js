import React from 'react';

const initialState = {
    width: 0,
    height: 0,
};
const useWindowSize = () => {
    const [size, setSize] = React.useState(initialState);
    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    React.useEffect(() => {
        handleResize();
    }, []);

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return size;
};

export default useWindowSize;
