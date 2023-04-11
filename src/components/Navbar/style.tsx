//Styled Components imports
import { styled } from "../../styles/stitches.config";

//Style imports
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Buttons";

export const Navbar = styled("nav", {
  borderBottom: "3px solid $secondary",
  background: "$primary",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1.5rem 0 0 0",
  width: "100%",
  height: "5rem",
  zIndex: "2",

  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "row",
    },
  },
});

export const Logo = styled(Flex, {
  alignItems: "center",
});

export const LogoText = styled("span", {
  fontSize: "2rem",
  fontWeight: 600,
  color: "$secondary",
  fontFamily: '"Inconsolata"',
  "@mobile": {
    fontSize: "1.5rem",
  },
  marginLeft: "1rem",
});

export const NavbarLinks = styled(Flex, {
  "@mobile": {
    flexWrap: "wrap",
    justifyContent: "space-between",
    [`& ${Button}`]: {
      width: "100%",
      order: "3",
    },
  },
});
