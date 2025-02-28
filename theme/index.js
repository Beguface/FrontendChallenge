// example theme.js
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "48em",
  lg: "64em",
  xl: "80em",
  xlg: "90em",
});

const overrides = {
  breakpoints,

  styles,

  fonts: {
    body: "Poppins, Inter, sans-serif",
    heading: "Poppins, Inter, sans-serif",
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
};

export default extendTheme(overrides);
