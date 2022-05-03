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

export function CategoryItem({ item, index }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSelected, setSelected] = useState(false);
  console.log("index" + index)
  return (
    <TouchableOpacity
      style={{
        borderRadius: 30,
        paddingHorizontal: SIZES.padding / 2,
        paddingVertical: SIZES.padding / 3,
        marginRight: 10,
        backgroundColor: index == selectedIndex ? COLORS.darkPurple : COLORS.white2,
      }}
      onPress={() => setSelectedIndex(index)}
    >
      <Text style={{color : COLORS.white}}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default function SleepingHome({navigation}) {
  const list = listInCategory.filter((itemList) => {
   if (audio.find((itemAudio) => itemAudio.idList == itemList.id) != undefined){
     return true;
   }

  } )
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.purple, flex: 1 }}>
      <HeaderBar
        colors={[COLORS.purple, COLORS.darkPurple]}
        color={COLORS.white}
        name="Sleeping"
        leftIcon="arrow-left"
        rightIcon="bell"
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: SIZES.padding / 2,
        }}
      >
       {/* <TouchableWithoutFeedback onPress={() => navigation.navigate("ListInCategory")}><Text>Hi</Text></TouchableWithoutFeedback> */}
        <FlatList
          data={musicCategory}
          horizontal={true}
          renderItem={({ item, index }) => <CategoryItem item={item} index={index}/>}
        />
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={({ item }) => <ListInCategory list={item} navigation = {navigation} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
