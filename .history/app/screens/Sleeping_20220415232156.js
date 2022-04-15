import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS } from "../constants/theme";


export default function Sleeping() {
  return (
    <View>
      <Text style={FONTS.body2}>Sleeping</Text>
    </View>
  )
}

const styles = StyleSheet.create({})