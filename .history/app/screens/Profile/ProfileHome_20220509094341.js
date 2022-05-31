import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar";
import { COLORS, images } from "../../constants";


export function ProfileAvatar() {
  return (<View style={{}}>
 
   <Image style = {{width: 40, height: 40, borderRadius : 50}} source={images.launchScreenImg}/>
  </View>);
}
export default function ProfileHome() {
  return (
    <View>
      <HeaderBar
        name="Profile"
        color={COLORS.black}
        leftIcon="arrow-left"
        rightComponent={<ProfileAvatar/>}
      />
       <View style = {{position: 'absolute', right : 0, bottom: 0}}>
      <Text>Setting</Text>
      <Text>Setting</Text>
      <Text>Setting</Text>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({});
