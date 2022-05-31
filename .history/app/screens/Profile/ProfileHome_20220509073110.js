import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar";
import { COLORS } from "../../constants";


export function ProfileAvatar() {
  return (<View style={{ backgroundColor: "red" }}>
   
  </View>);
}
export default function ProfileHome() {
  return (
    <View>
      <HeaderBar
        name="Profile"
        color={COLORS.white}
        leftIcon="arrow-left"
        rightComponent={<ProfileAvatar/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
