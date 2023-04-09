import styled from 'styled-components';

export const HomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  section {
    display: flex;
  }

  input {
    width: 400px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #47525e;
    padding-left: 15px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100px;
    height: 40px;
    font-weight: 300;
    font-style: italic;
    font-size: 1rem;
    color: white;
    background-color: #47525e;
    border: none;
    border-radius: 5px;

    :hover {
      background-color: #66758b;
    }
    :active {
      background-color: #1e2228;
    }
  }
`