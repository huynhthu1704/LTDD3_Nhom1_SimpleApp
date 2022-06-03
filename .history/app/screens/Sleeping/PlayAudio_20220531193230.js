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
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

export default function PlayAudio({ route }) {
  const audio = data.musicCategory[0].data[0];
  const hour = Math.floor(audio.duration / 3600);
  const minute = Math.floor((audio.duration - hour * 3600) / 60);
  const sec = audio.duration - minute * 60;
  const [isPlaying, setPlay] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const [playHour, setPlayHour] = useState(0);
  const [playMin, setPlayMin] = useState(0);
  const [playSec, setPlaySec] = useState(0);
  const [like, setLike] = useState(false);
  const [sound, setSound] = useState(null);
  const [playBackPosition, setPlayBackPosition] = useState(0);
  const [playBackDuration, setPlayBackDuration] = useState(0);
  const [playBackObj, setPlayBackObj] = useState(null);

  const onPlaybackStatusUpdate = (playBackStatus) => {
    if (playBackStatus.isLoaded && playBackStatus.isPlaying) {
      console.log("playBackStatus.durationMillis"+playBackStatus.durationMillis);
      const hihi = playBackStatus.durationMillis;
      setPlayBackDuration(hihi);
      console.log("hihi"+hihi);
      setPlayBackPosition(playBackStatus.positionMillis);
      console.log(playBackPosition); 
      console.log(playBackDuration);
    }
    // console.log(JSON.stringify(playBackStatus, null, 4));
   
    // console.log(playBackStatus);
  }
  async function playSound() {
    //  while (isPlaying) {
    //    setPlayTime(playTime + 1);
    //  }
    if (sound === null) {
      console.log("Loading Sound");
      const obj = new Audio.Sound();
      console.log("hi");

      const status = await obj.loadAsync(audio.src, { shouldPlay: true });
      console.log("hiii" + status);
      // setPlay(true);
      setSound(status);
      setPlayBackObj(obj);
      obj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      return;
      // await obj.playAsync();
    }

    if (sound.isLoaded && sound.isPlaying) {
      console.log("playing");
      const status = await playBackObj.setStatusAsync({ shouldPlay: false });
      setSound(status);
      // setPlay(false);

      return;
      // sound.replayAsync();
    }
    if (sound.isLoaded && !sound.isPlaying) {
      const status = await playBackObj.playAsync();
      setPlay(true);

      setSound(status);
      return;
      // sound.replayAsync();
    }
  }
  // React.useEffect(() => {
  //   if (sound !== null) {
  //     sound.unloadAsync();
  //   }

  //         return ;

  // }, [sound]);

  //console.log(sound);
  return (
    //
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={audio.img}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <View style={{ marginVertical: 10, alignItems: "center" }}>
              <Text style={{ ...FONTS.h1, color: COLORS.white }}>
                {audio.name}
              </Text>
              <Text style={{ ...FONTS.body2, color: COLORS.white }}>
                {audio.author}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => setPlayTime(playTime - 30)}
              >
                <MaterialIcons
                  style={{
                    fontSize: 35,
                    color: COLORS.white,
                    display: !isPlaying ? "none" : "flex",
                  }}
                  name="replay-30"
                />
              </TouchableWithoutFeedback>
              <View style={{ marginHorizontal: 30 }}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    if (isPlaying) {
                      setPlayTime(playTime + 1);
                    }
                    setPlay(!isPlaying);
                    playSound();
                  }}
                >
                  <FontAwesome
                    style={{
                      fontSize: 50,
                      color: COLORS.white,
                    }}
                    name={isPlaying ? "pause" : "play"}
                  />
                </TouchableWithoutFeedback>
              </View>
              <TouchableWithoutFeedback
                onPress={() => setPlayTime(playTime + 30)}
              >
                <MaterialIcons
                  style={{
                    fontSize: 35,
                    color: COLORS.white,
                    display: !isPlaying ? "none" : "flex",
                  }}
                  name="forward-30"
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Slider
              style={{ width: "100%", height: 20 }}
              value={playTime}
              minimumValue={0}
              thumbTintColor="red"
              minimumTrackTintColor="red"
              maximumValue={audio.duration}
              onValueChange={(value) => {
                setPlayTime(value);
                // console.log(playTime);
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
