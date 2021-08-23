import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */
    html, body, div, span, button, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    html {
        font-size: 62.5%;
    }
    body {
        --primary-red: #f32530;
        --secundary-red: #9e2836;
        --bg-primary: #071321;
        --bg-secundary: #172331;
        --bg-tertiary: #060e19;
        --primary-blue: #3fb1e1;
        --secundary-blue: #0089d1;
        --clear: #fff;
        --dark: #000;
        --grid: 1fr minmax(320px, 1080px) 1fr;
        line-height: 1;
        font-family: 'Montserrat', sans-serif;
        color: var(--clear);
        --xsmall: 1.2rem;
        --small: 1.6rem;
        --medium: 2rem;
        --large: 2.4rem;
        --xlarge: 3rem;
        --xxlarge: 3.4rem;
        --smallBigTitle: 5.4rem;
        --mediumBigTitle: 9.4rem;
        --largeBigTitle: 12.6rem;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    p {
        display: block;
         font-size: 1.4rem;
        line-height: 2rem;
        margin-bottom: 2rem;
        color: hotpink;
    }


`
export default GlobalStyles
