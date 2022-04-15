import { React, useState, Component } from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {FONTS } from "./app/constants/theme";
import FontLoading from './app/constants/font';


const App = () => {    
 // console.log(FontLoading.check);
  // if (!FontLoading.check) {
  //   return <AppLoading/>;
  // } else {
  //   console.log(FONTS.h1);
    return <SafeAreaView><FontLoading /><Text style = {{fontFamily: "Poppins-Bold"}}>Jello</Text></SafeAreaView>
  
}
export default App;