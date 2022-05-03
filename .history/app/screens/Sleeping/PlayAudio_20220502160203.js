import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS, FONTS } from "../../constants/index";
import data from "../../constants/data";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
export default function PlayAudio({ route }) {
  const audio = data.audio.find((item) => item.id == route.params.id);
  const hour = Math.floor(audio.duration / 3600);
  const minute = Math.floor((audio.duration - hour * 3600) / 60);
  const sec = audio.duration - minute * 60;
  const [isPlaying, setPlay] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const [playHour, setPlayHour] = useState(0);
  const [playMin, setPlayMin] = useState(0);
  const [playSec, setPlaySec] = useState(0);
  const [like, setLike] = useState(false);
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loadingggg Sound");
    const { sound } = await Audio.Sound.createAsync(audio.src);
    setSound(sound);
    // Audio.setAudioModeAsync({ staysActiveInBackground: true });
    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
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
        <View style={{ flex: 1 }}>
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
                {hour > 0 ? hour + " : " : ""}
                {minute > 10 ? minute : "0" + minute} :
                {sec > 10 ? sec : "0" + sec}
              </Text>
            </View>
            {/* Replay, play and forward button */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableWithoutFeedback
                onPress={() => setPlayTime(playTime - 30)}
                style={{
                  borderRadius: 50,
                  padding: 20,
                  marginTop: 10,
                }}
              >
                <MaterialIcons
                  style={{ fontSize: 35, color: COLORS.white }}
                  name="replay-30"
                />
              </TouchableWithoutFeedback>
              <View style={{ marginHorizontal: 10 }}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setPlay(!isPlaying);
                    playSound();
                  }}
                  style={{
                    borderRadius: 50,
                    padding: 20,
                    marginTop: 10,
                  }}
                >
                  <FontAwesome
                    style={{
                      fontSize: 50,
                      color: COLORS.white,
                      display: isPlaying ? "flex" : "none",
                    }}
                    name="pause"
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => setPlay(!isPlaying)}
                  style={{
                    borderRadius: 50,
                    padding: 20,
                    marginTop: 10,
                  }}
                >
                  <FontAwesome
                    style={{
                      fontSize: 50,
                      color: COLORS.white,
                      display: !isPlaying ? "flex" : "none",
                    }}
                    name="play"
                  />
                </TouchableWithoutFeedback>
              </View>
              <TouchableWithoutFeedback
                onPress={() => setPlayTime(playTime + 30)}
                style={{
                  borderRadius: 50,
                  padding: 20,
                  marginTop: 10,
                }}
              >
                <MaterialIcons
                  style={{ fontSize: 35, color: COLORS.white }}
                  name="forward-30"
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            {/* Slider */}
            <Slider
              style={{ width: "100%", height: 10 }}
              value={playTime}
              minimumValue={0}
              maximumValue={audio.duration}
              onValueChange={(value) => {
                setPlayTime(value);
                console.log(playTime);
                setPlayHour(Math.floor(playTime / 3600));
                setPlayMin(Math.floor((playTime - playHour * 3600) / 60));
                console.log(playMin);
                setPlaySec(Math.round(playTime - playMin * 60));
                console.log(playSec);
              }}
            />
            <View
              style={{
                paddingHorizontal: SIZES.padding / 2,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: COLORS.white }}>
                {playHour > 0 ? playHour + " : " : ""}
                {playMin >= 10 ? playMin : "0" + playMin} :
                {playSec >= 10 ? playSec : "0" + playSec}
              </Text>
              <Text style={{ color: COLORS.white }}>
                {hour > 0 ? hour + " : " : ""}
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
