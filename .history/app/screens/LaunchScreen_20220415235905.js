import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "../constants/images"

const {launchScreenImg} = images
console.log(launchScreenImg)
export default function LaunchScreen() {
  return (
   
    <View>
     <Text>{launchScreenImg}</Text>
     <SafeAreaView><Text>Hell</Text><Image source={require('../../assets/images/launch_screen_img.jpg')}></Image></SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})