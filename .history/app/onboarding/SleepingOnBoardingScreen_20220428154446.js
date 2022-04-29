import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../constants/theme'

export default function SleepingOnBoardingScreen() {
  return (
    <View>
      <Text>SleepingOnBoardingScreen</Text>
      <Image style = {{height: SIZES.height, width : SIZES.width}} source = {require('../../assets/images/sleeping_bird.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({})