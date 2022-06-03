import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { user } from "../../constants/data";
import { useHeaderHeight } from "@react-navigation/elements";
import { Header } from "@react-navigation/stack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationRouteContext } from "@react-navigation/native";
//  const headerHeight = useHeaderHeight();

export default function ChangePassword({navigation}) {
  const pwd = user.password;
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  return (
    // <KeyboardAvoidingView
    // >
    // <View style={{flex: 1}}>
    <KeyboardAwareScrollView
      keyboardVerticalOffset={500}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        // alignItems: "center",
        flex: 1,
        // justifyContent: 'center',
      }}
    >
      {/* <ScrollView style={{ backgroundColor: "orange" }}> */}
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            // height: 200,
            justifyContent: "center",
            alignContent: "center",
            flex: 1,
            minHeight: 150,
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
              fontSize: SIZES.h1,
            }}
          >
            CHANGE PASSWORD
          </Text>
        </View>
        <View style={{ justifyContent: "center", width: "90%" }}>
          <View style={styles.textView}>
            <TextInput
              style={[{ ...FONTS.body3, color: COLORS.black }]}
              placeholderTextColor={COLORS.light}
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={(text) => {
                setPassword(text);
              }}
            ></TextInput>
          </View>
          <View style={styles.textView}>
            <TextInput
              style={[{ ...FONTS.body3, color: COLORS.black }]}
              placeholderTextColor={COLORS.light}
              placeholder="Enter new password"
              secureTextEntry={true}
              onChangeText={(text) => {
                setNewPassword(text);
              }}
            ></TextInput>
          </View>
          <View style={styles.textView}>
            <TextInput
              style={[{ ...FONTS.body3, color: COLORS.black }]}
              placeholderTextColor={COLORS.light}
              placeholder="Confirm new password"
              secureTextEntry={true}
              onChangeText={(text) => {
                setConfirmPassword(text);
              }}
            ></TextInput>
          </View>
          <Text style={{ color: COLORS.red, fontSize: SIZES.body3 }}>
            {message}
          </Text>
        </View>
        <View style={{ justifyContent: "center", marginTop: 40 }}>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 30,
              backgroundColor: COLORS.purple,
              borderRadius: 15,
            }}
            onPress={() => {
              console.log("Pwd: " + password);
              console.log("New Pwd: " + newPassword);
              console.log("Confirm Pwd: " + confirmPassword);
              const regex = new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
              );
              if (
                password.trim() == "" ||
                newPassword.trim() == "" ||
                confirmPassword.trim() == ""
              ) {
                setMessage("Missing input");
                return;
              }
              if (password != pwd) {
                setMessage("Your password is wrong");
                return;
              }
              if (newPassword != confirmPassword) {
                setMessage("Confirm password does not match");
                return;
              }
              if (regex.test(newPassword) && regex.test(confirmPassword)) {
                alert("OK");
                navigation.navigate("UpdateProfile");
              }
            }}
          >
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>DONE</Text>
          </TouchableOpacity>
          {/* <Button title="Miufn" color={COLORS.purple}></Button> */}
        </View>
      </View>
      {/* </ScrollView> */}
    </KeyboardAwareScrollView>
    //  </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    backgroundColor: COLORS.lightGray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    borderRadius: SIZES.radius,
    marginVertical: 10,
    // flex: 1
  },
});
