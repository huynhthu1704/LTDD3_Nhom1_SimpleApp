import * as React from 'react';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import font from ".app/constants/theme"
export default function App() {
  return (
    <NavigationContainer><Text style = {styles.text}>Hello</Text></NavigationContainer>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'Poppins_Light',
  },
});

