import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import data from "../../constants/data";
import AudioItem from "./AudioItem";
import HeaderBar from "../../components/HeaderBar";
import { SIZES, COLORS } from "../../constants/index";
export default function ListDetail({ route, navigation }) {
//   const list = data.listInCategory.find((item) => item.id == route.params.list);
  const listAudio = data.musicCategory[0].data;
  return (
    <View style={{backgroundColor: COLORS.purple, flex : 1}}>
      
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={listAudio}
          //  horizontal={true}
          numColumns={2}
          extraData={listAudio}
          //   showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AudioItem item={item} navigation={navigation} size={150}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
