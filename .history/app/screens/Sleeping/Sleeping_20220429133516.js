import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {appTheme, COLORS, FONTS, SIZES, images} from '../../constants/index';
import { LinearGradient } from "expo-linear-gradient";
import SleepingOnBoardingScreen from "./SleepingOnBoardingScreen";
import SleepingHome from "./SleepingHome";

const SleepingStack = createStackNavigator();

export default function Sleeping() {
  return (
    <View><Text>Hi</Text></View>
  //  <SleepingStack.Navigator>s
  //    {/* <SleepingStack.Screen name = 'OnBoarding' component = {SleepingOnBoardingScreen}/> */}
  //    <SleepingStack.Screen name = 'SleepingHome' component = {SleepingHome}/>
  //  </SleepingStack.Navigator>
  );
}

const styles = StyleSheet.create({});
