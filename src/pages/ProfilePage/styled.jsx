import styled from "styled-components";

export const ProfilePageStyled = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  
  @media screen and (max-device-width : 30em) {
    flex-direction: column;
  }
  @media screen and (min-device-width : 30.063em) and (max-device-width : 50em) {
    flex-direction: column;
  }

  aside {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    @media screen and (max-device-width : 30em) {
      position: relative;
    }
    @media screen and (min-device-width : 30.063em) and (max-device-width : 50em) {
      position: relative;
  }
  }

  .container-repositories {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 28rem;

    @media screen and (max-device-width : 30em) {
      margin-left: 0;
    }

    @media screen and (min-device-width : 30.063em) and (max-device-width : 50em) {
      margin-left: 0;
    }
  }

  .loading {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
