import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./HomeScreen";
import MindfulnessOfBreathing from "../screens/Meditation/MindfulnessOfBreathing";
import WelcomeMeditationScreen from "../screens/Meditation/WelcomeMeditationScreen";
import TutorialMindfulScreen from "./Meditation/TutorialMindfulScreen";
import LaunchScreen from "./LaunchScreen";
import WorkspaceScreen from "./WorkspaceScreen";
import Sleeping from "./Sleeping/Sleeping";
import ProfileHome from "./Profile/ProfileHome";
import { StatusBar } from "react-native-web";
import { COLORS } from "../constants/theme";
import Profile from "./Profile/Profile";
import SleepingHome from "./Sleeping/SleepingHome";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MeditationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeMeditationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MindfulnessOfBreathing"
        component={MindfulnessOfBreathing}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Tutorial" component={TutorialMindfulScreen} />
    </Stack.Navigator>
  );
};
export default function MainContainer() {
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
        <Tab.Screen name="Meditation" component={MeditationNavigator} />
        <Tab.Screen name="Workspace" component={WorkspaceScreen} />
        <Tab.Screen
          name="Sleeping"
          component={Sleeping}
          // options={{
          //   headerShown: false,
          //   tabBarVisible: false, //like this
          //   tabBarButton: (props) => null, //this is additional if you want to hide the tab element from the bottom nav
          // }}
        />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
