//Styled Components imports
import { styled } from "@/styles/stitches.config";

const bodyDefaultConfig = {
  fontFamily: "$texts",
};

export const Input = styled("input", {
  width: "30rem",
  padding: "1rem",
  color: "$DarkLigthGrey",
  fontSize: "$text1",
  lineHeight: "$h4",
  border: "3px solid $secondary",
  borderRadius: "5px 0px 0px 5px",

  ...bodyDefaultConfig,
  "@mobile": {
    width: "15rem",
    color: "$secondary",
  },
});
