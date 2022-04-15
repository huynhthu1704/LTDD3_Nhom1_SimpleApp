import { React, useState, Component } from 'react';
import * as Font from 'expo-font';
class FontLoading extends Component {
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
  
    render() {}
  }
  export default FontLoading;