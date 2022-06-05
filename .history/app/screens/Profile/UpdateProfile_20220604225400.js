import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { user } from "../../constants/data";
import { FONTS, COLORS, SIZES } from "../../constants/index";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { authentication } from "../../firebase/firebase";
const avatarSize = 150;

export default function UpdateProfile({ navigation }) {
  const userInfo = user;
  const fullName = user.fullName;
  const [nameAfterChange, setNameAfterChange] = useState(fullName);
  const [didEdit, setEditStatus] = useState(false);
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const pickImage = async () => {
    //No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  useEffect(() => {
    (async () => {
      const status = ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(status.status === "granted");
    })();
  }, []);
  console.log(authentication.currentUser);
  return (
    <View>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.avatarView}>
            <Image
              style={styles.avatar}
              source={image ? {uri:image}  : userInfo.avatar}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                right: 0,
              }}
              onPress={pickImage }
            >
              <FontAwesome name="camera" size={SIZES.h2} />
            </TouchableOpacity>
          </View>

          <View style={styles.infoSection}>
            <Text style={[styles.content, { width: "30%" }]}>Name : </Text>
            <View style={styles.textInputView}>
              <TextInput
                multiline={true}
                style={styles.textInput}
                value={authentication.currentUser?.email}
                //value={nameAfterChange}
                onChangeText={(text) => {
                  setNameAfterChange(text);
                  console.log("nameAfterChange:" + nameAfterChange);
                  setEditStatus(true);
                }}
                onBlur={() => {
                  setEditStatus(false);
                }}
                returnKeyType="done"
              />
            </View>

            {/* <Text style={[styles.content, {flex: 1, flexWrap: "wrap", }]}>{userInfo.fullName}</Text> */}
          </View>
          <View style={styles.infoSection}>
            <Text style={[styles.content, { width: "30%" }]}>Birthday : </Text>
            <Text style={[styles.content, { flex: 1, flexWrap: "wrap" }]}>
              {userInfo.birthday}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.btn,
              styles.btnDone,
              { display: didEdit ? "flex" : "none" },
            ]}
            onPress={() => {
              alert("Information is updated");
              console.log("nameAfterChange:" + nameAfterChange);
              setEditStatus(false);
            }}
          >
            <Text style={[styles.content, { color: COLORS.white }]}>DONE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btn,
              styles.changePwdBtn,
              { display: !didEdit ? "flex" : "none" },
            ]}
            onPress={() => {
              // alert("hi");
              navigation.navigate("ChangePassword");
            }}
          >
            <Text style={[styles.content, { color: COLORS.white }]}>
              Change password
            </Text>
            <FontAwesome
              name="arrow-right"
              color={COLORS.white}
              size={SIZES.h2}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    ...FONTS.body3,
  },
  avatarView: { height: 200, justifyContent: "center" },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
  },
  infoSection: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    // backgroundColor: "red",
    justifyContent: "center",
  },
  textInputView: {
    paddingVertical: 5,
    // paddingHorizontal: 20,
    // backgroundColor: COLORS.lightGray,
    width: "70%",
  },
  textInput: {
    color: COLORS.black,
    ...FONTS.body3,
    width: "100%",
    padding: 5,
    // backgroundColor: "green"
  },
  btn: {
    flexDirection: "row",
    backgroundColor: COLORS.purple,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",

    width: "80%",
  },
  changePwdBtn: {
    justifyContent: "space-between",
  },
  btnDone: {
    justifyContent: "center",
  },
});
