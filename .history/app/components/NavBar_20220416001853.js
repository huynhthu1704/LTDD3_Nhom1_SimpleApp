import HomeScreen from '../screens/HomeScreen';
import MediationScreen from '../screens/MediationScreen'
import LaunchScreen from '../screens/LaunchScreen';
import WorkspaceScreen from '../screens/WorkspaceScreen';
import SleepingScreen from '../screens/Sleeping';
import ProfileScreen from '../screens/ProfileScreen';
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