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

export default function AudioItem({ item }) {
    const [isSelected, setSelected] = useState(false);
    return (
      <TouchableOpacity
        style={{
          borderRadius: 10,
          paddingBottom: SIZES.padding / 3,
          marginRight: 10,
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          // backgroundColor : isSelected? COLORS.darkPurple : COLORS.white2,
        }}
        onPress={() => setSelected(!isSelected)}
      >
        <Image
          style={{ width: "100%", height: 100, borderRadius: 10 }}
          source={{
            uri: "http://khoack.tdc.edu.vn/wp-content/uploads/2017/01/Logo-Cao-dang1.jpg",
          }}
        />
        <Text style={{ ...FONTS.body4, color: COLORS.white }}>{item.name}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.white }}>{item.author}</Text>
      </TouchableOpacity>
    );
  }