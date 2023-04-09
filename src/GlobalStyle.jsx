import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    font-style: italic;
    color: #5e5e5e;
  }

  #root {
    /* width: 58rem; */
  }

`;
