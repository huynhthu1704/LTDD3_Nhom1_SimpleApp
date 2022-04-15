import HomeScreen from '../screens/HomeScreen';
import MediationScreen from '../screens/MeditationScreen'
import LaunchScreen from '../screens/LaunchScreen';
import WorkspaceScreen from '../screens/WorkspaceScreen';
import SleepingScreen from '../screens/Sleeping';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

 const NavBar = ({navigation}) => {
  return (
    <View>
       <Text style={styles.textHome}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go Home screen"
      />
      <Button
        onPress={() => navigation.navigate('Meditation')}
        title="Go Meditation screen"
      />
      <Button
        onPress={() => navigation.navigate('Workspace')}
        title="Go Workspace screen"
      />
      <Button
        onPress={() => navigation.navigate('Sleeping')}
        title="Go sleeping screen"
      />
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go Profile screen"
      />
      
    </View>
  )
}

const styles = StyleSheet.create({})
export default NavBar;