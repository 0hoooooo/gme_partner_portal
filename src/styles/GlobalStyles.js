import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        line-height: 1;
        font-size: 13px;
        font-family: 'Lato',sans-serif;
        font-weight: 600;
        background-color: #F6F9F0;
    }
    // html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    // a, dl, dt, dd, ol, ul, li, form, table{
    //     margin: 0;
    //     padding: 0;
    //     border: 0;
    //     font-size: 10px;
    //     vertical-align: baseline;
    // }
    label{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 13px;
        font-weight: bold;
        vertical-align: baseline;
    }
   
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;
