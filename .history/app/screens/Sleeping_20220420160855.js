import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS } from "../constants/theme";
import LinearGradient from "expo-linear-gradient"

export default function Sleeping() {
  return (
    <View>
      <Text style={FONTS.body4}>Sleeping</Text>
    </View>
  )
}

const styles = StyleSheet.create({})