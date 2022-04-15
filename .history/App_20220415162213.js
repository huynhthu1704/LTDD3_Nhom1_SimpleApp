import { React, useState, Component } from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {FONTS } from "./app/constants/theme";
//import FontLoading from './app/constants/font';

class FontLoading extends Component {
 
  state = {
    fontsLoaded: false,
  };

async loadFonts() {
  await Font.loadAsync({
    // Load a font `Montserrat` from a static resource
    "Poppins-Bold": require("./assets/fonts/Poppins-Italic.ttf"),
  });
  this.setState({ fontsLoaded: true });
}

componentDidMount() {
  this.loadFonts();
}

render() {
 check = this.state.fontsLoaded;
 return <View><Text>Hello</Text></View>;
}
}
export default FontLoading;
// const App = () => {    
//  // console.log(FontLoading.check);
//   // if (!FontLoading.check) {
//   //   return <AppLoading/>;
//   // } else {
//   //   console.log(FONTS.h1);
//     return <SafeAreaView><FontLoading /><Text style = {{fontFamily: "Poppins-Bold"}}>Jello</Text></SafeAreaView>
  
// }
// export default App;