import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { user } from "../../constants/data";
import { FONTS, COLORS } from "../../index";
export default function UpdateProfile() {
  const userInfo = user;
  const avatarSize = 150;
  return (
    <View>
      <ScrollView>
        <View style = {{justifyContent: "center", alignItems: "center"}}>
        <View style = {{height: 200, justifyContent: "center"}}><Image style={{ width: avatarSize, height: avatarSize, borderRadius: avatarSize/2 }} source={userInfo.avatar} /></View>
          
          <View style={{ flexDirection: "row" }}>
            <Text style= {styles.content}>Name</Text>
            <Text>{userInfo.fullName}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    content : {

    }
});
