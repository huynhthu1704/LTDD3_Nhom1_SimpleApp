import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  SectionList,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { FontAwesome } from "@expo/vector-icons";
import {
  musicCategory2,
  musicCategory,
  listInCategory,
  audio,
} from "../../constants/data";
import AudioItem from "./AudioItem";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase";

const imgSize = 140;

export default function SleepingHome({ navigation }) {
  const [audios, setAudios] = useState(null);
  const [playlists, setPlaylist] = useState(null);
  const [playlistWithAudio, setPlaylistWithAudio] = useState(null);

  async function getPlaylists() {
    const playlistCol = collection(db, "playlists");
    const playlistSnapshot = await getDocs(playlistCol);
    const playlist = playlistSnapshot.docs.map((doc) => doc.data());
    console.log(JSON.stringify(playlist));
    setPlaylist(playlist);
  }

  async function getAudios() {
    const audioCol = collection(db, "audios");
    const audioSnapshot = await getDocs(audioCol);
    const audioList = audioSnapshot.docs.map((doc) => doc.data());
    console.log(JSON.stringify(audioList));
    setAudios(audioList);
  }

  async function getPlaylistWithAudio() {
    const temp = playlists;
    temp.map((item, index) => {
      const audioArr = audios.filter((item2) => item2.playlist_id == item.playlist_id)
      item.data = audioArr;
    });
    console.log("temp");
    console.log(JSON.stringify(temp));
    setPlaylistWithAudio(temp);
  }
  useEffect(() => {
    getPlaylists();
    getAudios();
    getPlaylistWithAudio();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.purple }}>
      <StatusBar
        backgroundColor={COLORS.purple}
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <View>
        <SectionList
          style={{ marginLeft: 10 }}
          sections={playlistWithAudio}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            return null;
            return (
              <AudioItem item={item} navigation={navigation} size={imgSize} />
            );
          }}
          renderSectionHeader={({ section }) => (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                numberOfLines={2} ellipsizeMode={"tail"}
                  style={{ ...FONTS.h2, color: COLORS.white, opacity: 0.9, flex: 0.7 }}
                >
                  {section.name}
                </Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate("ListDetail", { title: section.name });
                  }}
                  style = {{flex: 0.3, justifyContent: "flex-end"}}
                >
                  <Text
                    style={{
                      ...FONTS.body3,
                      color: COLORS.white,
                      opacity: 0.9,
                    }}
                  >
                    View all
                  </Text>
                </Pressable>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={section.data}
                renderItem={({ item }) => (
                  <AudioItem
                    item={item}
                    navigation={navigation}
                    size={imgSize}
                    padding={SIZES.padding / 4}
                  />
                )}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});