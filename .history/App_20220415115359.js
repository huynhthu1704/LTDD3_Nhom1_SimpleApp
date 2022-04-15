import * as React from 'react';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  return (
    <NavigationContainer><Text>Hello</Text></NavigationContainer>
  );
}
// import { View, Text, StyleSheet } from "react-native";
// import React from "react";
// import { AntDesign } from "@expo/vector-icons";
// import { 
//   Poppins_100Thin,
//   Poppins_100Thin_Italic,
//   Poppins_200ExtraLight,
//   Poppins_200ExtraLight_Italic,
//   Poppins_300Light,
//   Poppins_300Light_Italic,
//   Poppins_400Regular,
//   Poppins_400Regular_Italic,
//   Poppins_500Medium,
//   Poppins_500Medium_Italic,
//   Poppins_600SemiBold,
//   Poppins_600SemiBold_Italic,
//   Poppins_700Bold,
//   Poppins_700Bold_Italic,
//   Poppins_800ExtraBold,
//   Poppins_800ExtraBold_Italic,
//   Poppins_900Black,
//   Poppins_900Black_Italic 
// } from '@expo-google-fonts/poppins'; 
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
// const App = () => {
//   let [fontsLoaded, error] = useFonts({
//     Poppins_100Thin,
//     Poppins_100Thin_Italic,
//     Poppins_200ExtraLight,
//     Poppins_200ExtraLight_Italic,
//     Poppins_300Light,
//     Poppins_300Light_Italic,
//     Poppins_400Regular,
//     Poppins_400Regular_Italic,
//     Poppins_500Medium,
//     Poppins_500Medium_Italic,
//     Poppins_600SemiBold,
//     Poppins_600SemiBold_Italic,
//     Poppins_700Bold,
//     Poppins_700Bold_Italic,
//     Poppins_800ExtraBold,
//     Poppins_800ExtraBold_Italic,
//     Poppins_900Black,
//     Poppins_900Black_Italic ,
//     Poppins_Light : require('./assets/fonts/Poppins-Light.ttf')
//   });
//   if (!fontsLoaded) {
//     return <AppLoading/>;
//   }
//   return (
//     <View>
//     <Text>Hello</Text>
//     <Text>Hi</Text>
//       <Text style={styles.text}>App</Text>
//       <AntDesign name="caretright" size={24} color="blue" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     fontFamily: 'Poppins_Light',
//   },
// });
// export default App;

