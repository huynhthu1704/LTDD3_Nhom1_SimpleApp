import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../components/HeaderBar";

export default function SleepingOnBoardingScreen() {
  return (
    <View>
      <ImageBackground
        style={{ height: SIZES.height, width: SIZES.width }}
        source={images.sleepingOnBoardingImg}
      >
        <View>
          {/* <Text style={{ ...SIZES.h1 }}>Welcome to Sleep</Text> */}
        </View>
        <View> </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
