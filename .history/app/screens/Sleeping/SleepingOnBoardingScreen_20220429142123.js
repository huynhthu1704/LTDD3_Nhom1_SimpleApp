import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderBar from "../../components/HeaderBar";
export default function SleepingOnBoardingScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="cover"
        source={images.sleepingOnBoardingImg}
      >
        <HeaderBar color="white" />
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ ...FONTS.h1, color: COLORS.white }}>
            Welcome to Sleep
          </Text>
          <Text
            style={{ ...FONTS.body3, color: COLORS.white, textAlign: "center" }}
          >
            Explore the new king of sleep. It uses sound and vesualization to
            create perfect conditions for refreshing sleep.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: COLORS.lightBlue,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.padding / 2,
            }}
            onPress = {()=> {
navigation.navigate('SleepingHome')
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});