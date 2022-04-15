import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "../constants/images"

const {launchScreenImg} = images
console.log(launchScreenImg)
export default function LaunchScreen() {
  return (
    <View>
     <SafeAreaView><Image width={100} height={100} source={require(launchScreenImg)}></Image></SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})