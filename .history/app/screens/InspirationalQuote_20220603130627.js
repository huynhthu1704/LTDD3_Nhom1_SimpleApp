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

export default function InspirationalQuote({ item}) {
    const width = 200;
    const height = 300;
    return (
      <View
        style={{
          borderRadius: 10,
        //   paddingBottom: SIZES.padding / 3,
          margin: 10,
          width: SIZES.width,
          justifyContent: "center"
        }}
      >
        <ImageBackground
          style={{ width: width, height: height, borderRadius: 10, justifyContent: "center", alignItems: "center"}}
          source={item.img}
        >
 <Text style={{ ...FONTS.h3, textAlign: "center"}}>

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