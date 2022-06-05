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
  Pressable
} from "react-native";
import React, { useState } from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { FontAwesome } from "@expo/vector-icons";
import { musicCategory2, musicCategory, listInCategory, audio } from "../../constants/data";
import AudioItem from "./AudioItem";
import {collection, getDocs} from "firebase/firestore/lite"
import { db } from "../../firebase/firebase";

const imgSize = 120;

export default function SleepingHome({ navigation }) {
  const [audios, setAudios] = useState(null);
  async function getAudios() {
    const audioCol = collection(db, "audios");
    const audioSnapshot = await getDocs(audioCol);
    const audioList = audioSnapshot.docs.map(doc => doc.data());
    console.log(JSON.stringify(audioList));
    //
    setFeatureCategories(cateList.splice(0, 2));
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.purple }}>
      <StatusBar
        backgroundColor={COLORS.purple}
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <View>
        <SectionList style={{marginLeft: 10}}
          sections={musicCategory}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            return null;
            return <AudioItem item={item} navigation={navigation} size={imgSize}/>;
          }}
          renderSectionHeader={({ section }) => (
            <View>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Text style={{ ...FONTS.h2, color: COLORS.white, opacity: 0.9 }}>{section.name}</Text>
            <Pressable onPress={() => {
              navigation.navigate("ListDetail", {title : section.name});
            }}>
            <Text style={{ ...FONTS.body3, color: COLORS.white, opacity: 0.9 }}>View all </Text></Pressable>
            </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data={section.data}
                renderItem={({ item }) => <AudioItem item={item} navigation={navigation} size={imgSize} padding={SIZES.padding /4}/>}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
