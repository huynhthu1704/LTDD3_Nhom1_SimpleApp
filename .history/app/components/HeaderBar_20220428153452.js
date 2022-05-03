import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function HeaderBar({ bgColor, right }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        backgroundColor: bgColor,
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
            color={COLORS.lightGray}
          />
          <Text style = {{ color : COLORS.lightGray, fontSize : SIZES.h2}}>Back</Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Ionicons
            name="arrow-back"
            size={SIZES.h1}
            color={COLORS.lightGray}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
