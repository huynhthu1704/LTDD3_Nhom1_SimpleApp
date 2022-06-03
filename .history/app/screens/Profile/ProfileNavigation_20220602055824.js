import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Setting from './Setting';
import ProfileHome from './ProfileHome';
const ProfileStack = createStackNavigator();

export default function ProfileScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: true }}>
      <ProfileStack.Screen
        name="ProfileHome"
        options={{
          headerTitle : "Profile"
        }}
        component={ProfileHome}
      />
      <ProfileStack.Screen name="Setting" component={Setting} />
    
    </ProfileStack.Navigator>
  );
  
}

const styles = StyleSheet.create({})