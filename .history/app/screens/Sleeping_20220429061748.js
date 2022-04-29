import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
import React from "react";
import {appTheme, COLORS, FONTS, SIZES, images} from '../constants/index'
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../components/HeaderBar";

export default function Sleeping() {
   console.log(SIZES.width);
  return (
    <View>
    <HeaderBar bgColor = {COLORS.purple} color = {COLORS.white}/>
    <Image style = {{height: 10, width : SIZES.width}} source = {{uri : "https://w0.peakpx.com/wallpaper/422/421/HD-wallpaper-a-dream-beneath-the-rainbow-sleep-adorable-rainbow-anime-anime-girl-female-brown-hair-kitty-cat-chibi-sleeping-short-hair-cute-tree-kawaii-girl-bird-kitten-thumbnail.jpg"}}/>

    </View>
  );
}

const styles = StyleSheet.create({});
