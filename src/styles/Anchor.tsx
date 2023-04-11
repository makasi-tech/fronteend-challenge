//Styled Components imports
import { styled } from "@/styles/stitches.config";

//Style imports
import { colors } from "./Global";

export const Anchor = styled("a", {
  variants: {
    type: {
      SocialMediaLinks: {
        borderColor: "transparent",
        color: "$primary",
      },
      NavBarAnchor: {
        borderColor: "transparent",
        color: "$secondary",
      },
      BackLink: {
        backgroundColor: "$primary",
        borderColor: "transparent",
        color: "$DarkLigthGrey",
        borderRadius: "5px",
        padding: "1rem",
        margin: "auto",
        marginTop: "1rem",
        width: "30%",
        textAlign: "center",
      },
    },
    ...colors,
  },
});
