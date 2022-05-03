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
import { FontAwesome } from "@expo/vector-icons";
import { musicCategory, listInCategory, audio } from "../../constants/data";
import AudioItem from "./AudioItem";

export default function ListInCategory({ list, navigation }) {
  console.log(list);
  const renderAudio = audio.filter((item) => item.idList == list.id);
  const render6Audio = renderAudio.filter((item, index) => index < 6);
  const isCenter = renderAudio.length > 3 ? true : false;
  return (
    <View>
      {/* List header */}
      <View
        style={{ flexDirection: "row", paddingHorizontal: SIZES.padding / 2 }}
      >
        <View style={{ flex: 2, justifyContent: "flex-start" }}>
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>{list.name}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ListDetail", { list: list.id })}
          >
            <Text
              style={{ ...FONTS.body3, color: COLORS.white, marginRight: 5 }}
            >
              See all
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <FontAwesome name="arrow-right" color={COLORS.white} />
          </TouchableWithoutFeedback>
        </View>
      </View>
      {/* End list header */}
      {/* Categoty list */}
      <View
        style={{
          marginVertical: SIZES.padding / 2,
          paddingHorizontal: SIZES.padding / 2,
          //justifyContent: "center",
          alignItems: isCenter ? "center" : "flex-start",
        }}
      >
        <ScrollView>
          <FlatList
            data={render6Audio}
            //  horizontal={true}
            numColumns={3}
            extraData={render6Audio}
            //   showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <AudioItem item={item} navigation = {navigation}/>}
          />
        </ScrollView>
      </View>
    </View>
  );
}
