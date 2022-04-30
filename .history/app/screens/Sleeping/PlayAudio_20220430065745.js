import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBar from '../../components/HeaderBar'
import { SIZES, COLORS } from '../../constants/index'
export default function PlayAudio() {
  return (
    <View style = {{backgroundColor : 'red', flex : 1}}>
    <HeaderBar bgColor="transparent" color = {COLORS.white}/>
      <Text>PlayAudio</Text>
    </View>
  )
}

const styles = StyleSheet.create({})