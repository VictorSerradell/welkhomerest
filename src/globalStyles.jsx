import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
Router {
    overscroll-behavior: none;
    height: 100vh;
  }
  .GlobalStyle {
    overscroll-behavior: none;
    width: 600%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Kanit", sans-serif;
    }
`;