import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Component } from "react/cjs/react.development";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FONTS } from "./app/constants/theme";
import HomeScreen from "./app/screens/HomeScreen";
import MeditationScreen from "./app/screens/MeditationScreen";
import LaunchScreen from "./app/screens/LaunchScreen";
import WorkspaceScreen from "./app/screens/WorkspaceScreen";
import SleepingScreen from "./app/screens/Sleeping";
import ProfileScreen from "./app/screens/ProfileScreen";
import { StatusBar } from "react-native-web";

const Tab = createBottomTabNavigator();

class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
      "Poppins-BlackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
      "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
      "Poppins-ExtraBoldItalic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
      "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-ExtraLightItalic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
      "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-MediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto"></StatusBar>
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
                  iconName = focused? 'user' : 'user-outline';
                }
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
      </View>
    );
  }
}

export default App;
