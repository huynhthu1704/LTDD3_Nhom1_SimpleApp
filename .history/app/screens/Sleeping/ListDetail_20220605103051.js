import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import data from "../../constants/data";
import AudioItem from "./AudioItem";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS } from "../../constants/index";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default function ListDetail({ route, navigation }) {
  const playlist_id = route.params.playlist_id;
  const [audios, setAudios] = useState(null);

  // get audios
  async function getAudios() {
    const audioCol = collection(db, "audios");
    const audioSnapshot = await getDocs(audioCol);
    const audioList = audioSnapshot.docs.map((doc) => doc.data());
    setAudios(audioList.filter((item) => item.playlist_id == playlist_id));
  }

  // use Effect
  useEffect(() => {
    getAudios();
  }, []);

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
