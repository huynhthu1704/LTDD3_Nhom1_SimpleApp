import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons'
import HomeScreen from "./app/screens/HomeScreen";
import MeditationScreen from "./app/screens/MeditationScreen";
import LaunchScreen from "./app/screens/LaunchScreen";
import WorkspaceScreen from "./app/screens/WorkspaceScreen";
import SleepingScreen from "./app/screens/Sleeping";
import ProfileScreen from "./app/screens/ProfileScreen";
import { StatusBar } from "react-native-web";
const Tab = createBottomTabNavigator();
export default function MainContainer() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={(route) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn == "Home") {
            iconName = focused? 'home' : 'home-outline';
          } else if  (rn == "Meditation") {
            iconName = focused? 'lock' : 'lock-outline';
          } else if  (rn == "Workspace") {
            iconName = focused? 'account-clock' : 'account-clock-outline';
          }else if  (rn == "Sleeping") {
            iconName = focused? 'moon' : 'moon-outline';
          }else if  (rn == "Profile") {
            iconName = focused? 'person' : 'person-outline';
          }
          return <Icon name = {iconName} size = {size} color = {color}/>
        },
      })}
    >
      <Tab.Screen name="LaunchScreen" component={LaunchScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Meditation" component={MeditationScreen} />
      <Tab.Screen name="Workspace" component={WorkspaceScreen} />
      <Tab.Screen name="Sleeping" component={SleepingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})