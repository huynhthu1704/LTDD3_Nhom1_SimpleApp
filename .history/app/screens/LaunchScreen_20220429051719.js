/*Author: Huynh Thi Ngoc Thu
  Date: 04/21/2022
*/
import { StyleSheet, ImageBackground, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, images } from '../constants/index'

const {launchScreenImg} = images.launchScreenImg;
export default function LaunchScreen() {
  return (
   
    <View>
     {/* <Text>{launchScreenImg}</Text> */}
     <SafeAreaView><Text>Hello</Text><ImageBackground style = {{width : SIZES.width, height : SIZES.height}} source={launchScreenImg}></ImageBackground></SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})