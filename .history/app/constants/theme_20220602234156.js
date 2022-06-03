import { Dimensions, StatusBar } from "react-native";
const androidHeightWithStatusBar = {
  device: Dimensions.get('screen').height,
  window: Dimensions.get('window').height,
  statusBar: StatusBar.currentHeight,
  bottomTap: Dimensions.get('screen').height - (Dimensions.get('window').height + StatusBar.currentHeight),
}
const androidWidth = {
  device: Dimensions.get('screen').width,
  window: Dimensions.get('window').width
}
const { width, height } = Dimensions.get("window");
export const COLORS = {
  black: "#000",
  black2: "rgba(0, 0, 0, 0.2)",
  black4: "rgba(0, 0, 0, 0.4)",
  black6: "rgba(0, 0, 0, 0.6)",
  black8: "rgba(0, 0, 0, 0.8)",
  red: "#FF0000",
  white: "#FFF",
  white2: "rgba(255, 255, 255, 0.2)",
  gray: "#3F414E",
  lightGray: "#D3D3D3",
  lightGray2: "#F2F3F7",
  blue: "#7583CA",
  lightBlue: "#8E97FD",
  purple: "rgba(206, 170, 255, 1)",
  darkPurple: "#4E2F61",
  green: "#61B15A",
  pink: "#B49797",
  pink50: "rgba(180, 151, 151, 0.5)",
};

export const SIZES = {
  // Global size
  base: 8,
  font: 14,
  radius: 20,
  padding: 24,

  // Font size
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 20,
  body4: 16,
  body5: 14,

  // App dimension
  width,
  height,
  androidHeightWithStatusBar,
  androidWidth
};

export const FONTS = {
  h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Poppins-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Poppins-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 20 },
  body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 16 },
};

export const appTheme = { COLORS, SIZES, FONTS };
