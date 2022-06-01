import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import {user} from "../../constants/data";
import HeaderBar from "../../components/HeaderBar";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export function ProfileAvatar({ navigation }) {
  let heightI = 0;
  const [heightView, setHeightView] = useState(0);
  const [didTappedAvartar, setTapStatus] = useState(false);
  var find_dimensions = (layout) => {
    var { x, y, width, height } = layout;
    setHeightView(height);
    console.log(height);
  };

  function tapOnAvatar() {
    alert("Hi " + user.fullName);
  }

  function goToSetting() {
    alert("Go to setting");
  }
  const imgDimension = 40;
  return (
    <TouchableOpacity style={{ backgroundColor: "red" }} onPress={tapOnAvatar}>
      <Image
        style={{ width: imgDimension, height: imgDimension, borderRadius: 50 }}
        source={user.avatar}
      />
      <View
        onLayout={(event) => {
          find_dimensions(event.nativeEvent.layout);
        }}
        style={{
          // width: "70%",
          position: "absolute",
          zIndex: -1000,
          right: 0,
          bottom: -heightView,
          backgroundColor: COLORS.blue,
          shadowColor: COLORS.black,
          shadowOffset: {
            width: 30,
            height: 20,
          },
          shadowOpacity: 0.5,
          shadowRadius: 50,
          display : didTappedAvartar? "flex" : "none"
        }}
      >
        {/* <Text style={{ ...FONTS.body2, color: COLORS.white }}>Setting</Text> */}
        <TouchableOpacity style={
          {
            flexDirection: "row",
            padding: 10
          }
        } onPress={goToSetting}>
          <FontAwesome name="gear" color={COLORS.black}/>
          <Text>Setting</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
export default function ProfileHome({ navigation }) {
 
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ProfileAvatar />
        /* <TouchableOpacity style={{ marginRight: 20 }} onPress={addToFavorite}>
          <FontAwesome
            name="heart"
            size={SIZES.h1}
            color={like ? COLORS.red : COLORS.white}
          />
        </TouchableOpacity> */
      ),
    });
  });
  return (
    <View style={{color: "red"}}>
      
    </View>
  );
}

const styles = StyleSheet.create({});
