import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { user } from "../../constants/data";
import HeaderBar from "../../components/HeaderBar";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export function ProfileAvatar({ data, navigation, onSelect }) {
  let heightI = 0;
  // const data = data;
  const [heightView, setHeightView] = useState(0);
  const [didTappedAvatar, setTapStatus] = useState(false);
  var find_dimensions = (layout) => {
    var { x, y, width, height } = layout;
    setHeightView(height);
    console.log(height);
  };

  function tapOnAvatar() {
    setTapStatus(!didTappedAvatar);
    alert("say hi");
  }

  function tapOnAvatar2() {
    // setTapStatus(!didTappedAvatar);
    alert("say hiiiiii");
  }

  const goToRoute2 = () => {
    alert("Go to setting");
  };
  const imgDimension = 40;
  return (
    <>
      <TouchableOpacity onPress={tapOnAvatar}>
        <Image
          style={{
            width: imgDimension,
            height: imgDimension,
            borderRadius: 50,
          }}
          source={user.avatar}
        />
     
      <TouchableOpacity
        // title="Click"
        onPress={tapOnAvatar2}
        // onLayout={(event) => {
        //   find_dimensions(event.nativeEvent.layout);
        // }}
        style={
          {
            width: "70%",
            position: "absolute",
            // zIndex: -1000,
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
          }
        }
      >
        {/* <Text>Hiii</Text> */}
        {didTappedAvatar && (
          <View>
            {data.map((item, i) => {
              return (
                <TouchableOpacity
                  key={String(i)}
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
                  onPress={() => {
                    alert("hii");
                  }}
                >
                  <FontAwesome
                    name={item.icon}
                    color={COLORS.white}
                    size={SIZES.h3}
                  />
                  <Text
                    style={{ ...FONTS.h3, color: COLORS.white, marginLeft: 10 }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
}
export default function ProfileHome({ navigation }) {
  const data = [
    {
      id: 1,
      title: "Profile",
      icon: "user",
      goToRoute: "UpdateProfile",
    },
    {
      id: 2,
      title: "Setting",
      icon: "gear",
      goToRoute: "Setting",
    },
  ];
  const goToRoute = () => {
    alert("Go to setting");
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ProfileAvatar
          navigation={navigation}
          data={data}
          onSelect={goToRoute}
        />
      ),
    });
  });
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.blue }}>
      {/* <TouchableOpacity
        onPress={goToRoute}
      >
        <Text>Touch me</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({});
