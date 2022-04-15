import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
            const icons = {
              Home: "home",
              Meditation: "leaf-maple",
              Workspace: "account-clock",
              Sleeping: "moon-waxing-crescent",
              Profile: "account-settings",
            };
            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                size={size}
                color={color}
              />
            );
            
          },
        })}
       
       
            activeTintColor = 'black'
            inactiveTintColot = 'red'
       
       
        }
       
      >
        {/* <Tab.Screen name="LaunchScreen" component={LaunchScreen} /> */}
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
