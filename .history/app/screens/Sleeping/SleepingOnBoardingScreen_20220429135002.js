import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
import React from "react";
import {appTheme, COLORS, FONTS, SIZES, images} from '../../constants/index'
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../components/HeaderBar";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";

export default function SleepingOnBoardingScreen() {
  return (
    <View>
    <ImageBackground style = {{height: SIZES.height, width : SIZES.width}} source = {images.sleepingOnBoardingImg}/>
    </View>
  );
}

const styles = StyleSheet.create({});
