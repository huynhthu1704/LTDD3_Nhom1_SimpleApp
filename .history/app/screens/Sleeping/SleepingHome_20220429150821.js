import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView
} from "react-native";
import React from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../components/HeaderBar";

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

const listInCategory = [
  {
    id: 1,
    idCategory: 1,
  },
  {
    id: 2,
    idCategory: 2,
  },
  {
    id: 3,
    idCategory: 1,
  },
];

const audio = [
  {
    id : 1,
    name : "First audio",
    duration : 1,
    author : "David",
    idList : 1
  },
  {
    id : 2,
    name : "Second audio",
    duration : 40,
    author : "Yushu",
    idList : 1
  },
  {
    id : 3,
    name : "Third audio",
    duration : 1,
    author : "Aniya",
    idList : 1
  },
]
export function CategoryItem({ item }) {
  return (
    <SafeAreaView
      style={{
        borderRadius: 30,
        backgroundColor: "red",
        paddingHorizontal: SIZES.padding / 2,
        paddingVertical: SIZES.padding / 3,
        marginRight: 10,
        backgroundColor : COLORS.darkPurple,
        flex: 1
      }}
    >
      <Text>{item.name}</Text>
    </SafeAreaView>
  );
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
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={musicCategory}
          horizontal={true}
          renderItem={({ item }) => <CategoryItem item={item} />}
        />
      </View>
      {/* Categoty list */}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
