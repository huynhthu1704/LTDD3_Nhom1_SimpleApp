import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../components/HeaderBar";
export default function Sleeping() {
  return (
    <View>
    <HeaderBar bgColor = {COLORS.purple} color = {COLORS.white}/>
    </View>
  );
}

const styles = StyleSheet.create({});
