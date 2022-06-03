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
import GettingStartedScreen from "./Meditation/GettingStartedScreen";
import LaunchScreen from "./LaunchScreen";
import WorkspaceScreen from "./WorkspaceScreen";
import Sleeping from "./Sleeping/Sleeping";
import {
  UpdateProfile,
  ProfileHome,
  Setting,
  Favorites,
} from "./Profile/index";
import { StatusBar } from "react-native-web";
import { COLORS } from "../constants/theme";
import Profile from "./Profile/ProfileNavigation";
import SleepingHome from "./Sleeping/SleepingHome";
import PlayAudio from "./Sleeping/PlayAudio";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



//MeditationStackNavigator
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
      <Stack.Screen
        name="Started"
        component={GettingStartedScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  return (
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
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          headerTitle: "Profile",
          headerShown: false,
          headerStyle: {
            backgroundColor: COLORS.red,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        })}
      />
    </Tab.Navigator>
  );
};
const HomeStack = createStackNavigator();
const headerStyle = (backgroundColor) => {
  return {
    headerShown: true,
    headerTintColor: COLORS.read,
    headerStyle: {
      backgroundColor: backgroundColor,
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25,
    },
  };
};
export default function MainContainer() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <HomeStack.Screen name="HomeTabs" component={HomeTabs} />
        <HomeStack.Screen
          name="PlayAudio"
          component={PlayAudio}
          options={{
            headerTitle: "",
            headerShown: true,
            headerTransparent: true,
            ...headerStyle
          }}
        />
        {/* <ProfileStack.Screen
        name="ProfileHome"
        options={{
          headerTitle: "Profile",
        }}
        component={ProfileHome}
      /> */}
        <HomeStack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            // headerTitle: "",
            headerShown: true,
            headerTintColor: COLORS.white,
            headerStyle: {
              backgroundColor: COLORS.pink,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
        <HomeStack.Screen name="UpdateProfile" component={UpdateProfile} />
        <HomeStack.Screen name="Setting" component={Setting} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
