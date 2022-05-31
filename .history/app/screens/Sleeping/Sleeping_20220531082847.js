import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import SleepingOnBoardingScreen from "./SleepingOnBoardingScreen";
import SleepingHome from "./SleepingHome";
import ListDetail from "./ListDetail";
import ListInCategory from "./ListInCategory";
import PlayAudio from "./PlayAudio";
import { FontAwesome } from "@expo/vector-icons";

const SleepingStack = createStackNavigator();

export default function Sleeping() {
  return (
    <SleepingStack.Navigator
      screenOptions={{ headerShown: true, headerTransparent: true }}
    >
      <SleepingStack.Screen
        name="OnBoarding"
        component={SleepingOnBoardingScreen}
      />
      <SleepingStack.Screen
        name="SleepingHome"
        component={SleepingHome}
        options={{
          headerTitle: "Sleeping",
          headerRight: () => (
            <TouchableHighlight style={{marginRight: 20}} onPress={() => {}}>
              <FontAwesome
                name="bell"
                size={SIZES.h1}
                color={COLORS.white}
              />
            </TouchableHighlight>
            <TouchableHighlight style={{marginRight: 20}} onPress={() => {}}>
              <FontAwesome
                name="bell"
                size={SIZES.h1}
                color={COLORS.white}
              />
            </TouchableHighlight>
          ),
        }}
      />
      <SleepingStack.Screen name="ListDetail" component={ListDetail} />
      <SleepingStack.Screen name="ListInCategory" component={ListInCategory} />
      <SleepingStack.Screen name="PlayAudio" component={PlayAudio} />
    </SleepingStack.Navigator>
  );
}

const styles = StyleSheet.create({});
