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
  return (
    <TouchableOpacity
      style={{
    borderRadius: 10,
    paddingBottom: SIZES.padding / 3,
    margin: padding,
  }}
      onPress={() => navigation.navigate("PlayAudio", { id: item.id })}
    >
      <Image
        style={{width: size, height: size, borderRadius: 10 }}
        source={item.img}
      />
      <View style={{ justifyContent: "flex-start" }}>
        <Text style={{ ...FONTS.h3, color: color ?? COLORS.white }}>
          {item.name}
        </Text>
        <Text
          style={styles.authorName}
        >
          {item.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
   
  // img : { width: size, height: size, borderRadius: 10 },
  authorName : {
    ...FONTS.body4,
    color: color ?? COLORS.white,
    fontFamily: "Poppins-Italic",
  }
})
