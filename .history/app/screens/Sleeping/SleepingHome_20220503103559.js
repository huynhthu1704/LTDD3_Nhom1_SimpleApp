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


export default function SleepingHome({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedListID, setselectedListID] = useState(musicCategory.at(0).id);
  const [isSelected, setSelected] = useState(false);
  const list = listInCategory.filter((itemList) => itemList.idCategory == selectedListID);
  function CategoryItem({ item, index }) {
       console.log("index" + index);
    return (
      <TouchableOpacity
        style={{
          borderRadius: 30,
          paddingHorizontal: SIZES.padding / 2,
          paddingVertical: SIZES.padding / 3,
          marginRight: 10,
          backgroundColor:
            index == selectedIndex ? COLORS.darkPurple : COLORS.white2,
        }}
         onPress={() => setSelectedIndex(index)}
      >
        <Text style={{ color: COLORS.white }}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.purple, flex: 1 }}>
      <HeaderBar
        bgColor={COLORS.purple}
        borderBottomColor={COLORS.white2}
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
          extraData={selectedIndex}
          renderItem={({ item, index }) => (
            <CategoryItem item={item} index={index} />
          )}
        />
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListInCategory list={item} navigation={navigation} />
          )}
        />
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
