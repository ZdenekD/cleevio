import {createGlobalStyle} from 'styled-components';
import reset from './global/reset';
import easing from './global/easing';
import variables from './global/variables';
import colors from './global/colors';

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${easing}
    ${variables}
    ${colors}

    html {
        height: 100%;
    }

    body {
        color: var(--color-black);
        font-family: Open Sans, Ubuntu, Tahoma, Nimbus Sans L, Free Sans, sans-serif;
        font-size: 14px;
        line-height: 1.4;
        font-weight: 400;
    }

    strong {
        font-weight: 600;
    }

    ._visuallyhidden {
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        position: absolute;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: none;
    }
`;

export default GlobalStyles;
