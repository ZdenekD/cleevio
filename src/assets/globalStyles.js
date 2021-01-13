import {createGlobalStyle} from 'styled-components';
import reset from './styles/reset';
import easing from './styles/easing';
import variables from './styles/variables';
import colors from './styles/colors';

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${easing}
    ${variables}
    ${colors}

    html {
        height: 100%;
    }

    body {
        --font-size: 13px;
        color: var(--color-black);
        font-family: Open Sans, Ubuntu, Tahoma, Nimbus Sans L, Free Sans, sans-serif;
        font-size: var(--font-size);
        line-height: 1.4;
        font-weight: 400;
        transition: font-size var(--transition-duration-out) var(--transition-timing);

        @media (min-width: 900px) {
            --font-size: 14px;
        }
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
