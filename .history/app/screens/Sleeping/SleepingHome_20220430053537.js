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
export function CategoryItem({ item }) {
  const [isSelected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={{
        borderRadius: 30,
        paddingHorizontal: SIZES.padding / 2,
        paddingVertical: SIZES.padding / 3,
        marginRight: 10,
        backgroundColor: isSelected ? COLORS.darkPurple : COLORS.white2,
      }}
      onPress={() => setSelected(!isSelected)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default function SleepingHome({navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.purple, flex: 1 }}>
      <HeaderBar
        bgColor={COLORS.purple}
        color={COLORS.white}
        name="Sleeping"
        rightIcon="bell"
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: SIZES.padding / 2,
        }}
      >
       <TouchableWithoutFeedback onPress={() => navigation.navigate("ListInCategory")}><Text>Hi</Text></TouchableWithoutFeedback>
        <FlatList
          data={musicCategory}
          horizontal={true}
          renderItem={({ item }) => <CategoryItem item={item} />}
        />
      </View>
      <View>
        <FlatList
          data={listInCategory}
          renderItem={({ item }) => <ListInCategory list={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
