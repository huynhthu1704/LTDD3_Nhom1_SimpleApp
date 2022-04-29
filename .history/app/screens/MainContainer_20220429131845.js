import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export {
  HomeScreen,
  MeditationScreen,
  LaunchScreen,
  WorkspaceScreen,
  Sleeping,
  ProfileScreen,
} from "./index";
import { COLORS } from "../constants/theme";
const Tab = createBottomTabNavigator();
export class MainContainer {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            showLabel: false,
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
                  color={focused ? COLORS.black : COLORS.black6}
                />
              );
            },
          })}
          activeTintColor={COLORS.black}
          inactiveTintColor={COLORS.red}
        >
          {/* <Tab.Screen name="LaunchScreen" component={LaunchScreen} /> */}
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Meditation" component={MeditationScreen} />
          <Tab.Screen name="Workspace" component={WorkspaceScreen} />
          <Tab.Screen name="Sleeping" component={Sleeping} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
