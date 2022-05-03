import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SIZES, COLORS, FONTS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

export default function HeaderBar({ bgColor, color, borderBottomColor, name, leftIcon, rightIcon }) {
  const navigation = useNavigation();
  let colorWhenTouch = "";
  switch (rightIcon) {
    case "heart":
      colorWhenTouch = COLORS.red;
      break;
    case "bell":
      colorWhenTouch = COLORS.black;
      break;
  }
  const [isTouched, setIsTouched] = useState(false);
  const [like, setLike] = useState(false);

  return (
    <View
      style={{
        borderBottomColor: borderBottomColor,
        borderBottomWidth: borderBottomColor? 1.5 : 0,
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        backgroundColor: bgColor,
        paddingVertical: SIZES.base,
        marginBottom: 8,
      }}
    >
      <View style={{ flex: 1, alignSelf: "flex-start" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name={leftIcon} size={SIZES.h2} color={color} />
          </TouchableOpacity>
          <Text style={{ color: color, ...FONTS.h2, marginLeft: 5 }}>
            {name}
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableWithoutFeedback onPress={() => setIsTouched(!isTouched)}>
          <FontAwesome
            name={rightIcon}
            size={SIZES.h1}
            color={isTouched? colorWhenTouch : COLORS.white}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
