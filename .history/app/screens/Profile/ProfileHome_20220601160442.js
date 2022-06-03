import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import { COLORS, FONTS, images, SIZES } from "../../constants";

export function ProfileAvatar({ navigation }) {
  let heightI = 0;
  const [heightView, setHeightView] = useState(0);
  var find_dimensions = (layout) => {
    var { x, y, width, height } = layout;
    setHeightView(height);
    console.log(height);
  };

  

  const imgDimension = 40;
  return (
    <TouchableOpacity style={{ backgroundColor: "red" }}>
      <Image
        style={{ width: imgDimension, height: imgDimension, borderRadius: 50 }}
        source={images.launchScreenImg}
      />
      <View
        onLayout={(event) => {
          find_dimensions(event.nativeEvent.layout);
        }}
        style={{
          width: "200%",
          position: "absolute",
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
        }}
      >
        <Text style={{ ...FONTS.body2, color: COLORS.white }}>Setting</Text>
        <Text>Setting</Text>
        <Text>Setting</Text>
        <Text>Setting</Text>
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
