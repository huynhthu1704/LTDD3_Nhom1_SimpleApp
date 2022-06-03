import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants/index";
import { user } from "../constants/data";

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
        <View style={{ height: 100, justifyContent: "center" }}>
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
        <View>
          <View style={styles.categoryItem}>
            {/* <Image source={images.launchScreenImg} style={{width: 40, height: 40}}/> */}
            <ImageBackground
              style={styles.imgBg}
              resizeMode="cover"
              source={images.launchScreenImg}
            >
              <Text style={styles.textInsideCategoryItem}>Mediation</Text>
              <TouchableOpacity style={styles.btnInCategoryItem}>
                <Text style={{color: COLORS.blue, ...FONTS.body4}}>
                  Start
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
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
    height: (SIZES.width - padding * 3) / 2,
    backgroundColor: "red",
    // borderRadius: 20,
    overflow: "hidden"
  },
  textInsideCategoryItem: {
    color: COLORS.white,
    ...FONTS.h2
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
    borderRadius : 20
  }
});
export default HomeScreen;
