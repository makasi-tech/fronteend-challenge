//React imports
import { useContext } from "react";
import { UserContext } from "../../context/User/gitUserContext";

//Icons imports
import { FaGithub } from "react-icons/fa";

//Style imports
import { Navbar as NavbarWrapper, Logo, LogoText, NavbarLinks } from "./style";
import { Container } from "@/styles/Global";
import { Anchor } from "@/styles/Anchor";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const { gitUser } = useContext(UserContext);

  return (
    <NavbarWrapper>
      <Container>
        <Logo>
          {gitUser ? (
            <LogoText>{`${gitUser.username}`}</LogoText>
          ) : (
            <LogoText>GitSearch</LogoText>
          )}
        </Logo>
        <NavbarLinks>
          {gitUser && (
            <Anchor
              type="NavBarAnchor"
              target="_blank"
              aria-label="Github"
              href={`https://github.com/${gitUser?.username}`}
            >
              <FaGithub size="2rem" />
            </Anchor>
          )}
        </NavbarLinks>
      </Container>
    </NavbarWrapper>
  );
};
