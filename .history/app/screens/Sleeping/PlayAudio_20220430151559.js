import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS, FONTS } from "../../constants/index";
import data from "../../constants/data";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function PlayAudio({ route }) {
  console.log(route.params);
  const audio = data.audio.find((item) => item.id == route.params.id);
  const minute = Math.floor(audio.duration / 60);
  const sec = audio.duration - minute * 60;
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={audio.img}
      >
        <HeaderBar
          bgColor="transparent"
          color={COLORS.white}
          rightIcon="heart-o"
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ ...FONTS.h1, color: COLORS.white }}>{audio.name}</Text>
          <Text style={{ ...FONTS.body2, color: COLORS.white }}>
            {audio.author}
          </Text>
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: 50,
              padding: SIZES.padding / 2,
            }}
          >
            <Text style={{ color: COLORS.white }}>
              {minute > 10 ? minute : "0" + minute} :{" "}
              {sec > 10 ? sec : "0" + sec}
            </Text>
          </View>
          <View style = {{flexDirection : 'row'}}>
            <View
              style={{
                borderRadius: 50,
               // backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: 20,
                marginTop: 10,
              }}
            >
              <MaterialIcons
                style={{ fontSize: 30, color: COLORS.white }}
                name="replay-30"
              />
            </View>
            <View
              style={{
                borderRadius: 50,
              //  backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: 20,
                marginTop: 10,
              }}
            >
              <FontAwesome
                style={{ fontSize: 50, color: COLORS.white }}
                name="play"
              />
            </View>
            <View
              style={{
                borderRadius: 50,
               // backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: 20,
                marginTop: 10,
              }}
            >
              <MaterialIcons
                style={{ fontSize: 20, color: COLORS.white }}
                name="forward-30"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
