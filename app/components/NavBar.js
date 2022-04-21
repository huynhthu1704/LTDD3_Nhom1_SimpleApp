/*Author: Huynh Thi Ngoc Thu
  Date: 04/21/2022
*/
import HomeScreen from '../screens/HomeScreen';
import MediationScreen from '../screens/MeditationScreen'
import LaunchScreen from '../screens/LaunchScreen';
import WorkspaceScreen from '../screens/WorkspaceScreen';
import SleepingScreen from '../screens/Sleeping';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web';

const NavBar = ({ navigation, backgroundColor }) => {
  return (
    <View style={{ width: 100, height: 100, backgroundColor }}>
      <TouchableOpacity>
        <View></View>
      </TouchableOpacity>
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