import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import HeaderBar from '../../components/HeaderBar'
import { SIZES, COLORS } from '../../constants/index'
import data from '../../constants/data'
export default function PlayAudio({route}) {
    const audio = data.audio.find((item) => item.id == route.params.id)
  return (
    <View style = {{backgroundColor : 'red', flex : 1}}>
    <ImageBackground style = {{width : '100%', height: '100%'}} source={audio.img}>
         <HeaderBar bgColor="transparent" color = {COLORS.white} rightIcon='heart-o'/>
      <Text>PlayAudio</Text>
    </ImageBackground>
   
    </View>
  )
}

const styles = StyleSheet.create({})