import HomeScreen from './app/screens/HomeScreen';
import MediationScreen from './app/screens/MediationScreen'
import LaunchScreen from './app/screens/LaunchScreen';
import WorkspaceScreen from './app/screens/WorkspaceScreen';
import SleepingScreen from './app/screens/Sleeping';
import ProfileScreen from './app/screens/ProfileScreen';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NavBar() {
  return (
    <View>
       <Text style={styles.textHome}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Font')}
        title="Go testfont screen"
      />
      <Button
        onPress={() => navigation.navigate('LaunchScreen')}
        title="Go sleeping screen"
      />
    </View>
  )
}

const styles = StyleSheet.create({})