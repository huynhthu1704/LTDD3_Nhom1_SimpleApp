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

export default function AudioItem({ item, navigation, size, padding, color }) {
  // console.log(JSON.stringify(item));
  // console.log("name: " +item.name);
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        paddingBottom: SIZES.padding / 3,
        margin: padding,
        overflow: "hidden",
        // backgroundColor: "red",
        width: size
      }}
      onPress={() => navigation.navigate("PlayAudio", { audio : item })}
    >
      <Image
        style={{ width: size, height: size, borderRadius: 10 }}
        source={{ uri: item.img }}
      />
      <View style={{ justifyContent: "flex-start" }}>
        <Text
        numberOfLines={2} ellipsizeMode='tail'
          style={{
            ...FONTS.h3,
            color: color ?? COLORS.white,
            overflow: "hidden",
            width: "100%",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: color ?? COLORS.white,
            fontFamily: "Poppins-Italic",
          }}
        >
          {item.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // img : { width: size, height: size, borderRadius: 10 },
});
