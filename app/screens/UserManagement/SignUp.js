/*Author: Nguyen Thi Quynh Anh
  Date: 05/04/2022
*/
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView
} from "react-native";

import React, { useState } from "react";
import { SIZES } from "../../constants";
import { authentication } from "../../firebase/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";

// Add user
const postUser = (fullname, email, password) => {
  // Create form data to send data
  let formdata = new FormData();
  formdata.append("username", fullname);
  formdata.append("email", email);
  formdata.append("password", password);
  formdata.append("type", "insert");
  // Fetch data
  try {
    fetch("https://studentmanagementapi.000webhostapp.com/API_User.php", {
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formdata,
    });
  } catch (error) {
    console.warn("Error: " + error.message);
  }
};

export default SignUp = ({ navigation }) => {
  //Check textinput email
  const checkEmail = () => {
    if (email.length == 0) {
      alert("Please enter your email!");
      emailTextInput.focus();
      return false;
    }
    return true;
  }
  //Check textinput for username
  const checkUsername = () => {
    if (fullname.length == 0) {
      alert("Please enter your fullname!");
      fullnameTP.focus();
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
  fullnameTP = React.createRef();
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
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(null);

  const handleSignUp = () =>{
    // authentication
    // .createUserWithEmailAndPassword(email, password)
    // .then(userCredentials =>{
    //   const user = userCredentials.user;
    //   console.warn(user.email);
    // })
    // .catch(error => alert(error.message))
    createUserWithEmailAndPassword(authentication, email, password)
    .then((re) => {
      console.log(re);
    })
    .catch((re) => {
      console.log(re);
    })
  }
  return (
    <KeyboardAvoidingView 
    behavior={"position"}
    style={{ flex : 1}}
    >
      <ImageBackground style={styles.background} source={require('../../../assets/images/signin_bg.png')}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.simplehabit}>Create your account</Text>
          {/* Continue with facebook */}
          <TouchableOpacity
            style={styles.facebook}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.buttonTextFaceBook}>CONTINUE WITH FACEBOOK</Text>
            </View>
          </TouchableOpacity>
          {/* Continue with google */}
          <TouchableOpacity
            style={styles.google}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.buttonTextGoogle}>CONTINUE WITH GOOGLE</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ marginBottom: 30 }}>OR LOG IN WITH EMAIL</Text>
          <TextInput
            ref={(ref) => {
              fullnameTP = ref;
            }}
            style={styles.textInput}
            placeholder="Enter your fullname"
            value={fullname}
            onChangeText={(text) => {
              setFullName(text);
            }}
          />
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
              if (checkUsername() && checkEmail() && checkPassword()) {
                // if (newUser != null) {
                //   if (newUser.length != 1) {
                //     alert("Create user with email " + email + " successfully!");
                //     postUser(fullname, email, password);
                //     setEmail("");
                //     setFullName("");
                //     setPassword(""); 7
                //   } else {
                //     alert("Create user with email " + email + " fail!\nMaybe duplicate email, please enter another email");
                //   }
                // } else {
                //   alert("Create user with email " + email + " fail!\nMaybe duplicate email, please enter another email");
                // }
                handleSignUp();
              }
            }}
          >
            <Text style={styles.buttonTextFaceBook}>GET STARTED</Text>
          </TouchableOpacity>
          <Text>ALREADY HAVE AN ACCOUNT?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn')
            }}>
            <Text style={{ color: 'blue' }}>LOG IN</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
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