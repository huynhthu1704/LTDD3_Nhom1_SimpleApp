import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar";
import { COLORS } from "../../constants";
import launchScreenImg from '../../constants/images';


export function ProfileAvatar() {
  return (<View style={{borderRadius : 10}}>
 
   <Image style = {{width: 40, height: 40}} src={launchScreenImg}/>
  </View>);
}
export default function ProfileHome() {
  return (
    <View>
      <HeaderBar
        name="Profile"
        color={COLORS.white}
        leftIcon="arrow-left"
        rightComponent={<ProfileAvatar/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
