import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS, FONTS } from "../../constants/index";
import data from "../../constants/data";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

export default function PlayAudio({ route }) {
  const audio = data.audio.find((item) => item.id == route.params.id);
  const minute = Math.floor(audio.duration / 60);
  const sec = audio.duration - minute * 60;
  const [playTime, setPlayTime] = useState(0);
  const [playMin, setPlayMin] = useState(0);
  const [playSec, setPlaySec] = useState(0);
  const [like, setLike] = useState(false);
  useEffect(() => {
    console.log(playTime);
    setPlayMin(Math.floor(playTime / 60));
    setPlaySec(Math.round(playTime - playMin * 60))
  }, []);
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={audio.img}
      >
        {/* Header bar */}
        <HeaderBar
          bgColor="transparent"
          color={COLORS.white}
          rightIcon="heart"
        />
        <View style = {{flex : 1}}>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>
              {audio.name}
            </Text>
            <Text style={{ ...FONTS.body2, color: COLORS.white }}>
              {audio.author}
            </Text>
            {/* Duration */}
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: 50,
                padding: SIZES.padding / 2,
              }}
            >
              <Text style={{ color: COLORS.white }}>
                {minute > 10 ? minute : "0" + minute} : 
                {sec > 10 ? sec : "0" + sec}
              </Text>
            </View>
            {/* Replay, play and forward button */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  borderRadius: 50,
                  // backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: 20,
                  marginTop: 10,
                }}
              >
                <MaterialIcons
                  style={{ fontSize: 35, color: COLORS.white }}
                  name="replay-30"
                />
              </View>
              <View
                style={{
                  borderRadius: 50,
                  padding: 20,
                  marginTop: 10,
                }}
              >
                <FontAwesome
                  style={{ fontSize: 50, color: COLORS.white }}
                  name="pause"
                />
                <FontAwesome
                  style={{ fontSize: 50, color: COLORS.white, display: "none" }}
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
                  style={{ fontSize: 35, color: COLORS.white }}
                  name="forward-30"
                />
              </View>
            </View>
         
          </View>
          <View style = {{flex : 1, justifyContent: 'center'}}>
               {/* Slider */}
            <Slider
              style={{ width: "100%", height: 10}}
              value={playTime}
              minimumValue={0}
              maximumValue={audio.duration}
              onValueChange={(value) => setPlayTime(value)}
            />
            <View style = {{paddingHorizontal : SIZES.padding / 2, flexDirection : 'row',justifyContent : 'space-between'}}>
            <Text style={{ color: COLORS.white }}>
                {playMin >= 10 ? playMin : "0" + playMin} : 
                {playSec >= 10 ? playSec : "0" + playSec}
              </Text>
              <Text style={{ color: COLORS.white }}>
                {minute >= 10 ? minute : "0" + minute} : 
                {sec >= 10 ? sec : "0" + sec}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
