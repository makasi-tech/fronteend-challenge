//Styled Components imports
import { styled } from "@/styles/stitches.config";

//Style imports
import { colors } from "./Global";

export const Button = styled("button", {
  height: "2.75rem",
  appearance: "none",
  background: "$secondary",
  color: "$primary",
  fontWeight: "600",
  padding: "0 2rem",
  border: "transparent",
  borderRadius: "OneGap",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
  "&:hover": {
    border: "2px solid $primary",
  },

  variants: {
    type: {
      btSearch: {
        height: "100%",
        background: "$secondary",
        borderColor: "$primary",
        border: "3px solid $secondary",
        borderRadius: "0px 5px 5px 0px",
        color: "$primary",
        "&:hover": {
          border: "3px solid $secondary",
          borderColor: "$secondary",
        },
      },
    },
    ...colors,
  },
});
