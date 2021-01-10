const easing = `
    :root {
        --ease-in-sine: cubic-bezier(.47, 0, .745, .715);
        --ease-out-sine: cubic-bezier(.39, .575, .565, 1);
        --ease-in-out-sine: cubic-bezier(.445, .05, .55, .95);
        --ease-in-quad: cubic-bezier(.55, .085, .68, .53);
        --ease-out-quad: cubic-bezier(.25, .46, .45, .94);
        --ease-in-out-quad: cubic-bezier(.455, .03, .515, .955);
        --ease-in-cubic: cubic-bezier(.55, .055, .675, .19);
        --ease-out-cubic: cubic-bezier(.215, .61, .355, 1);
        --ease-in-out-cubic: cubic-bezier(.645, .045, .355, 1);
        --ease-in-quart: cubic-bezier(.895, .03, .685, .22);
        --ease-out-quart: cubic-bezier(.165, .84, .44, 1);
        --ease-in-out-quart: cubic-bezier(.77, 0, .175, 1);
        --ease-in-quint: cubic-bezier(.755, .05, .855, .06);
        --ease-out-quint: cubic-bezier(.23, 1, .32, 1);
        --ease-in-out-quint: cubic-bezier(.86, 0, .07, 1);
        --ease-in-expo: cubic-bezier(.95, .05, .795, .035);
        --ease-out-expo: cubic-bezier(.19, 1, .22, 1);
        --ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
        --ease-in-circ: cubic-bezier(.6, .04, .98, .335);
        --ease-out-circ: cubic-bezier(.075, .82, .165, 1);
        --ease-in-out-circ: cubic-bezier(.785, .135, .15, .86);
        --ease-in-back: cubic-bezier(.6, -.28, .735, .045);
        --ease-out-back: cubic-bezier(.175, .885, .32, 1.275);
        --ease-in-out-back: cubic-bezier(.68, -.55, .265, 1.55);
    }
`;

export default easing;
