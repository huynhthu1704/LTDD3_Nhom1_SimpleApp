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
import { db, authentication } from "../../firebase/firebase";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore/lite";
import User from "../UserManagement/UserData";
import { async } from "@firebase/util";

export default function PlayAudio({ route, navigation }) {
  const audio = route.params.audio;
  const hour = Math.floor(audio.duration / 3600);
  const minute = Math.floor((audio.duration - hour * 3600) / 60);
  const sec = audio.duration - minute * 60;
  const [isPlaying, setPlay] = useState(true);
  const [currentUserID, setCurrentUserID] = useState(User.currentUser?.id);
  const [didLike, setLike] = useState(false);
  const [favorites, setFavoritesList] = useState([]);
  const [sound, setSound] = useState(null);
  const [didTapOnFunctionButton, setTapOnFunctionButton] = useState(false);
  const [isFirstTime, setFirstTime] = useState(false);
  const [playBackObj, setPlayBackObj] = useState(null);
  const [playBackPosition, setPlayBackPosition] = useState(null);
  const [playBackDuration, setPlayBackDuration] = useState(null);
  const millis = 30 * 1000;
  // const favs = await getDocs(collection(db, "favorites"));
  function onPlaybackStatusUpdate(playBackStatus) {
    // setPlay(playBackStatus.isPlaying);
    if (playBackStatus.isLoaded && playBackStatus.isPlaying) {
      setPlayBackDuration(playBackStatus.durationMillis);
      setPlayBackPosition(playBackStatus.positionMillis);
    }
  }
  useEffect(async () => {
    const q = query(
      collection(db, "favorites"),
      where("user_id", "==", User.currentUser?.id),
      where("audio_id", "==", audio.audio_id)
    );
    console.log(JSON.stringify(querySnapshot));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      setLike(true);
    } 
  }, [didLike]);

  useEffect(async () => {
    const audioIsLiked = favorites.find(
      (item) => item.audio_id == audio.id && item.user_id == User.currentUser?.id
    );
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={addToFavorite}>
          <FontAwesome
            name="heart"
            size={SIZES.h1}
            color={didLike ? COLORS.red : COLORS.white}
          />
        </TouchableOpacity>
      ),
    });
    (async () => {
      setTapOnFunctionButton(false);
      if (sound === null) {
        setFirstTime(true);
        const obj = new Audio.Sound();
        const status = await obj.loadAsync(
          { uri: audio.src },
          { shouldPlay: true }
        );
        setSound(status);
        setPlayBackObj(obj);
        return obj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      }

      // resume
      if (sound.isLoaded && !sound.isPlaying) {
        console.log("resume");
        const status = await playBackObj.playAsync();
        setSound(status);
      }
    })();
  }, [isPlaying]);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
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

  async function addToFavorite() {
    if (!didLike) {
      await setDoc(
        doc(
          db,
          "favorites",
          `user${User.currentUser?.id}-audio${audio?.audio_id}`
        ),
        {
          audio_id: audio?.audio_id,
          user_id: User.currentUser?.id,
        }
      );
    } else {
      await deleteDoc(
        doc(
          db,
          "favorites",
          `user${User.currentUser?.id}-audio${audio?.audio_id}`
        )
      );
    }
    setLike(!didLike);
  }

  return (
    // parent view
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{ uri: audio.img }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* Audio information */}
          <View
            style={{
              flex: 2,
              marginVertical: 10,
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "yellow"
            }}
          >
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>
              {audio.name}
            </Text>
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.white,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              {audio.author}
            </Text>
          </View>
          {/* End Audio information */}

          {/* Play. pause button */}
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
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
                  name={isPlaying ? "pause" : "play"}
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
                  status = await playBackObj.setPositionAsync(playBackDuration);
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
