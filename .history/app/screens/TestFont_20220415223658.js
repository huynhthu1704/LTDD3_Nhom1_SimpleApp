import { React, useState, Component } from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FONTS } from "../constants/theme";

class FontLoading extends Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      "Poppins-Bold": require("../../assets/fonts/Poppins-Italic.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={FONTS.h1}>Hello</Text>
      </SafeAreaView>
    );
  }
}
export default FontLoading;
