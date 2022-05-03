import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../components/HeaderBar";
import { FlatList } from "react-native-gesture-handler";

const musicCategory = [
  {
    id: 1,
    name: "Sleep stories",
  },
  {
    id: 2,
    name: "Meditation",
  },
  {
    id: 3,
    name: "Music",
  },
];

export function CategoryItem({item}) {
  return (
    <View style = {{borderRadius : 20, backgroundColor : 'red'}}>
      <Text>{item.name}</Text>
    </View>
  )
}
export default function SleepingHome() {
  return (
    <View>
      <HeaderBar
        bgColor={COLORS.purple}
        color={COLORS.white}
        name="Sleeping"
        rightIcon="bell"
      />
     <FlatList data = {musicCategory} renderItem = {({item}) => <CategoryItem item = {item}/>} />
    </View>
  );
}

const styles = StyleSheet.create({});
