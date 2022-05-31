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

const imgSize = 120;
const Item = ({ item }) => (
  <TouchableOpacity style={{
    marginRight: 10,
    marginVertical: 10
    
  }}
  onPress={() => {
    navigation.navigate("PlayAudio");
  }}>
    <Image style={{ width: imgSize, height: imgSize, borderRadius: 10, marginBottom: 10}} source={item.img} />
    <Text style={{...FONTS.body3, color: COLORS.white}}>{item.name}</Text>
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
        <SectionList style={{marginLeft: 10}}
          sections={musicCategory}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            return null;
            return <Item item={item} />;
          }}
          renderSectionHeader={({ section }) => (
            <View>
              <Text style={{ ...FONTS.h2, color: COLORS.white, opacity: 0.9 }}>{section.name}</Text>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <Item item={item} />}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
