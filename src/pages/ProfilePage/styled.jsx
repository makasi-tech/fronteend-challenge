import styled from "styled-components";

export const ProfilePageStyled = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;

  aside {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
  }

  .container-repositories {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 28rem;
  }

  .loading {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
