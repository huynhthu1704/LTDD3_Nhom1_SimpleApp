import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { user } from "../../constants/data";
export default function UpdateProfile() {
  const userInfo = user;
  return (
    <View>
      <ScrollView>
        <View style = {{justifyContent: center}}>
          <Image style={{ width: 100, height: 100 }} source={userInfo.avatar} />
          <View style={{ flexDirection: "row" }}>
            <Text>Name</Text>
            <Text>{userInfo.fullName}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
