import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overscroll-behavior: none;
    height: 100vh;
  }
  .GlobalStyle {
    overscroll-behavior: none;
    overflow-x: auto; 
    width: 600%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Kanit", sans-serif;
  }
`;