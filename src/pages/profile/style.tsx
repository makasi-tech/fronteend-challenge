//Styled Components imports
import { styled } from "@/styles/stitches.config";

//Style imports
import { Flex } from "@/styles/Global";

export const MainContainer = styled("section", {
  padding: "4rem 0 0rem 0",
  background: "$primary",
});

export const UserArea = styled("aside", {
  backgroundColor: "$secondary",
  width: "32%",
  display: "flex",
  flexDirection: "column",
  gap: "$HalfGap",
  position: "sticky",
  top: "0rem",
  padding: "2rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const Wrapper = styled("div", {
  width: "60%",
  marginTop: "2rem",
  padding: "0 5rem 0 5rem",
  "@mobile": {
    width: "100%",
    paddingLeft: "0",
    paddingRight: "1rem",
  },
});

export const WrapperColumns = styled(Flex, {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});
export const LogoImage = styled("img", {
  width: "100%",
  height: "auto",
  margin: "auto",
  borderRadius: "5px",

  "@mobile": {
    width: "15%",
    height: "auto",
  },
});
