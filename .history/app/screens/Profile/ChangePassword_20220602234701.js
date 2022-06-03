import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

export default function ChangePassword() {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          // justifyContent: 'center',
          // backgroundColor: "red"
        }}
      >
        <View
          style={{
            height: 200,
            justifyContent: "center",
            alignContent: "center",
            flex: 1, flexWrap: "wrap"
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
              fontSizeS: SIZES.h1 * 3
            }}
          >
            CHANGE PASSWORD
          </Text>
        </View>

        <View
          style={{
            backgroundColor: COLORS.lightGray,
            paddingVertical: 10,
            paddingHorizontal: 20,
            width: "80%",
            borderRadius: SIZES.radius,
            marginVertical: 10,
            justifyContent: "center"
          }}
        >
          <TextInput
            style={[{ ...FONTS.body3, color: COLORS.black }]}
            placeholderTextColor={COLORS.light}
            placeholder="Enter your password"
            secureTextEntry = {true}
          ></TextInput>
        </View>
        <View
          style={{
            backgroundColor: COLORS.lightGray,
            paddingVertical: 10,
            paddingHorizontal: 20,
            width: "80%",
            borderRadius: SIZES.radius,
            marginVertical: 10
          }}
        >
          <TextInput
            style={[{ ...FONTS.body3, color: COLORS.black }]}
            placeholderTextColor={COLORS.light}
            placeholder="Enter new password"
            secureTextEntry = {true}
          ></TextInput>
        </View>
        <View
          style={{
            backgroundColor: COLORS.lightGray,
            paddingVertical: 10,
            paddingHorizontal: 20,
            width: "80%",
            borderRadius: SIZES.radius,
            marginVertical: 10
          }}
        >
          <TextInput
            style={[{ ...FONTS.body3, color: COLORS.black }]}
            placeholderTextColor={COLORS.light}
            placeholder="Confirm new password"
            secureTextEntry = {true}
          ></TextInput>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
