import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants/index";
import { user } from "../constants/data";
import { musicCategory2, musicCategory, listInCategory, audio } from "../constants/data";
import AudioItem from "../screens/Sleeping/AudioItem";

const padding = 20;
const HomeScreen = ({ navigation }) => {
  const userName = user.fullName;
  const [hour, setHour] = useState(0);
  useEffect(() => {
    getHour();
  }, []);
  function getHour() {
    const date = new Date();
    const currentHour = date.getHours();
    setHour(currentHour);
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingHorizontal: padding }}>
        <View style={{ height: 100, justifyContent: "center"}}>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" , marginVertical : 10 }}>
          {/* Meditation item */}
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
              <TouchableOpacity style={styles.btnInCategoryItem}>
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
        <View>
          <Text style={{...FONTS.h2}}>Recommend for you</Text>
          <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data={section.data}
                renderItem={({ item }) => <AudioItem item={item} navigation={navigation} size={imgSize} padding={SIZES.padding /4}/>}
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
  categoryItem: {
    width: (SIZES.width - padding * 3) / 2,
    height: SIZES.width / 2,
    backgroundColor: "red",
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
