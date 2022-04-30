import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS, FONTS } from "../../constants/index";
import data from "../../constants/data";

export default function PlayAudio({ route }) {
  console.log(route.params);
  const audio = data.audio.find((item) => item.id == route.params.id);
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
        <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text style = {{...FONTS.h3}}>{audio.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
