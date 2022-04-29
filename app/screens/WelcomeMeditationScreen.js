/*Author: Pham Van Thanh
  Date: 04/21/2022
*/
import { StyleSheet, Text, View, ImageBackground, StatusBar, Dimensions } from 'react-native'
import { welcomeMeditationBackground } from '../constants/images'
import React from 'react'

const { width, height } = Dimensions.get("window");
const data = {
  meditation: "Meditation",
  title: "Train your mind to focus",
  content: "Meditation changes the brain, helps you fight stress and illness, and much more.",
  button: "Practice now"
}

export default function WelcomeMeditationScreen() {
  return (
    <View style={styles.container}>
       <StatusBar
        backgroundColor="#002142"
        barStyle="dark-content"
        hidden={false}
      /> 
      <ImageBackground style={styles.background} source={require('../../assets/images/welcometomeditaion.jpg')}>
        <Text style={styles.meditation}>{data.meditation}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width,
    height
  },
  meditation: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})