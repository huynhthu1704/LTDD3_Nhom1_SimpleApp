import { Dimensions } from "react-native-web";

const { width, height } = Dimensions.get("window");
export const COLOR = {
  black: "#000",
  white: "#FFF",
  gray: "3F414E",
  blue: "#7583CA",
  purple: "#67447C",
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
