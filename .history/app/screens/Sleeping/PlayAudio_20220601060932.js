import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableHighlight,
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
  const [like, setLike] = useState(false);
  const [sound, setSound] = useState(null);
  const [playBackObj, setPlayBackObj] = useState(null);
  const [playBackPosition, setPlayBackPosition] = useState(null);
  const [playBackDuration, setPlayBackDuration] = useState(null);
  

  function onPlaybackStatusUpdate(playBackStatus) {
    console.log("durationMillis"+playBackStatus.durationMillis);
    if (playBackStatus.isLoaded && playBackStatus.isPlaying) {
      setPlayBackDuration(playBackStatus.durationMillis);
      setPlayBackPosition(playBackStatus.positionMillis);
    }
  }

  async function playSound() {
    // play audio at the first time
    if (sound === null) {
      const obj = new Audio.Sound();
      const status = await obj.loadAsync(audio.src, { shouldPlay: true });
      setSound(status);
      setPlayBackObj(obj);
      return obj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    }

    // pause audio
    if (sound.isLoaded && sound.isPlaying) {
      const status = await playBackObj.setStatusAsync({ shouldPlay: false });
      setSound(status);
      return;
    }

    // resume
    if (sound.isLoaded && !sound.isPlaying) {
      const status = await playBackObj.playAsync();
      setSound(status);
    }
  }

  const calculateSeekbar = () => {
    console.log("positionnMillis1:  "+playBackPosition);
    if (playBackDuration != null && playBackPosition != null) {
      console.log("positionnMillis2:  "+playBackPosition);
      const value = playBackPosition / playBackDuration;
      console.log("value:  "+value);
      return value;
    }
    return 0;
  };


  return (
    // parent view
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={audio.img}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            {/* Audio information */}
            <View style={{ marginVertical: 10, alignItems: "center" }}>
              <Text style={{ ...FONTS.h1, color: COLORS.white }}>
                {audio.name}
              </Text>
              <Text style={{ ...FONTS.body2, color: COLORS.white }}>
                {audio.author}
              </Text>
            </View>
            {/* End Audio information */}

            {/* Play. pause button */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* Replay button */}
              <TouchableHighlight
                onPress={() => setPlayBackPosition(playBackPosition - 30)}
              >
                <MaterialIcons
                  style={{
                    fontSize: 35,
                    color: COLORS.white,
                    display: !isPlaying ? "none" : "flex",
                  }}
                  name="replay-30"
                />
              </TouchableHighlight>
              {/*End Replay button */}

              {/* Play, pause button */}
              <View style={{ marginHorizontal: 30 }}>
                <TouchableHighlight
                  onPress={() => {
                    setPlay(!isPlaying);
                    playSound();
                  }}
                >
                  <FontAwesome
                    style={{
                      fontSize: 50,
                      color: COLORS.white,
                    }}
                    name={
                      isPlaying && playBackPosition != playBackDuration
                        ? "pause"
                        : "play"
                    }
                  />
                </TouchableHighlight>
              </View>
              {/* Play, pause button */}

              {/* Forward button */}
              <TouchableHighlight
                onPress={() => setPlayBackPosition(playBackPosition + 30)}
              >
                <MaterialIcons
                  style={{
                    fontSize: 35,
                    color: COLORS.white,
                    display: !isPlaying ? "none" : "flex",
                  }}
                  name="forward-30"
                />
              </TouchableHighlight>
              {/* End Forward button */}
            </View>
          </View>

          {/* End button section */}

          {/* Audio seekbar */}
          <View style={{ flex: 1, justifyContent: "center" }}>
            {/* Slider */}
            <Slider
              style={{ width: "100%", height: 20 }}
              value={calculateSeekbar()}
              minimumValue={0}
              maximumValue={1}
              thumbTintColor="red"
              minimumTrackTintColor="red"
              onValueChange={(value) => {}}
              onSlidingStart={async () => {
                if (!isPlaying) {
                  return;
                }
                try {
                  const status = await playBackObj.setStatusAsync({
                    shouldPlay: false,
                  });
                  setSound(status);
                } catch (error) {
                  console.log(error.message);
                }
              }}
              onSlidingComplete={async (value) => {
                if (sound === null) {
                  return null;
                }
                try {
                  const status = await playBackObj.setPositionAsync(
                    value * playBackDuration
                  );
                  setSound(status);
                  setPlayBackPosition(value * playBackDuration);

                  if (value * playBackDuration == playBackDuration) {
                    setPlay(false);
                    return;
                  }

                  if (isPlaying) {
                    await playBackObj.playAsync();
                  }
                  
                } catch (error) {
                  console.log(error);
                }
              }}
            />
            {/* End slider */}

            {/* Timer count section */}
            <View
              style={{
                paddingHorizontal: SIZES.padding / 2,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* <Text style={{ color: COLORS.white }}>
                {playHour > 0 ? playHour + " : " : ""}
                {playMin >= 10 ? playMin : "0" + playMin} :
                {playSec >= 10 ? playSec : "0" + playSec}
              </Text>
              <Text style={{ color: COLORS.white }}>
                {hour > 0 ? hour + " : " : ""}
                {minute >= 10 ? minute : "0" + minute} :
                {sec >= 10 ? sec : "0" + sec}
              </Text> */}
            </View>
            {/* End timer count section */}
          </View>
          {/* End Audio seekbar */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
