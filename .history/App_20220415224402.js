import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestFontScreen from './app/screens/TestFont';
import HomeScreen from './app/screens/HomeScreen';
import SleepingScreen from './app/screens/Sleeping';

const Stack = createStackNavigator();

class App {     
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      "Poppins-Bold": require("./assets/fonts/Poppins-Italic.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }     
  render() {
    console.log("hi");
     return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Font" component={TestFontScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Sleeping" component={SleepingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
  }

 
}

export default App;
