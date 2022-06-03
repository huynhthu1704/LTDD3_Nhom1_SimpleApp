/*Author: Nguyen Thi Quynh Anh
  Date: 05/04/2022
*/
import React, { useState } from "react";
import { SIZES } from '../../constants';
import { Text, View, Icon, StyleSheet, Image, TouchableOpacity, SafeAreaView, ImageBackground, TextInput } from 'react-native';
import User from "./UserData";
// import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default SignIn = ({ navigation }) => {
  //Check textinput email
  const checkEmail = () => {
    if (email.length == 0) {
      alert("Please enter your email!");
      emailTextInput.focus();
      return false;
    }
    return true;
  }
  //Check textinput for password
  const checkPassword = () => {
    if (password.length == 0) {
      alert("Please enter your password!");
      passwordTextInput.focus();
      return false;
    }
    return true;
  }
  emailTextInput = React.createRef();
  passwordTextInput = React.createRef();
  // Search student
  async function searchUserByEmail(email) {
    // Create form data
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("type", "search");
    // Fetch data
    try {
      const response = await fetch(
        "https://studentmanagementapi.000webhostapp.com/API_User.php",
        {
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formdata,
        }
      );
      const json = await response.json();
      setNewUser(json);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(null);
  return (
    <View>
      <ImageBackground style={styles.background} source={require('../../../assets/images/signin_bg.png')}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.simplehabit}>Welcome Back!</Text>
          <TouchableOpacity
            style={styles.facebook}>
            <View style={{ flexDirection: 'row', ustifyContent: 'center' }}>
              <Text style={styles.buttonTextFaceBook}>CONTINUE WITH FACEBOOK</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.google}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.buttonTextGoogle}>CONTINUE WITH GOOGLE</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ marginBottom: 30 }}>OR LOG IN WITH EMAIL</Text>
          <TextInput
            ref={(ref) => {
              emailTextInput = ref;
            }}
            style={styles.textInput}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            onEndEditing={() => {
              searchUserByEmail(email);
            }}
          />
          <TextInput
            ref={(ref) => {
              passwordTextInput = ref;
            }}
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              if (checkEmail() && checkPassword()) {
                if (newUser.length > 0) {
                  //If match with entered password
                  if (newUser[0].password == password) {
                    switch (newUser[0].role) {
                      //If role == 1 go to HomeTabs
                      case 1:
                        alert("Welcome " + newUser[0].username + " to Simple App");
                        User.setCurrentUser(newUser[0]);
                        navigation.navigate('HomeTabs');
                        break;
                      //If role == 0 go to Admin page
                      case 0:
                        console.warn("Go to admin page!");
                      default:
                        break;
                    }
                  } else {
                    alert("Your password is uncorrect, please try again!");
                    passwordTextInput.focus();
                  }
                } else {
                  alert("Your email is unregistered, please try again!");
                  emailTextInput.focus();
                }
              }
            }}>
            <Text style={styles.buttonTextFaceBook}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    width: SIZES.width,
    height: (Platform.OS === 'ios') ? SIZES.androidHeightWithStatusBar.window : SIZES.androidHeightWithStatusBar.window,
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
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
    borderRadius: 20,
    borderColor: '#EBEAEC',
    borderWidth: 0.5,
    padding: 10,
    alignSelf: 'flex-start',
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