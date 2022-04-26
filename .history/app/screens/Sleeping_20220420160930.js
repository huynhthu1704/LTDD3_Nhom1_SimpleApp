import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS } from "../constants/theme";
import LinearGradient from "expo-linear-gradient"

export default function Sleeping() {
  return (
    <View>
    <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}>
      <Text style={FONTS.body4}>Sleeping</Text>
    </LinearGradient>
      
    </View>
  )
}

const styles = StyleSheet.create({})