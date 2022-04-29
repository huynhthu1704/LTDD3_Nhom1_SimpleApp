import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
export default function HeaderBar() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        backgroundColor: COLORS.purple,
      }}
    >
      <View style={{ flex: 1, alignSelf: "flex-start" }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={SIZES.h1} color={COLORS.red} />
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ flex: 1, alignSelf: "flex-end", backgroundColor: "black" }}
      >
          <Ionicons name="arrow-back" size={SIZES.h1} color={COLORS.gray} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
