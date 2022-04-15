import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIions from "react-native-vector-icons";
import HomeScreen from "./HomeScreen";
import MeditationScreen from "./MeditationScreen";
import LaunchScreen from "./LaunchScreen";
import WorkspaceScreen from "./WorkspaceScreen";
import SleepingScreen from "./Sleeping";
import ProfileScreen from "./ProfileScreen";
import { StatusBar } from "react-native-web";
const Tab = createBottomTabNavigator();
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn == "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn == "Meditation") {
              iconName = focused ? "lock" : "lock-outline";
            } else if (rn == "Workspace") {
              iconName = focused ? "account-clock" : "account-clock-outline";
            } else if (rn == "Sleeping") {
              iconName = focused ? "moon" : "moon-outline";
            } else if (rn == "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
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
  );
}

const styles = StyleSheet.create({});
