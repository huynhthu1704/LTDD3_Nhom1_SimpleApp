import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../components/HeaderBar";
import { FontAwesome } from "@expo/vector-icons";
import { musicCategory, listInCategory, audio } from "../../constants/data";
import ListInCategory from "./ListInCategory";
import { Button } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";

function RightIcon() {
  return (
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <TouchableWithoutFeedback onPress={() => setIsTouched(!isTouched)}>
        <FontAwesome
          name="bell"
          size={SIZES.h1}
          color={isTouched ? colorWhenTouch : COLORS.white}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
export default function SleepingHome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.purple }}>
      <StatusBar backgroundColor={COLORS.purple} barStyle="dark-content" />
      <View>
        <Text>hihi</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
