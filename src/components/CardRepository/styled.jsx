import styled from "styled-components";

export const CardRepositorySyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1.5rem 4rem;

  h1, h4, p {
    color: #5e5e5e;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  hr{
    width: 100%;
    border: 1px solid #e6e6e6;
  }

  .container-info {
    display: flex;
    font-size: 1.1rem;
    font-style: italic;
    font-weight: 200;
    width: 100%;
    margin: 0.5rem 0;
    color: #9d9d9d;
    h4 {
      margin-right: 1rem;
      color: #9d9d9d;
      font-weight: 400;
    }
  }
`;
