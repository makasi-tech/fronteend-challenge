import styled from 'styled-components';

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
    align-items: flex-end;
    margin-right: 15rem;

  }
`