import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar";
import { COLORS, images } from "../../constants";


export function ProfileAvatar() {
  find_dimensions(layout) {
    var {x, y, width, height} = layout
  }
  return (<View style={{backgroundColor: 'red'}}>
 
   <Image style = {{width: 40, height: 40, borderRadius : 50}} source={images.launchScreenImg}/>
   <View onLayout={(event)=>event.nativeEvent.layout} style = {{position: 'absolute', right : 0, bottom: this.height, backgroundColor: 'green'}}>
      <Text>Setting</Text>
      <Text>Setting</Text>
      <Text>Setting</Text>
      <Text>Setting</Text>
      </View>
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
     
    </View>
   
  );
}

const styles = StyleSheet.create({});
