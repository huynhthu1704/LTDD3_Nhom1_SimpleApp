import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { user } from "../../constants/data";
import { FONTS, COLORS, SIZES } from "../../constants/index";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function UpdateProfile({ navigation }) {
  const userInfo = user;
  const avatarSize = 150;
  return (
    <View>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ height: 200, justifyContent: "center" }}>
            <Image
              style={{
                width: avatarSize,
                height: avatarSize,
                borderRadius: avatarSize / 2,
              }}
              source={userInfo.avatar}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "flex-start",
            }}
          >
            <Text style={[styles.content, ]}>Name : </Text>
            <Text style={[styles.content, {flex: 1, flexWrap: "wrap", }]}>{userInfo.fullName}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "flex-start",
            }}
          >
            <Text style={[styles.content, { width: 200 }]}>Bithday : </Text>
            <Text style={[styles.content, {flex: 1, flexWrap: "wrap", }]}>{userInfo.birthday}</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.purple,
              marginTop: 30,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
            onPress={navigation.navigate("")}
          >
            <Text style={[styles.content, { color: COLORS.white }]}>
              Change password
            </Text>
            <FontAwesome name="arrow-right" color={COLORS.white}/>
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
});
