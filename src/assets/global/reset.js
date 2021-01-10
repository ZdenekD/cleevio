const reset = `
    a,
    abbr,
    address,
    article,
    aside,
    audio,
    b,
    blockquote,
    body,
    button,
    canvas,
    caption,
    cite,
    code,
    dd,
    del,
    details,
    dfn,
    div,
    dl,
    dt,
    em,
    embed,
    fieldset,
    figcaption,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    header,
    html,
    i,
    iframe,
    img,
    input,
    ins,
    kbd,
    label,
    legend,
    li,
    main,
    mark,
    nav,
    object,
    ol,
    output,
    p,
    pre,
    q,
    ruby,
    s,
    samp,
    section,
    select,
    small,
    span,
    strong,
    sub,
    summary,
    sup,
    table,
    tbody,
    td,
    textarea,
    tfoot,
    th,
    thead,
    time,
    tr,
    u,
    ul,
    var,
    video {
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        background: transparent;
        font: inherit;
        font-size: 100%;
        outline: 0;
        border: none;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
        line-height: 1.5;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    nav,
    section {
        display: block;
    }

    audio,
    canvas,
    video {
        display: inline-block;
    }

    ol,
    ul {
        list-style: none;
    }

    @media (prefers-reduced-motion: reduce) {
        * {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
        }
    }
`;

export default reset;
