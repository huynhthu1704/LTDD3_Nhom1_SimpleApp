import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "../constants/images"

const {launchScreenImg} = images
export default function LaunchScreen() {
  return (
    <View>
     <SafeAreaView><Image source={require(launchScreenImg)}></Image></SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})