import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import data from "../../constants/data";
import AudioItem from "../Sleeping/AudioItem";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS } from "../../constants/index";
import { db } from "../../firebase/firebase";
import {
  query,
  doc,
  getDocs,
  getDoc,
  collection,
  where,
} from "firebase/firestore/lite";
import { async } from "@firebase/util";
import User from "../UserManagement/UserData";


export default function Favorites({ route, navigation }) {
  // getFavList();
  const [favList, setFavList] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async() => {
      // getHour();
      // getQuote();
      // getCategories();
      // getRecommendAudios();
      await getFavList();
    });
    return unsubscribe;
  }, [navigation]);
  useEffect(async() => {
   await getFavList();
  }, []);
  async function getFavList() {
    
    const favCol = query(
      collection(db, "favorites"),
      where("user_id", "==", User.currentUser?.id)
    );
    const favSnapshot = await getDocs(favCol);
    const list = favSnapshot.docs.map((doc) => doc.data());
    const arr = [];
    list.forEach(async (item) => {
      const audioCol = doc(db, "audios", `${item.audio_id}`);
      const audioSnapshot = await getDoc(audioCol);
      arr.push(audioSnapshot.data());
      console.log(`arr: ${JSON.stringify(arr)}`);
      await setFavList(arr);
      // console.log(`item ${JSON.stringify(audioSnapshot.data())}`);
    });
    console.log(`arr: ${JSON.stringify(arr)}`);
   
  }
  //   const list = data.listInCategory.find((item) => item.id == route.params.list);
  return (
    <View style={{ backgroundColor: COLORS.pink, flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={favList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.audio_id}
          numColumns={2}
          extraData={favList}
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
