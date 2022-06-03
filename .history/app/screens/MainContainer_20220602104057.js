import { StyleSheet, Text, View, StatusBar} from "react-native";
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
import WorkspaceScreen from "./WorkspaceScreen";
import {
  UpdateProfile,
  Profile,
  Setting,
  Favorites,
} from "./Profile/index";
import { COLORS } from "../constants/theme";
import { SleepingHome, ListDetail, PlayAudio } from "../screens/Sleeping/index";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const headerStyle = (color, backgroundColor) => {
  return {
    headerShown: true,
    headerTintColor: color,
    headerStyle: {
      backgroundColor: backgroundColor,
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25,
    },
  };
};
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
        component={SleepingHome}
        options={{
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          headerTitle: "Profile",
          ...headerStyle(COLORS.black, ""),
        })}
      />
    </Tab.Navigator>
  );
};
const HomeStack = createStackNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <HomeStack.Screen name="HomeTabs" component={HomeTabs} />

        {/* Sleeping module */}
        <HomeStack.Screen
          name="ListDetail"
          component={ListDetail}
          options={ ({route}) => {
            return {
              ...headerStyle(COLORS.white, COLORS.purple),
              headerTitle: route.params.title
            }
            
          }}
        />
        <HomeStack.Screen
          name="PlayAudio"
          component={PlayAudio}
          options={{
            headerTitle: "",
            headerTransparent: true,
            ...headerStyle(COLORS.white, ""),
          }}
        />
        {/* Sleeping module */}

        <HomeStack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            ...headerStyle(COLORS.white, COLORS.pink),
          }}
        />
        <HomeStack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{
            headerTitle: "Update",
            ...headerStyle(COLORS.white, COLORS.pink),
          }}
        />
        <HomeStack.Screen
          name="Setting"
          component={Setting}
          options={{
            ...headerStyle(COLORS.white, COLORS.pink),
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
