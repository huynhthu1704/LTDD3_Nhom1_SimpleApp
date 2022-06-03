import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Setting from './Setting';
import ProfileHome from './ProfileHome';
import UpdateProfile from './UpdateProfile';
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function ProfileScreen() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <ProfileStack.Screen
        name="ProfileHome"
        options={{
          headerTitle : "Profile"
        }}
        component={ProfileHome}
      />
      <Drawer.Screen name="Update profile" component={UpdateProfile} />
      <Drawer.Screen name="Setting" component={Setting} />
    
    </Drawer.Navigator>
  );
  
}

const styles = StyleSheet.create({})