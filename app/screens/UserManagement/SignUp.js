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

import React, { useState, useEffect } from "react";
import { SIZES } from "../../constants";
import { authentication } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase";
import { async } from "@firebase/util";
import User from "./UserData";
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
  ///CHECK TEXT INPUT
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

  ///METHOD FOR API PHP 
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
  ///METHOD FOR FIRESTORE
  //SignUp with authentication
  const handleSignUp = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        //console.log(re);
        //When authenticating user successfully will add that user to firestore
        addUserToFirestore(fullname, email, password, lastUser.id);
        alert("Congratulations " + fullname + " has successfully registered an account for simple app!");
        getLastUser();
      })
      .catch((re) => {
        alert("Sign up for failed!\nDetailed error: " + re);
      })
  }
  //Get user from firestore
  const getLastUser = async () => {
    const usersCol = collection(db, 'users');
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    lastUser = userList[userList.length - 1];
  }
  //Add user to firestore
  const addUserToFirestore = async (fullname, email, password, id) => {
    id = id + 1;
    let date = new Date();
    // Add a new document in collection "users"
    await setDoc(doc(db, "users", ("user" + id)), {
      id: id,
      username: fullname,
      email: email,
      password: password,
      user_image: "https://firebasestorage.googleapis.com/v0/b/fir-simpleapp-894a6.appspot.com/o/user_image%2Fuser_default.png?alt=media&token=d39ba0b5-30df-45f9-bceb-42ae49b8bd04",
      created_at: date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes(),
      role: 1,
      disable: false,
    });
  }

  ///PROPERTIES
  emailTextInput = React.createRef();
  fullnameTP = React.createRef();
  passwordTextInput = React.createRef();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var lastUser = null;
  //useEffect to get last user to set id
  useEffect(() => {
    getLastUser();
  });
  //const [newUser, setNewUser] = useState(null);
  return (
    <KeyboardAvoidingView
      behavior={"position"}
      style={{ flex: 1 }}
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
            <Text style={styles.buttonTextFaceBook}>SIGN UP</Text>
          </TouchableOpacity>
          <Text>ALREADY HAVE AN ACCOUNT?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
              //console.log(lastUser.id)
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