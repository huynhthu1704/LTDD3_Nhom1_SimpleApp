/*Author: Nguyen Thi Quynh Anh
  Date: 05/04/2022
*/
import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { SIZES } from '../../constants';
import { authentication, db } from '../../firebase/firebase';
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import User from './UserData';
export default SignInSignUp = ({ navigation }) => {
  //Get current user
  const getCurrentUser = async () => {
    const q = query(collection(db, "users"), where("email", "==", authentication.currentUser.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      User.currentUser = doc.data();
      switch (User.currentUser.role) {
        //Check if role == 0 => navigate to Admin
        case 0:
          navigation.navigate("Admin");
          break;
        //Check if role == 1 => navigate to HomeTabs
        case 1:
          navigation.navigate("HomeTabs");
        default:
          break;
      }
    });
  };
  //console.log(JSON.stringify(authentication.currentUser.email, null, 4));
  useEffect(() => {
    if (authentication.currentUser != null) {
      getCurrentUser();
      //console.log(JSON.stringify(authentication.currentUser, null, 4));
    }
  })
  return (
    <View>
      <ImageBackground style={styles.background} source={require('../../../assets/images/signin_signup_bg.png')}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.simplehabit}>SIMPLE HABIT</Text>
          <Image style={styles.image} source={require('../../../assets/images/signin_signup.png')} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp')
            }}
          >
            <View style={styles.signup}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn')
            }}
          >
            <View style={styles.signup}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </View>
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
