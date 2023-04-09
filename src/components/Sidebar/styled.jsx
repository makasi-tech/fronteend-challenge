import styled from "styled-components";

export const SidebarStyled = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #47525e;
  width: 28rem;
  height: calc(100vh - 10px);
  margin: 5px;

  img {
    width: 300px;
    height: auto;
    align-self: center;
    margin-top: 50px;
  }

  .container-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    margin: 20px;
  }

  h1,
  h3,
  h4,
  p {
    color: #f2f2f2;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 300;
    font-style: italic;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 200;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    text-align: justify;
  }

  .container-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
  }

  .container-social {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 8rem;
  }

  button {
    align-self: center;
    width: 150px;
    height: 40px;
    font-weight: 400;
    font-style: italic;
    color: #5e5e5e;
    border-radius: 5px;
    border: none;

    :hover {
      background-color: #ffffff;
    }
    :active {
      background-color: #a2a2a2;
    }
  }
`;
