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
    <SafeAreaView>
      <ImageBackground
        style={{
          // height: SIZES.height,
          // width: SIZES.width,
          flex: 1, justifyContent : 'center', alignItems : 'center'
        }}
        source={images.sleepingOnBoardingImg}
      >
      <Text>Hi</Text>
        {/* <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 200,
            backgroundColor: "red",
          }}
        >
          <Text style={{ ...SIZES.h1 }}>Welcome to Sleep</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 200,
            backgroundColor: "green",
          }}
        >
          <TouchableOpacity>
            <Text>Get started</Text>
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
