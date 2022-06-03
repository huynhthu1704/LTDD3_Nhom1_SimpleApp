import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ScrollView, ImageBackground } from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants/theme";
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
        <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="cover"
        source={images.sleepingOnBoardingImg}
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
width: SIZES.width / 2
  }
});
export default HomeScreen;
