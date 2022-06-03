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

export default function ChangePassword({ navigation }) {
  const pwd = user.password;
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const passwordValidate = (pwd, newPwd, confirmPwd) => {
    console.log("Pwd: " + pwd);
    console.log("New Pwd: " + newPwd);
    console.log("Confirm Pwd: " + confirmPwd);
    const regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (pwd.trim() == "" || newPwd.trim() == "" || confirmPwd.trim() == "") {
      setMessage("Missing input");
      return;
    }
    if (pwd != pwd) {
      setMessage("Your password is wrong");
      return;
    }
    if (newPwd != confirmPwd) {
      setMessage("Confirm password does not match");
      return;
    }
    if (regex.test(newPwd) && regex.test(confirmPwd)) {
      alert("OK");
      navigation.navigate("UpdateProfile");
    }
  };
  return (
    <KeyboardAwareScrollView
      keyboardVerticalOffset={500}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>CHANGE PASSWORD</Text>
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
          <Text style={styles.message}>{message}</Text>
        </View>
        <View style={{ justifyContent: "center", marginTop: 40 }}>
          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() =>
              passwordValidate(password, newPassword, confirmPassword)
            }
          >
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>DONE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  titleSection: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    minHeight: 150,
  },
  titleText: {
    ...FONTS.h1,
    fontSize: SIZES.h1,
  },
  message: { color: COLORS.red, fontSize: SIZES.body3 },
  doneBtn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.purple,
    borderRadius: 15,
  },
});
