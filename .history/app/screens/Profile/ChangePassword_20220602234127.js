import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";

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
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
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
            borderRadius: 20
          }}
        >
          <TextInput
            style={[{ ...FONTS.body3, color: COLORS.black }]}
            placeholderTextColor={COLORS.light}
            placeholder="Enter password"
            secureTextEntry = {true}
          ></TextInput>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
