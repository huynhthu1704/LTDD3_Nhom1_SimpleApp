import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { user } from "../../constants/data";
import HeaderBar from "../../components/HeaderBar";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { NavigationContainerRefContext } from "@react-navigation/native";

export function ProfileAvatar({ data, navigation, onSelect }) {
  let heightI = 0;
  // const data = data;
  const [heightView, setHeightView] = useState(0);
  const [didTappedAvartar, setTapStatus] = useState(false);
  var find_dimensions = (layout) => {
    var { x, y, width, height } = layout;
    setHeightView(height);
    console.log(height);
  };

  function tapOnAvatar() {
    setTapStatus(!didTappedAvartar);
  }

  // function goToRoute() {
  //   alert("Go to setting");
  // }
  const imgDimension = 40;
  return (
    <TouchableOpacity onPress={tapOnAvatar}>
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
          right: 5,
          bottom: -heightView - 5,
          backgroundColor: COLORS.blue,
          shadowColor: COLORS.black,
          shadowOffset: {
            width: 30,
            height: 20,
          },
          shadowOpacity: 0.5,
          shadowRadius: 50,
          display: "none",
        }}
      >
        {didTappedAvartar &&
          data.map(({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  alignItems: "center",
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.white,
                  // display: 'none'
                }}
                onPress={onSelect}
              >
                {/* <FontAwesome
                  name={item.icon}
                  color={COLORS.white}
                  size={SIZES.h3}
                /> */}
                <Text
                  style={{ ...FONTS.h3, color: COLORS.white, marginLeft: 10 }}
                >
                 haha
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </TouchableOpacity>
  );
}
export default function ProfileHome({ navigation }) {
  const data = [
    {
      id: 1,
      title: "Profile",
      icon: "user-pen",
      goToRoute: "UpdateProfile",
    },
    {
      id: 2,
      title: "Setting",
      icon: "gear",
      goToRoute: "Setting",
    },
  ];
  function goToRoute() {
    alert("Go to setting");
  }
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ProfileAvatar navigation={navigation} data={data} onSelect={goToRoute}/>
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
  return <View style={{ color: "red" }}></View>;
}

const styles = StyleSheet.create({});
