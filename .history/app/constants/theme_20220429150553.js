import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const COLORS = {
  black: "#000",
  black2: "rgba(0, 0, 0, 0.2)",
  black4: "rgba(0, 0, 0, 0.4)",
  black6: "rgba(0, 0, 0, 0.6)",
  black8: "rgba(0, 0, 0, 0.8)",
  red : "#FF0000",
  white: "#FFF",
  white2 : "rgba(255, 255, 255, 0.2)",
  gray: "#3F414E",
  lightGray: "#D3D3D3",
  blue: "#7583CA",
  lightBlue : "#8E97FD",
  purple: "#67447C",
  darkPurple : "#4E2F61",
  green: "#61B15A",
  pink: "#B49797",
  pink50: "rgba(180, 151, 151, 0.5)",
};

export const SIZES = {
  // Global size
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // Font size
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // App dimension
  width,
  height,
};

export const FONTS = {
  h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Poppins-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Poppins-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.h1, lineHeight: 36 },
  body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.h2, lineHeight: 30 },
  body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.h3, lineHeight: 22 },
  body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.h4, lineHeight: 22 },
};

export const appTheme = {COLORS, SIZES, FONTS};
