import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
import React from "react";
import {appTheme, COLORS, FONTS, SIZES, images} from '../constants/index'
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../components/HeaderBar";

export default function Sleeping() {
  // console.log(images.sleepingOnBoardingImg)
  return (
    <View>
    <HeaderBar bgColor = {COLORS.purple} color = {COLORS.white}/>
    <Image style = {{height: 10, width : SIZES.width}} source = {require('../../assets/images/sleeping_bird.png')}/>

    </View>
  );
}

const styles = StyleSheet.create({});
