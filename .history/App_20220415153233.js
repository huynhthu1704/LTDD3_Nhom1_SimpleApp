import { React, useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {loadFont, FONTS } from "./app/constants/theme";

class App extends Component {

  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Montserrat: require('./assets/fonts/Poppins-Italic.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // Use the font with the fontFamily property after loading
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }}>Default Font</Text>
          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Montserrat</Text>
          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>
            Montserrat-SemiBold
          </Text>
        </View>
      );
    } else {
      return null;
    }
  }
}
