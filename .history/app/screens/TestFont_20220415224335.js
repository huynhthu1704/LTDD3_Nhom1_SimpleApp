import { React, useState, Component } from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FONTS } from "../constants/theme";

class FontLoading extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={FONTS.h1}>Hello</Text>
      </SafeAreaView>
    );
  }
}
export default FontLoading;
