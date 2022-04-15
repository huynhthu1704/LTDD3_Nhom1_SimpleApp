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
     <SafeAreaView><Text>Hello</Text><Image style = {{width : 10, height : 10}} source={require(launchScreenImg)}></Image></SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})