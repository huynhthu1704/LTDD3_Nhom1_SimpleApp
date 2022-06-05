import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../constants/index";
import { NavigationContainer } from "@react-navigation/native";

export default function InspirationalQuote({ item }) {
  const width = 200;
  const height = 300;
  const transformPosition = (text_position) => {
    const positionAfter = {};
    console.log(text_position);
    switch (text_position) {
      case "center":
        return {
          // position : "center"
        };
      case "above center":
        return {
          position: "absolute",
          top: 20,
        };
      case "bottom center":
        return {
          position: "absolute",
          bottom: 20,
        };
    }
    // return positionAfter;
  };
  return (
    <View
      style={{
        width: SIZES.width,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        style={{
          width: width,
          height: height,
          justifyContent: "center",
          alignItems: "center",
        }}
        source={{ uri: item.img }}
        resizeMode="cover"
      >
        <Text
          style={{
            ...FONTS.h3,
            textAlign: "center",
            ...transformPosition(item.text_position),
            color: item.color,
          }}
        >
          {item.quote}
        </Text>
      </ImageBackground>
      {/* <View style={{ justifyContent: "flex-start" }}>
       */}
      {/* <Text
            style={{
              ...FONTS.body4,
              color: color ?? COLORS.white,
              fontFamily: "Poppins-Italic",
            }}
          >{item.author}</Text> */}
      {/* </View> */}
    </View>
  );
}
