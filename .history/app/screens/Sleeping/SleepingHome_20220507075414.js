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
  const [selectedCateID, setselectedCateID] = useState(musicCategory[0].id);
  console.log("id"+selectedCateID);
  const [isSelected, setSelected] = useState(false);
  const list = listInCategory.filter(
    (itemList) => itemList.idCategory == selectedCateID
  );
  console.log(list);
  function CategoryItem({ item, index }) {
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
        onPress={() => {
          setSelectedIndex(index);
          setselectedCateID(musicCategory[selectedIndex].id);
        }}
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
      
        <View>
          <FlatList
            data={list}
              renderItem={({item}) => <ListInCategory list={item} navigation={navigation} />
              }
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
