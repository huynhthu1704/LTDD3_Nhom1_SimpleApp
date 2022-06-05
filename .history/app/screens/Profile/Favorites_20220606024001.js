import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, {useEffect, useState} from "react";
import data from "../../constants/data";
import AudioItem from "../Sleeping/AudioItem";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS } from "../../constants/index";
import { db } from "../../firebase/firebase";
import {query, doc, getDocs, collection, where} from "firebase/firestore/lite"
import { async } from "@firebase/util";
import User from "../UserManagement/UserData";
export default function Favorites({ route, navigation }) {

  const [favList, setFavList] = useState([]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getHour();
      // getQuote();
      // getCategories();
      // getRecommendAudios();
      getFavList();
    });
    return unsubscribe;
  }, [navigation]);

  async function getFavList() {
const favCol = query(collection(db, "favorites"), where("user_id", "==", User.currentUser?.id));
const favSnapshot = getDocs(favCol);
const list = favSnapshot.docs.map(doc => doc.data());
const arr = [];
list.forEach((item) => {
  const audioCol = doc(db, "audios", item.audio_id);
  console.log(`item ${audioCol}`);
})
  }
//   const list = data.listInCategory.find((item) => item.id == route.params.list);
  const listAudio = data.musicCategory[0].data;
  return (
    <View style={{backgroundColor: COLORS.pink, flex : 1}}>
      
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={favList}
          showsVerticalScrollIndicator={false}
          //  horizontal={true}
          numColumns={2}
          extraData={favList}
          //   showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AudioItem item={item} navigation={navigation} size={150}  padding={SIZES.padding /2}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
