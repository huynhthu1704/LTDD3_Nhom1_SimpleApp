import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
  } from "react-native";
  import React, { useState } from "react";
  import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { NavigationContainer } from "@react-navigation/native";

export default function AudioItem({ item, navigation }) {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 10,
          paddingBottom: SIZES.padding / 3,
          margin: SIZES.padding /4,
          width: 100,
        }}
        onPress={() => navigation.navigate("PlayAudio", {id : item.id})}
      >
        <Image
          style={{ width: "100%", height: 100, borderRadius: 10 }}
          source={{
            uri: item.img,
          }}
        />
        <View style = {{justifyContent : 'flex-start'}}>
            <Text style={{ ...FONTS.h4, color: COLORS.white }}>{item.name}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.white, fontFamily : 'Poppins-Italic' }}>{item.author}</Text>
        </View>
      
      </TouchableOpacity>
    );
  }