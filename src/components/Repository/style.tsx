//Styled Components import
import { styled } from "../../styles/stitches.config";

export const Repository = styled("article", {
  marginTop: "3rem",
});

export const Link = styled("a", {
  fontSize: "1.5rem",
  color: "$DarkLigthGrey",
  fontWeight: "500",

  "&:hover": {
    color: "$DarkBlueLigthGrey",
  },
});
