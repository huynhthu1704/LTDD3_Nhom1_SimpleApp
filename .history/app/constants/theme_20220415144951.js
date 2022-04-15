import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
    return Font.loadAsync({
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf')
    });
    };

import { Dimensions } from "react-native-web";
const {width, height} = Dimensions.get('window');
export const COLOUR = {
    black: "#000",
    white : "#FFF",
    gray : "3F414E",
    blue: "#7583CA",
    purple : "#67447C",
    green : "#61B15A",
    pink : "#B49797",
    pink50 : "rgba(180, 151, 151, 0.5)"

}

export const SIZES = {
    // Global size
    base : 8,
    font : 14,
    radius : 12,
    padding : 24,

    // Font size
    h1 : 30,
    h2 : 22, 
    h3 : 16,
    h4 : 14,
    body1 : 30,
    body2 : 22, 
    body3 : 16,
    body4 : 14,

    // App dimension
    width,
    height
}

export const FONTS = {
    h1 : {fontFamily : "poppins-bold", fontSize : SIZES.h1, lineHeight: 36},
}