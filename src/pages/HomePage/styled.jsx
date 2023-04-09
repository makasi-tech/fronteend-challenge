import styled from 'styled-components';

export const HomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media screen and (max-device-width : 30em) {
    gap: 18px;
  }

  section {
    display: flex;

    @media screen and (max-device-width : 30em) {
      flex-direction: column;
      align-items: center;
      height: 6rem;
      justify-content: space-between;
    }
  }

  input {
    width: 25rem;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #47525e;
    padding-left: 15px;

    @media screen and (max-device-width : 30em) {
      width: 20rem;
    }
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

    @media screen and (max-device-width : 30em) {
      width: 100%;
      font-size: 1.2rem;
      justify-content: center;
      gap: 15px;
    }
  }
`