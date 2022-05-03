import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../components/HeaderBar";

const musicCategory = [
  {
    id: 1,
    name: "Sleep stories",
  },
  {
    id: 1,
    name: "Meditation",
  },
  {
    id: 1,
    name: "Music",
  },
];

export default function SleepingHome() {
  return (
    <View>
      <HeaderBar
        bgColor={COLORS.purple}
        color={COLORS.white}
        name="Sleeping"
        rightIcon="bell"
      />
      <Image
        style={{ height: SIZES.height, width: SIZES.width }}
        source={images.sleepingOnBoardingImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({});