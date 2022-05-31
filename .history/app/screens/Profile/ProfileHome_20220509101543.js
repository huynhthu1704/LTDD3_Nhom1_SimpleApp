import { StyleSheet, Text, View, Image } from "react-native";
import React, {useState} from "react";
import HeaderBar from "../../components/HeaderBar";
import { COLORS, images, SIZES } from "../../constants";


export function ProfileAvatar() {
  let heightI = 0;
  const [heightView, setHeightView] = useState(0);
  var find_dimensions = (layout) => {
    var {x, y, width, height} = layout;
    setHeightView(height);
    console.log(height);
  }
  const imgDimension = 40;
  return (<View style={{backgroundColor: 'red'}}>
 
   <Image style = {{width: imgDimension, height: imgDimension, borderRadius : 50}} source={images.launchScreenImg}/>
   <View onLayout={(event)=>{find_dimensions(event.nativeEvent.layout)}} style = {{ width : '200%',position: 'absolute', right : 0, bottom: -heightView, backgroundColor: 'green'}}>
      <Text style = {{fontSize : SIZES.body2}}>Setting</Text>
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
