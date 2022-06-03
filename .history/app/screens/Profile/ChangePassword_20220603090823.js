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
//  const headerHeight = useHeaderHeight();

export default function ChangePassword() {
  const pwd = user.password;
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
        </View>
        <View style={{ flex: 2, justifyContent: "center" }}>
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
              const nameRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
              if (nameRegex.test(newPassword)) {
                alert("OK");
              } else {
                alert("Re type");
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
