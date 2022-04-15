import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestFontScreen from './app/screens/TestFont';
import HomeScreen from './app/screens/HomeScreen';
import SleepingScreen from './app/screens/Sleeping';
import { Component } from 'react/cjs/react.development';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FONTS } from "./app/constants/theme";
import LaunchScreen from './app/screens/LaunchScreen';

const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LaunchScreen" headerMode="none">
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Mediation" component={Mediation} />
          <Stack.Screen name="Workspace" component={Workspace} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
  }

 
}

export default App;
