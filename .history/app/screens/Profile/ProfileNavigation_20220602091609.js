import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Setting from './Setting';
import ProfileHome from './ProfileHome';
import UpdateProfile from './UpdateProfile';
const ProfileStack = createStackNavigator();
// const Drawer = createDrawerNavigator();
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
      <ProfileStack.Screen name="Update profile" component={UpdateProfile} />
      <ProfileStack.Screen name="Setting" component={Setting} />
    
    </ProfileStack.Navigator>
  );
  
}

const styles = StyleSheet.create({})