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

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #f5f5f5;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5e5e5e;
    border-radius: 8px;
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
    @media screen and (max-device-width : 30em) {
      width: 100%;
    }

    @media screen and (min-device-width : 30.063em) and (max-device-width : 50em) {
      width: 100%;
    }
  }

`;
