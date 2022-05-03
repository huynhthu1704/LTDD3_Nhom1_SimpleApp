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
import HeaderBar from "../../components/HeaderBar";

export default function SleepingOnBoardingScreen() {
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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ ...FONTS.h1, COLORS.white}}>Welcome to Sleep</Text>
          <Text style = {{ ...FONTS.body1, COLORS.white }}>
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
          <TouchableOpacity>
            <Text>Get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
