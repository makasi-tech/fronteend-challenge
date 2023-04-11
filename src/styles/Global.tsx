//Styled Components imports
import { createTheme, globalCss, styled } from "@stitches/react";

//React imports
import { ReactNode } from "react";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",
});

export const Flex = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "$HalfGap",
  marginBottom: ".5rem",
  "@mobile": {
    justifyContent: "left",
  },
});

export const PointsContainer = styled(Flex, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  gap: "$OneGap",
});

export const SearchContainer = styled(Flex, {
  flexDirection: "row",
  gap: "$ZeroGap",
});

export const RepoCards = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid $DarkLigthGrey",
  paddingTop: "1rem",
  gap: "$HalfGap",
});

export const colors = {
  color: {
    primary: {
      color: "$primary",
    },

    secondary: {
      color: "$secondary",
    },

    DarkBlueLigthGrey: {
      color: "$DarkBlueLigthGrey",
    },

    DarkLigthGrey: {
      color: "$DarkLigthGrey",
    },

    LigthGrey3: {
      color: "$LigthGrey3",
    },

    error: {
      color: "$error",
    },
  },
};

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
  },
  a: { textDecoration: "none" },
  main: {
    width: "100vw",
    height: "100vh",
  },
});

export const IconSize = 15;
export const BigIconSize = 20;

export const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
  const theme = createTheme({
    colors: {
      primary: "#F2F2F2",
      secondary: "#202e4e",
      DarkBlueLigthGrey: "#19243d",
      DarkLigthGrey: "#454749",
      LigthGrey3: "#CED3D7",
      error: "#e53a0b",
    },
    sizes: {
      container: "85rem",
    },
    spaceGap: {
      HalfGap: "0.5rem",
      OneGap: "1rem",
      ZeroGap: "2rem",
    },
    fonts: {
      titles: '"Lexend", sans-serif;',
      texts: '"Inter", sans-serif',
    },
    fontSizes: {
      h1: "2.75rem",
      titleMobile: "2.3rem",
      h2: "1.75rem",
      h3: "1.50rem",
      h4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",

      // Mobile
      h1Mobile: "$h2",
      h2Mobile: "$h3",
    },
    lineHeights: {
      h1: "3.8rem",
      h2: "2.75rem",
      h3: "2.5rem",
      h4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",

      // Mobile
      h1Mobile: "$h2",
      h2Mobile: "$h3",
    },
  });

  globalStyles();

  const App = styled("div", {
    minHeight: "100vh",
  });

  return <App className={theme}>{children}</App>;
};
