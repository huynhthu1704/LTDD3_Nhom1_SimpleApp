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
} from "react-native";
import React, { useState } from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../components/HeaderBar";
import { FontAwesome } from "@expo/vector-icons";
import { musicCategory, listInCategory, audio } from "../../constants/data";
import ListInCategory from "./ListInCategory";
import { NavigationContainer } from "@react-navigation/native";

const Item = ({ item }) => (
  <TouchableOpacity>
  <Image width="40" height="40" source={item.img}/>
    <Text>{item.name}</Text>
  </TouchableOpacity>
);

export default function SleepingHome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.purple }}>
      {/* <StatusBar backgroundColor={COLORS.purple} barStyle="dark-content" /> */}
      <StatusBar
        backgroundColor={COLORS.purple}
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <View>
      <SectionList
      sections={musicCategory}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item item={item} />}
      renderSectionHeader={({ section: { name } }) => (
        <Text style={{...FONTS.h2}}>{name}</Text>
      )}
    />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
