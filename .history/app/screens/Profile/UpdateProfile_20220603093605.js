import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { user } from "../../constants/data";
import { FONTS, COLORS, SIZES } from "../../constants/index";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const userInfo = user;
const avatarSize = 150;
export default function UpdateProfile({ navigation }) {
  return (
    <View>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.avatarView}>
            <Image style={styles.avatar} source={userInfo.avatar} />
          </View>

          <View style={styles.infoSection}>
            <Text style={[styles.content, { width: 100 }]}>Name : </Text>
            <View style={styles.textInput}>
              <TextInput placeholder={user.fullName} />
            </View>

            {/* <Text style={[styles.content, {flex: 1, flexWrap: "wrap", }]}>{userInfo.fullName}</Text> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "flex-start",
            }}
          >
            <Text style={[styles.content, { width: 100 }]}>Bithday : </Text>
            <Text style={[styles.content, { flex: 1, flexWrap: "wrap" }]}>
              {userInfo.birthday}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.purple,
              marginTop: 30,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
            }}
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
    alignItems: "flex-start",
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.lightGray2,
  },
});
