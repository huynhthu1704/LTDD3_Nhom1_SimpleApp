import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ScrollView, ImageBackground, Image } from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants/index";
import { user } from "../constants/data";
const HomeScreen = ({ navigation }) => {
  const userName = user.fullName;
  const [hour, setHour] = useState(0);
  useEffect(() => {
    getHour();
  }, []);
  function getHour() {
    const date = new Date();
    const currentHour = date.getHours();
    setHour(currentHour);
  }
  return (
    <ScrollView>
      <View style={{height : 100, justifyContent: "center", paddingHorizontal : 20}}>
        <Text style={{
          ...FONTS.h1
        }}>{hour < 12? "Good morning" : "Good evening"}</Text>
        <Text style={{
          ...FONTS.body4,
          color: COLORS.black6
        }}>We wish you have a good day</Text>
      </View>
      <View>
        <View style={styles.categoryItem}>
        <Image source={images.launchScreenImg} style={{width: 40, height: 40}}/>
        <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
        resizeMode="cover"
        source={images.launchScreenImg}
      ></ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textHome: {
    fontSize: 50,
    color: "red",
  },
  categoryItem : {
width: 100
  }
});
export default HomeScreen;
