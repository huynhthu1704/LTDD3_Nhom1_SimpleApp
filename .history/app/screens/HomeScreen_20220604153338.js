import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Animated
} from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants/index";
import { user } from "../constants/data";
import { musicCategory2, musicCategory, listInCategory, audio, } from "../constants/data";
import AudioItem from "../screens/Sleeping/AudioItem";
import InspirationalQuote from "./InspirationalQuote";
import React, {useRef, useState, useEffect} from 'react';
import User from "./UserManagement/UserData";
import {collection, getDocs} from "firebase/firestore/lite"
import { db } from "../firebase/firebase";
const padding = 15;
const imgSize = 120;

const FeatureCategory = () => {
  return ( <View style={styles.categoryItem}>
    <ImageBackground
      style={styles.imgBg}
      resizeMode="cover"
      source={images.sleepingOnBoardingImg}
    >
      <Text style={styles.textInsideCategoryItem}>Sleeping</Text>
      <TouchableOpacity style={styles.btnInCategoryItem} onPress={getQuote}>
        <Text style={{ color: COLORS.blue, ...FONTS.body4 }}>
          Start
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>)
}
const HomeScreen = ({ navigation }) => {
  const userName = user.fullName;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [hour, setHour] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quotes, setQuotes] = useState(null)
  const [categories, setCategories] = useState(null)
  useEffect(() => {
    getHour();
    getQuote();
    getCategories();
  }, []);
  function getHour() {
    const date = new Date();
    const currentHour = date.getHours();
    setHour(currentHour);
  }

  async function getQuote() {
    const quoteCol = collection(db, "inspirational_quotes");
    const quoteSnapshot = await getDocs(quoteCol);
    const quoteList = quoteSnapshot.docs.map(doc => doc.data());
    console.log(JSON.stringify(quotes));
    setQuotes(quoteList);
  }

  async function getCategories() {
    const cateCol = collection(db, "categories");
    const cateSnapshot = await getDocs(cateCol);
    const cateList = cateSnapshot.docs.map(doc => doc.data());
    console.log(JSON.stringify(cateList));
    setCategories(cateList);
  }
  
const goToScreen = (name) => {
 if (name == "Meditation") {
 navigation.navigate("");
 } else if (name == "Sleeping") {
  navigation.navigate("");
 }
}
  return (
    <ScrollView>
      <View style={{ flex: 1}}>
        <View style={[ styles.view,{ height: 80, justifyContent: "center"}]}>
          <Text
            style={{
              ...FONTS.h1,
            }}
          >
            {hour < 12 ? "Good morning" : "Good evening"}
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.black6,
            }}
          >
            We wish you have a good day
          </Text>
        </View>

        {/* Feature Category */}
        <View style={[ styles.view,{ flexDirection: "row", justifyContent: "space-between" , }]}>
          {/* Meditation item */}
          {categories?.map((item, index) => {
            return (
            <View style={styles.categoryItem}>
            <ImageBackground
              style={styles.imgBg}
              resizeMode="cover"
              source={{uri : item.img}}
            >
              <Text style={styles.textInsideCategoryItem}>{item.name}</Text>
              <TouchableOpacity style={styles.btnInCategoryItem} onPress={goToScreen(item.name)}>
                <Text style={{ color: COLORS.blue, ...FONTS.body4 }}>
                  Start
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>)
          })}
          <View style={styles.categoryItem}>
            <ImageBackground
              style={styles.imgBg}
              resizeMode="cover"
              source={images.launchScreenImg}
            >
              <Text style={styles.textInsideCategoryItem}>Mediation</Text>
              <TouchableOpacity style={styles.btnInCategoryItem}>
                <Text style={{ color: COLORS.blue, ...FONTS.body4 }}>
                  Start
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          {/* End Meditation item */}
          {/* Sleeping item */}
          <View style={styles.categoryItem}>
            <ImageBackground
              style={styles.imgBg}
              resizeMode="cover"
              source={images.sleepingOnBoardingImg}
            >
              <Text style={styles.textInsideCategoryItem}>Sleeping</Text>
              <TouchableOpacity style={styles.btnInCategoryItem} onPress={getQuote}>
                <Text style={{ color: COLORS.blue, ...FONTS.body4 }}>
                  Start
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          {/* End Sleeping item */}
        </View>
        {/* End Feature Category */}
        {/* Recommend */}
        <View style={styles.view}>
          <Text style={{...FONTS.h2}}>Recommend for you</Text>
          <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data={audio}
                renderItem={({ item }) => <AudioItem item={item} navigation={navigation} size={imgSize} padding={SIZES.padding /4} color={COLORS.black}/>}
              />
        </View>
        {/* Inspirational quote */}
        <View>
        <Text style={{...FONTS.h2, padding: 15}}>Inspirational quotes</Text>
        <FlatList
                horizontal
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.quote_id}
                showsHorizontalScrollIndicator = {false}
                data={quotes}
                renderItem={({ item }) => <InspirationalQuote item={item} />}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x : scrollX}}}], {
                  useNativeDriver : false
                })}
                // onViewableItemsChanged={onViewableItemsChanged}
              />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textHome: {
    fontSize: 50,
    color: "red",
  },
  view : {
    marginVertical: 10,
    paddingHorizontal: 15
  },
  categoryItem: {
    width: (SIZES.width - padding * 3) / 2,
    height: SIZES.width / 2,
    // backgroundColor: "red",
    borderRadius: 15,
    overflow: "hidden",
  },
  textInsideCategoryItem: {
    color: COLORS.white,
    ...FONTS.h2,
  },
  btnInCategoryItem: {
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.lightGray,
  },
  imgBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
  },
});
export default HomeScreen;
