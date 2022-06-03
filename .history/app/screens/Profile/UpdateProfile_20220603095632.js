import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { user } from "../../constants/data";
import { FONTS, COLORS, SIZES } from "../../constants/index";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const avatarSize = 150;

export default function UpdateProfile({ navigation }) {
  const userInfo = user;
  const fullName = user.fullName;
  const [nameAfterChange, setNameAfterChange] = useState(fullName);
  return (
    <View>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.avatarView}>
            <Image style={styles.avatar} source={userInfo.avatar} />
          </View>

          <View style={styles.infoSection}>
            <Text style={[styles.content, { width: "30%" }]}>Name : </Text>
            <View style={styles.textInputView}>
              <TextInput
                multiline={true}
                style={styles.textInput}
                value={nameAfterChange}
                onChangeText={(text) => {
                  setNameAfterChange(text);
                }}
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
            style={[styles.btn, styles.changePwdBtn]}
            onPress={() => {
              // alert("hi");
              navigation.navigate("ChangePassword");
            }}
          >
            <Text style={[styles.content, { color: COLORS.white }]}>DONE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.changePwdBtn]}
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
    justifyContent: "center",
    width: "80%",
  },
  changePwdBtn: {
    // justifyContent: "space-between",
  },
});
