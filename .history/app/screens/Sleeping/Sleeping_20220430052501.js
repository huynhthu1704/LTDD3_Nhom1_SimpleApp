import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import SleepingOnBoardingScreen from "./SleepingOnBoardingScreen";
import SleepingHome from "./SleepingHome";
import ListDetail from "./ListDetail";
import ListInCategory from "./ListInCategory";
const SleepingStack = createStackNavigator();

export default function Sleeping() {
  return (
    <SleepingStack.Navigator screenOptions={{ headerShown: false }}>
      <SleepingStack.Screen
        name="OnBoarding"
        component={SleepingOnBoardingScreen}
      />
      <SleepingStack.Screen name="SleepingHome" component={SleepingHome} />
      <SleepingStack.Screen name="ListDetail" component={ListDetail} />
      <SleepingStack.Screen name="ListInCategory" component={ListInCategory} />
    </SleepingStack.Navigator>
  );
}

const styles = StyleSheet.create({});
