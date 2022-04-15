//Huynh Thi Ngoc Thu
import { React, useState, Component } from "react";
import * as Font from "expo-font";
import { View, Text } from "react-native-web";
class FontLoading extends Component {

    state = {
      fontsLoaded: false,
    };



  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      "Poppins-Bold": require("../../assets/fonts/Poppins-Italic.ttf"),
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
