import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SleepingOnBoardingScreen() {
  return (
    <View>
      <Text>SleepingOnBoardingScreen</Text>
      <Image source = {require('../../assets/images/sleeping_bird')}/>
    </View>
  )
}

const styles = StyleSheet.create({})