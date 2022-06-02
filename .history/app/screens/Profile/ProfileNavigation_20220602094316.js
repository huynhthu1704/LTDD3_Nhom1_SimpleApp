import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Setting from './Setting';
import ProfileHome from './ProfileHome';
import UpdateProfile from './UpdateProfile';
import Favorites from './Favorites';
import { COLORS } from '../../constants';
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
      <ProfileStack.Screen name="Favorites" component={Favorites} options={
        {
          headerBackgroundL COLORS.pink
        }
      } />
      <ProfileStack.Screen name="UpdateProfile" component={UpdateProfile} />
      <ProfileStack.Screen name="Setting" component={Setting} />
    
    </ProfileStack.Navigator>
  );
  
}

const styles = StyleSheet.create({})