//Styled Components imports
import { styled } from "@/styles/stitches.config";

//Style imports
import { colors } from "./Global";

const headingsDefaultConfig = {
  fontFamily: "$titles",
};

const bodyDefaultConfig = {
  fontFamily: "$texts",
};

export const Text = styled("p", {
  color: "$primary",
  fontSize: "$text1",
  fontWeight: 400,

  variants: {
    type: {
      h1: {
        fontSize: "$h1",
        lineHeight: "$h1",
        fontWeight: 700,
        ...headingsDefaultConfig,
        "@mobile": {
          fontSize: "$h1Mobile",
          lineHeight: "$h1Mobile",
        },
      },
      h2: {
        fontSize: "$h2",
        lineHeight: "$h2",
        fontWeight: 600,
        ...headingsDefaultConfig,
      },
      h3: {
        fontSize: "$h3",
        lineHeight: "$h3",
        fontWeight: 500,
        ...headingsDefaultConfig,
      },
      h4: {
        fontSize: "$h4",
        lineHeight: "$h4",
        fontWeight: 500,
        ...headingsDefaultConfig,
      },
      text1: {
        color: "$LigthGrey3",
        fontSize: "$text1",
        lineHeight: "$text1",
        ...bodyDefaultConfig,
        "@mobile": {
          color: "black",
        },
      },
      text2: {
        fontSize: "$text2",
        lineHeight: "$text2",
        ...bodyDefaultConfig,
      },
      error: {
        fontSize: "$text2",
        lineHeight: "$text2",
        ...bodyDefaultConfig,
      },
    },
    ...colors,
  },
});
