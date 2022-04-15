import { 
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic 
} from '@expo-google-fonts/poppins'; 
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default FontLoading = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic ,
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  }
}

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
    h1 : {fontFamily : "Poppins_300Light", fontSize : SIZES.h1, lineHeight: 36},
}