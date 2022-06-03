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
  Button,
  SectionList,
  StatusBar,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../components/HeaderBar";
import { FontAwesome } from "@expo/vector-icons";
import { musicCategory, listInCategory, audio } from "../../constants/data";

import { NavigationContainer } from "@react-navigation/native";
import MeditationAudioItem from "./MeditationAudioItem"

const imgSize = 120;

export default function ChoseMusicForMeditatingScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.purple }}>
      <StatusBar
        backgroundColor={COLORS.purple}
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <View>
        <SectionList style={{ marginLeft: 10 }}
          sections={musicCategory}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            return null;
            return <MeditationAudioItem item={item} navigation={navigation} size={imgSize} />;
          }}
          renderSectionHeader={({ section }) => (
            <View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ ...FONTS.h2, color: COLORS.white, opacity: 0.9 }}>{section.name}</Text>
                <Pressable onPress={() => {
                  navigation.navigate("ListDetail", { title: section.name });
                }}>
                  <Text style={{ ...FONTS.body3, color: COLORS.white, opacity: 0.9 }}>View all </Text></Pressable>
              </View>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <MeditationAudioItem item={item} navigation={navigation} size={imgSize} />}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
