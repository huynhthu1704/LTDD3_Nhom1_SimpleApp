import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../components/HeaderBar";
import { SIZES } from '../constants/theme'

export default function Sleeping() {
  return (
    <View>
    <HeaderBar bgColor = {COLORS.purple} color = {COLORS.white}/>
    <Image style = {{height: SIZES.height, width : SIZES.width}} source = {require('../../assets/images/launchscreen_img.jpg')}/>

    </View>
  );
}

const styles = StyleSheet.create({});
