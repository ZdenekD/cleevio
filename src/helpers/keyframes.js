import {keyframes} from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const rotateHalf = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
`;

export {
    rotate,
    rotateHalf
};
