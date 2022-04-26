import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

export default function Sleeping() {
  const renderHeader = () => {
    return (
      <View style = {{width : "100%", height : 100, backgroundColor : COLORS.black}}>
        <Text>Hello</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 100 }}>{renderHeader()}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
