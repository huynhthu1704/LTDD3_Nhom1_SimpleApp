import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS, FONTS } from "../../constants/index";
import data from "../../constants/data";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

export default function PlayAudio({ route, navigation }) {
  const audio = data.musicCategory[0].data[0];
  const hour = Math.floor(audio.duration / 3600);
  const minute = Math.floor((audio.duration - hour * 3600) / 60);
  const sec = audio.duration - minute * 60;
  const [isPlaying, setPlay] = useState(true);
  const [like, setLike] = useState(false);
  const [sound, setSound] = useState(null);
  const [didTapOnFunctionButton, setTapOnFunctionButton] = useState(false);
  const [isFirstTime, setFirstTime] = useState(false);
  const [playBackObj, setPlayBackObj] = useState(null);
  const [playBackPosition, setPlayBackPosition] = useState(null);
  const [playBackDuration, setPlayBackDuration] = useState(null);
  const millis = 30 * 1000;

  function onPlaybackStatusUpdate(playBackStatus) {
    // setPlay(playBackStatus.isPlaying);
    if (playBackStatus.isLoaded && playBackStatus.isPlaying) {
      setPlayBackDuration(playBackStatus.durationMillis);
      setPlayBackPosition(playBackStatus.positionMillis);
    }
    
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={addToFavorite}>
          <FontAwesome
            name="heart"
            size={SIZES.h1}
            color={like ? COLORS.red : COLORS.white}
          />
        </TouchableOpacity>
      ),
    });
    (async () => {
      setTapOnFunctionButton(false);
      if (sound === null) {
        setFirstTime(true);
        const obj = new Audio.Sound();
        const status = await obj.loadAsync(audio.src, { shouldPlay: true });
        setSound(status);
        setPlayBackObj(obj);
        console.log("NOT THE FIRST TIME------------------------");
        return obj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      }

      // resume
      if (sound.isLoaded && !sound.isPlaying) {
        console.log("resume");
        const status = await playBackObj.playAsync();
        setSound(status);
      }
    })();
    // return () => {
    //   if (playBackPosition != null && playBackPosition >= playBackDuration) {
    //     playBackObj.unloadAsync();
    //     console.log("unload");
    //   }
    // };
  }, [isPlaying, like]);
  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // if (!isPlaying) {
        //   // If we don't have unsaved changes, then we don't need to do anything
        //   return;
        // }
        console.log(playBackObj);
        if (playBackObj != null) {
          playBackObj.unloadAsync();
          console.log("unload");
        }
        return;
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
      }),
    [navigation, playBackObj]
  );
  // async function playSound() {
  //   // play audio at the first time
  //   if (sound === null) {
  //     const obj = new Audio.Sound();
  //     const status = await obj.loadAsync(audio.src, { shouldPlay: true });
  //     setSound(status);
  //     setPlayBackObj(obj);
  //     console.log("NOT THE FIRST TIME------------------------");
  //     return obj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  //   }

  //   // pause audio
  //   if (sound.isLoaded && sound.isPlaying) {
  //     const status = await playBackObj.setStatusAsync({ shouldPlay: false });
  //     setSound(status);
  //     return;
  //   }

  //   // resume
  //   if (sound.isLoaded && !sound.isPlaying) {
  //     const status = await playBackObj.playAsync();
  //     setSound(status);
  //   }
  // }
  // async function playSound() {
  //   // play audio at the first time
  //   if (sound === null) {
  //     const obj = new Audio.Sound();
  //     const status = await obj.loadAsync(audio.src, { shouldPlay: true });
  //     setSound(status);
  //     setPlayBackObj(obj);
  //     console.log("NOT THE FIRST TIME------------------------");
  //     return obj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  //   }

  //   // pause audio
  //   if (sound.isLoaded && sound.isPlaying) {
  //     const status = await playBackObj.setStatusAsync({ shouldPlay: false });
  //     setSound(status);
  //     return;
  //   }

  //   // resume
  //   if (sound.isLoaded && !sound.isPlaying) {
  //     const status = await playBackObj.playAsync();
  //     setSound(status);
  //   }
  // }

  const calculateSeekbar = () => {
    if (playBackDuration != null && playBackPosition != null) {
      const value = playBackPosition / playBackDuration;
      return value;
    }
    return 0;
  };

  function addToFavorite() {
    setLike(!like);
  }

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity style={{ marginRight: 20 }} onPress={addToFavorite}>
  //         <FontAwesome name="heart" size={SIZES.h1} color={like ? COLORS.red : COLORS.white} />
  //       </TouchableOpacity>
  //     ),
  //   });
  // });

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
              <TouchableWithoutFeedback
                onPress={async () => {
                  setTapOnFunctionButton(true);
                  console.log("play-30: " + playBackPosition);
                  const status = await playBackObj.setPositionAsync(
                    playBackPosition - millis
                  );
                  setSound(status);
                }}
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
              {/*End Replay button */}

              {/* Play, pause button */}
              <View style={{ marginHorizontal: 30 }}>
                <TouchableWithoutFeedback
                  onPress={async () => {
                    setTapOnFunctionButton(true);
                    setPlay(!isPlaying);
                    if (isPlaying) {
                      console.log("click on pause");
                      // pause audio
                      if (sound.isLoaded && sound.isPlaying) {
                        const status = await playBackObj.setStatusAsync({
                          shouldPlay: false,
                        });
                        setSound(status);
                        return;
                      }
                    } else if (
                      playBackPosition != null &&
                      playBackPosition + 1000 >= playBackDuration
                    ) {
                      let status;
                      status = await playBackObj.setPositionAsync(0);
                      setSound(status);
                      status = await playBackObj.loadAsync(audio.src, {
                        shouldPlay: true,
                      });
                      setSound(status);
                      setPlay(true);
                      
                    } 
                  }}
                  // onPress={async () => {
                  //   console.log("playBackPosition:  " + playBackPosition);
                  //   console.log("playBackDuration:  " + playBackDuration);
                  //   if (
                  //     playBackPosition != null &&
                  //     playBackPosition + 1000 >= playBackDuration
                  //   ) {
                  //     let status;
                  //     status = await playBackObj.setPositionAsync(0);
                  //     setSound(status);
                  //     status = await playBackObj.loadAsync(audio.src, {
                  //       shouldPlay: true,
                  //     });
                  //     setSound(status);
                  //     setPlay(true);
                  //   } else {
                  //     setPlay(!isPlaying);
                  //   }

                  //   // playSound();
                  // }}
                >
                  <FontAwesome
                    style={{
                      fontSize: 50,
                      color: COLORS.white,
                    }}
                    name={(isPlaying)? "pause" : "play"}
                  />
                </TouchableWithoutFeedback>
              </View>
              {/* Play, pause button */}

              {/* Forward button */}
              <TouchableWithoutFeedback
                onPress={async () => {
                  setTapOnFunctionButton(true);
                  console.log("play+30: " + playBackPosition);
                  let status;
                  if (playBackPosition < playBackDuration - millis) {
                    status = await playBackObj.setPositionAsync(
                      playBackPosition + millis
                    );
                    // setPlayBackPosition(playBackPosition + millis);
                  } else {
                    status = await playBackObj.setPositionAsync(
                      playBackDuration
                    );
                    setPlay(false);
                  }
                  setSound(status);
                }}
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
              {/* End Forward button */}
            </View>
          </View>

          {/* End button section */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
