import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FONTS, COLORS, SIZES } from "../../constants/index";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import User from "../UserManagement/UserData";
import { updateDoc, doc } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
const avatarSize = 150;

export default function UpdateProfile({ navigation }) {
  const [nameAfterChange, setNameAfterChange] = useState(User.currentUser.username);
  const [didEdit, setEditStatus] = useState(false);
  const [image, setImage] = useState(User.currentUser.user_image);
  const storage = getStorage();
  //const [hasPermission, setHasPermission] = useState(null);
  const storageRef = ref(storage, "user_image/user" + User.currentUser.id + ".jpg");
  //Upload image to storage firebase

  const pickImage = async () => {
    //No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);

      //convert image to array of bytes
      const img = await fetch(result.uri);
      const bytes = await img.blob();
      const uploadImage = uploadBytesResumable(storageRef, bytes);
      uploadImage.then((snapshot) => {
        console.log('Uploaded a blob or file!');
        //Get url after upload image for user
        getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
          updateCurrentUserWithImage(downloadURL);
        });
      });
    }
  };

  //METHOD FOR FIRESTORE
  //Update user with username
  const updateCurrentUser = async () => {
    const userRef = doc(db, "users", "user" + User.currentUser.id);

    // Remove the 'capital' field from the document
    await updateDoc(userRef, {
      username: nameAfterChange
    });
    User.currentUser.username = nameAfterChange;
  };
  //Update user with image
  const updateCurrentUserWithImage = async (imageLink) => {
    const userRef = doc(db, "users", "user" + User.currentUser.id);

    // Remove the 'capital' field from the document
    await updateDoc(userRef, {
      user_image: imageLink
    });
    User.currentUser.user_image = imageLink;
  };

  return (
    <View>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.avatarView}>
            <Image
              style={styles.avatar}
              source={image ? { uri: image } : User.currentUser.user_image}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                right: 0,
              }}
              onPress={pickImage}
            >
              <FontAwesome name="camera" size={SIZES.h2} />
            </TouchableOpacity>
          </View>

          <View style={styles.infoSection}>
            <Text style={[styles.content, { width: "33%", fontWeight: 'bold' }]}>Username : </Text>
            <View style={styles.textInputView}>
              <TextInput
                multiline={true}
                style={styles.textInput}
                //value={User.currentUser.email}
                value={nameAfterChange}
                onChangeText={(text) => {
                  setNameAfterChange(text);
                  setEditStatus(true);
                }}
                // onBlur={() => {
                //   setEditStatus(true);
                // }}
                returnKeyType="done"
              />
            </View>

            {/* <Text style={[styles.content, {flex: 1, flexWrap: "wrap", }]}>{userInfo.fullName}</Text> */}
          </View>
          <View style={styles.infoSection}>
            <Text style={[styles.content, { width: "33%", fontWeight: 'bold' }]}>Email : </Text>
            <View style={styles.textInputView}>
              <Text style={styles.text}>{User.currentUser.email}</Text>
            </View>
          </View>
          <View style={styles.infoSection}>
            <Text style={[styles.content, { width: "33%", fontWeight: 'bold' }]}>Created at : </Text>
            <View style={styles.textInputView}>
              <Text style={styles.text}>{User.currentUser.created_at}</Text>
            </View>
          </View>
          {/* <View style={styles.infoSection}>
            <Text style={[styles.content, { width: "30%" }]}>Birthday : </Text>
            <Text style={[styles.content, { flex: 1, flexWrap: "wrap" }]}>
            </Text>
          </View> */}
          <TouchableOpacity
            style={[
              styles.btn,
              styles.btnDone,
            ]}
            onPress={() => {
              if (didEdit) {
                updateCurrentUser();
                alert("Change username successfully!");
                setEditStatus(false);
              }else{
                navigation.navigate("ChangePassword");
              }
            }}
          >
            <Text style={[styles.content, { color: COLORS.black, fontWeight: 'bold' }]}>{didEdit ? "EDIT MY INFOMATION " : "CHANGE PASSWORD "}</Text>
            <FontAwesome
                name="arrow-right"
                color={COLORS.black}
                size={SIZES.h2}
                style={{display: didEdit ? "none" : "flex"}}
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
    //backgroundColor: COLORS.lightGray,
    width: "67%",
  },
  text: {
    fontFamily: FONTS.body3.fontFamily,
    lineHeight: FONTS.body3.lineHeight,
    fontSize: SIZES.androidHeightWithStatusBar.window * 0.023,
    width: "120%",
    padding: 5,
    color: 'black'
    //backgroundColor: "green"
  },
  textInput: {
    fontFamily: FONTS.body3.fontFamily,
    lineHeight: FONTS.body3.lineHeight,
    fontSize: SIZES.androidHeightWithStatusBar.window * 0.023,
    width: "100%",
    padding: 5,
    color: 'black',
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    color: COLORS.black,
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
