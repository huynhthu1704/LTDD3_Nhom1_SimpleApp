import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function HeaderBar({ bgColor, color, right }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        backgroundColor: bgColor,
        paddingVertical : SIZES.base
      }}
    >
      <View style={{ flex: 1, alignSelf: "flex-start" }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={SIZES.h2}
            color={color}
          />
          <Text style = {{ color : color, fontSize : SIZES.h2, marginLeft: 5}}>Back</Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Ionicons
            name="arrow-back"
            size={SIZES.h1}
            color={color}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
