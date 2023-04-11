//Styled Components imports
import { styled } from "@/styles/stitches.config";

//Style imports
import { colors } from "./Global";

const bodyDefaultConfig = {
  fontFamily: "$texts",
};

export const Label = styled("label", {
  variants: {
    type: {
      labelSearch: {
        color: "$secondary",
        fontSize: "$h1",
        lineHeight: "$h1",
        ...bodyDefaultConfig,
        "@mobile": {
          color: "black",
          ...bodyDefaultConfig,
          "@mobile": {
            color: "$secondary",
            fontSize: "$titleMobile",
            lineHeight: "$h1",
          },
        },
      },
    },
    ...colors,
  },
});
