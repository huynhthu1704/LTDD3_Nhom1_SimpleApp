import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { user } from "../../constants/data";
import HeaderBar from "../../components/HeaderBar";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


export default function ProfileHome({ navigation }) {
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
            marginRight: 10
          }}
          source={user.avatar}
        />
      ),
    });
  });
  return (
    <View >
      <View>
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
                backgroundColor: COLORS.blue
              }}
              onPress={() => {
                alert("hii");
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
                  marginLeft: 10,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
