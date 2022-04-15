import { React, useState} from 'react';
import {Text, StyleSheet} from 'react-native'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Fonts, fetchFonts} from "./app/constants/theme";


export default function App() {
  if (fetchFonts) {
    return <AppLoading/>;
  }
  return (
    <NavigationContainer><Text style = {Fonts.h1}>Hello</Text></NavigationContainer>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'Poppins_Bold',
  },
});

