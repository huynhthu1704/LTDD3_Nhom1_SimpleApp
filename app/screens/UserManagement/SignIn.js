/*Author: Nguyen Thi Quynh Anh
  Date: 05/04/2022
*/
import * as React from 'react';
import { Text, View, Icon, StyleSheet, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import users from './UserData';

export default class SignIn {
  state = {
    email: '',
    password: ''
  }
  checkAccount = (email, password) => {
    for (var i = 0; i <= users.length - 1; i++) {
      if (users[i].email === email && users[i].password === password) {
        this.props.navigation.navigate('HomeScreen')
      }
    }
  }
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/signin_bg.png')}
        style={{
          flex: 1,
          width: null,
          height: null,
        }}>

        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.back}
            onPress={this.props.navigation.navigate('SignInSignUp')}>
            <Icon
              name='arrow-back-outline' type='ionicon' />
          </TouchableOpacity>
          <Text style={styles.simplehabit}>Welcome Back!</Text>
          <TouchableOpacity
            style={styles.facebook}>
            <View style={{ flexDirection: 'row', ustifyContent: 'center' }}>
              <Icon
                name='logo-facebook' type='ionicon' color='white' />
              <Text style={styles.buttonTextFaceBook}>CONTINUE WITH FACEBOOK</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.google}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Icon
                name='logo-google' type='ionicon' color='black' />
              <Text style={styles.buttonTextGoogle}>CONTINUE WITH GOOGLE</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ marginBottom: 30 }}>OR LOG IN WITH EMAIL</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email address"
            onChangeText={(email) => this.setState({ email })} />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })} />
          <TouchableOpacity
            style={styles.login}
            onPress={() => this.checkAccount(this.state.email, this.state.password)}>
            <Text style={styles.buttonTextFaceBook}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
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
    paddingTop: 50,
    paddingBottom: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 52,
    letterSpacing: 1,
    color: '#000000',
  },
  buttonTextFaceBook: {
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonTextGoogle: {
    color: 'black',
    marginTop: 5,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  facebook: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#7583CA',
    borderRadius: 38,
    alignItems: 'center',
    marginBottom: 30
  },
  google: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 55,
    paddingRight: 55,
    backgroundColor: 'white',
    borderRadius: 38,
    alignItems: 'center',
    marginBottom: 30,
    borderColor: '#EBEAEC',
    borderWidth: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  back: {
    borderRadius: '50%',
    borderColor: '#EBEAEC',
    borderWidth: 0.5,
    padding: 10,
    alignSelf: 'left',
    marginLeft: 20,
    marginTop: 20
  },
  textInput: {
    margin: 10,
    paddingLeft: 20,
    height: 50,
    backgroundColor: '#F2F3F7',
    width: 330,
    borderRadius: 15,
  },
  login: {
    marginTop: 30,
    width: 330,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#8E97FD',
    borderRadius: 38,
    alignItems: 'center',
    marginBottom: 50
  }
});