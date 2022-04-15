import { React, useState, Component } from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {FONTS } from "./app/constants/theme";
import FontLoading from './app/constants/font';


const App = () => {
  console.log("hi");
  if (FontLoading.check) {
    console.log(FontLoading.check);
    return <AppLoading/>;
  } else {
    console.log(FONTS.h1);
    return <SafeAreaView><Text style = {FONTS.h1}>Jello</Text></SafeAreaView>
  }
}
export default App;