/*Author: Nguyen Thi Quynh Anh
  Date: 05/04/2022
*/
import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class SignInSignUp {
  render(){
    return (
      <ImageBackground
      source={require('../../assets/images/signin_signup_bg.png')}
            style={{ flex: 1,
              width: null,
              height: null,
              }}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.simplehabit}>SIMPLE HABIT</Text>
          <Image style={styles.image} source={require('../../assets/images/signin_signup.png')} />
          <TouchableOpacity
            style={styles.signup}
            onPress={this.props.navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
          <Text>ALREADY HAVE AN ACCOUNT?</Text>
          <TouchableOpacity
          onPress={this.props.navigation.navigate('SignIn')}>
            <Text>LOG IN</Text>
          </TouchableOpacity>
  
        </SafeAreaView>
      </ImageBackground>
  
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 301,
    marginBottom: 130
  },
  simplehabit: {
    paddingTop: 70,
    paddingBottom: 90,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 52,
    letterSpacing: 5,
    color: '#000000',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  signup: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: '#8E97FD',
    borderRadius: 38,
    alignItems: 'center',
    marginBottom: 30
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  }
});
