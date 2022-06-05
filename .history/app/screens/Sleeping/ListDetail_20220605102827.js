import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import data from "../../constants/data";
import AudioItem from "./AudioItem";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS } from "../../constants/index";
import { db, collection } from "../../firebase/firebase";
import { async } from "@firebase/util";

export default function ListDetail({ route, navigation }) {
  const playlist_id = route.params.playlist_id;
  console.log("pl_id: " + playlist_id);
  console.log("pl_name: " + route.params.title);
  console.log(route.params);
  async function getAudios() {
    const audioCol = collection(db, "audios");
    const audioSnapshot = await getDocs(audioCol);
    const audioList = audioSnapshot.docs.map((doc) => doc.data());
    // console.log(JSON.stringify(audioList));
    setAudios(audioList);
  }

  const [audios, setAudios] = useState(null);
  const [playlists, setPlaylist] = useState(null);
  useEffect(() => {
    getAudios();
  }, []);
  //   const list = data.listInCategory.find((item) => item.id == route.params.list);
  return (
    <View style={{ backgroundColor: COLORS.purple, flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={audios}
          showsVerticalScrollIndicator={false}
          //  horizontal={true}
          numColumns={2}
          extraData={audios}
          //   showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AudioItem
              item={item}
              navigation={navigation}
              size={150}
              padding={SIZES.padding / 2}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
