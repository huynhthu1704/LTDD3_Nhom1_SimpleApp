import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { user } from "../../constants/data";
import HeaderBar from "../../components/HeaderBar";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Profile({ navigation }) {
  const imgDimension = 40;
  const data = [
    {
      id: 1,
      title: "Profile",
      icon: "user",
      goToRoute: "UpdateProfile",
    },
    {
      id: 2,
      title: "Setting",
      icon: "gear",
      goToRoute: "Setting",
    },
    {
      id: 3,
      title: "Favorites",
      icon: "heart",
      goToRoute: "Favorites",
    },
    {
      id: 4,
      title: "Inspiration",
      icon: "quote-right",
      goToRoute: "Setting",
    },
  ];
  const goToRoute = () => {
    alert("Go to setting");
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image
          style={{
            width: imgDimension,
            height: imgDimension,
            borderRadius: 50,
            marginRight: 10,
          }}
          source={user.avatar}
        />
      ),
    });
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: "center" }}>
        {/* Chart */}
        <View style={{ height: 400 }}>{/* Put the chart here */}</View>

        {/* Selection */}
        <View style={{ width: "80%" }}>
          {data.map((item, i) => {
            return (
              <TouchableOpacity
                key={String(i)}
                style={{
                  flexDirection: "row",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  alignItems: "center",
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.white,
                  backgroundColor: COLORS.blue,
                  margin: 5,
                  borderRadius: 10,
                }}
                onPress={() => {
                  alert("hi");
                  navigation.navigate(item.goToRoute);
                }}
              >
                <FontAwesome
                  name={item.icon}
                  color={COLORS.white}
                  size={SIZES.h2}
                />
                <Text
                  style={{
                    ...FONTS.h2,
                    color: COLORS.white,
                    marginLeft: 20,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
