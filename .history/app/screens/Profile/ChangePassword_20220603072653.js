import { StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

export default function ChangePassword() {
  return (
    // <ScrollView>
    <View
      style={{
        alignItems: "center",
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: "red",
      }}
    >
      <View
        style={{
          // height: 200,
          justifyContent: "center",
          alignContent: "center",
          flex: 1,
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
      <View style= {{flex : 1, justifyContent: "center", width: "90%"}}>
        <View
          style={styles.textView}
        >
          <TextInput
            style={[{ ...FONTS.body3, color: COLORS.black }]}
            placeholderTextColor={COLORS.light}
            placeholder="Enter your password"
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View
          style={styles.textView}
        >
          <TextInput
            style={[{ ...FONTS.body3, color: COLORS.black }]}
            placeholderTextColor={COLORS.light}
            placeholder="Enter new password"
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View
          style={styles.textView}
        >
          <TextInput
            style={[{ ...FONTS.body3, color: COLORS.black }]}
            placeholderTextColor={COLORS.light}
            placeholder="Confirm new password"
            secureTextEntry={true}
          ></TextInput>
        </View>
      </View>
      <View style={{flex : 1, justifyContent: "center"}}>
      <TouchableOpacity style = {{
        paddingVertical: 10, paddingHorizontal: 30,
        backgroundColor: COLORS.purple,
        borderRadius: 15
      }}>
        <Text style={{...FONTS.h3}}>DONE</Text>
      </TouchableOpacity>
        {/* <Button title="Miufn" color={COLORS.purple}></Button> */}
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
textView : {
  backgroundColor: COLORS.lightGray,
  paddingVertical: 10,
  paddingHorizontal: 20,
  width: "100%",
  borderRadius: SIZES.radius,
  marginVertical: 10,
  // flex: 1
}

});
