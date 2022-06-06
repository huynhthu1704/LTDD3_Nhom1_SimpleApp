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
  Animated,
} from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants/index";
import { user } from "../constants/data";
import {
  musicCategory2,
  musicCategory,
  listInCategory,
  audio,
} from "../constants/data";
import AudioItem from "../screens/Sleeping/AudioItem";
import InspirationalQuote from "./InspirationalQuote";
import React, { useRef, useState, useEffect } from "react";
import User from "./UserManagement/UserData";
import { authentication } from "../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore/lite";
import { db } from "../firebase/firebase";
const padding = 15;
const imgSize = 120;

const FeatureCategory = () => {
  return (
    <View style={styles.categoryItem}>
      <ImageBackground
        style={styles.imgBg}
        resizeMode="cover"
        source={images.sleepingOnBoardingImg}
      >
        <Text style={styles.textInsideCategoryItem}>Sleeping</Text>
        <TouchableOpacity style={styles.btnInCategoryItem} onPress={getQuote}>
          <Text style={{ color: COLORS.blue, ...FONTS.body4 }}>Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const HomeScreen = ({ navigation }) => {
  const userName = user.fullName;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [hour, setHour] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quotes, setQuotes] = useState(null);
  const [featureCategories, setFeatureCategories] = useState(null);
  const [recommendAudios, setRecommendAudios] = useState([]);

  // useEffect
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getHour();
      getQuote();
      getCategories();
      getRecommendAudios();
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  // useEffect(() => {
  //   getHour();
  //   getQuote();
  //   getCategories();
  //   getRecommendAudios();
  // }, []);

  // get current hour
  function getHour() {
    const date = new Date();
    const currentHour = date.getHours();
    setHour(currentHour);
  }

  async function getQuote() {
    const quoteCol = collection(db, "inspirational_quotes");
    const quoteSnapshot = await getDocs(quoteCol);
    const quoteList = quoteSnapshot.docs.map((doc) => doc.data());
    // console.log(JSON.stringify(quotes));
    setQuotes(quoteList);
  }

  async function getCategories() {
    const cateCol = collection(db, "categories");
    const cateSnapshot = await getDocs(cateCol);
    const cateList = cateSnapshot.docs.map((doc) => {
      console.log(
        `${doc.data().audio_id}'s total_likes${doc.data().total_likes}`
      );
      return doc.data();
    });
    // console.log(JSON.stringify(cateList));
    //
    setFeatureCategories(cateList.splice(0, 2));
  }

  async function getRecommendAudios() {
    const audioCol = query(
      collection(db, "audios"),
      orderBy("total_likes", "desc"),
      limit(5)
    );
    const audioSnapshot = await getDocs(audioCol);
    const audioList = audioSnapshot.docs.map((doc) => doc.data());
    setRecommendAudios(audioList);
    console.log(JSON.stringify(audioList));
  }

  const goToScreen = (name) => {
    console.log("selected cate name: " + name);
    if (name == "Meditation") {
      navigation.navigate("Meditation");
    } else if (name == "Sleeping") {
      navigation.navigate("Sleeping");
    }
  };
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={[styles.view, { height: 80, justifyContent: "center" }]}>
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
        <View
          style={[
            styles.view,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          {/* Meditation item */}
          {featureCategories?.map((item, index) => {
            return (
              <View style={styles.categoryItem}>
                <ImageBackground
                  style={styles.imgBg}
                  resizeMode="cover"
                  source={{ uri: item.img }}
                >
                  <Text style={styles.textInsideCategoryItem}>{item.name}</Text>
                  <TouchableOpacity
                    style={styles.btnInCategoryItem}
                    onPress={() => goToScreen(item.name)}
                  >
                    <Text style={{ color: COLORS.blue, ...FONTS.body4 }}>
                      Start
                    </Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            );
          })}
        </View>
        {/* End Feature Category */}
        {/* Recommend */}
        <View style={styles.view}>
          <Text style={{ ...FONTS.h2 }}>Recommend for you</Text>
          {console.log(JSON.stringify(recommendAudios))}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.audio_id}
            data={recommendAudios}
            renderItem={({ item }) => (
              <AudioItem
                item={item}
                navigation={navigation}
                size={imgSize}
                padding={SIZES.padding / 4}
                color={COLORS.black}
              />
            )}
          />
        </View>
        {/* Inspirational quote */}
        <View style = {{paddingBottom: 20}}>
          <Text style={{ ...FONTS.h2, padding: 15 }}>Inspirational quotes</Text>
          <FlatList
            horizontal
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.quote_id}
            showsHorizontalScrollIndicator={false}
            data={quotes}
            renderItem={({ item }) => <InspirationalQuote item={item} />}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
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
  view: {
    marginVertical: 10,
    paddingHorizontal: 15,
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
