import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LaunchScreen() {
  return (
    <View>
     <SafeAreaView><Image source={require('../constants/images')}></Image></SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})