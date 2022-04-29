import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import React, {useState} from "react";
import { appTheme, COLORS, FONTS, SIZES, images } from "../../constants/index";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../components/HeaderBar";
import { FontAwesome } from "@expo/vector-icons";
import {musicCategory, listInCategory, audio} from '../../constants/data'

export function CategoryItem({ item }) {
  const [isSelected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={{
        borderRadius: 30,
        paddingHorizontal: SIZES.padding / 2,
        paddingVertical: SIZES.padding / 3,
        marginRight: 10,
        backgroundColor : isSelected? COLORS.darkPurple : COLORS.white2,
      }}
      onPress = {() => setSelected(!isSelected)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}
export function AudioItem({ item }) {
  const [isSelected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        paddingBottom: SIZES.padding / 3,
        marginRight: 10,
        justifyContent : "center",
        alignItems : "center",
        width : 100,
       // backgroundColor : isSelected? COLORS.darkPurple : COLORS.white2,
      }}
      onPress = {() => setSelected(!isSelected)}
    >
    <Image style = {{width : '100%', height : 100, borderRadius : 10}} source={{uri : "http://khoack.tdc.edu.vn/wp-content/uploads/2017/01/Logo-Cao-dang1.jpg"}}/>
      <Text style = {{...FONTS.body4, color : COLORS.white}}>{item.name}</Text>
      <Text style = {{...FONTS.body4, color : COLORS.white}}>{item.author}</Text>
    </TouchableOpacity>
  );

}
export function ListInCategory({ list }) {
  return (
   <View style = {{ marginLeft : SIZES.padding/2}}>
   {/* List header */}
     <View style = {{flexDirection : 'row', paddingRight : SIZES.padding/2}}>
       <View style = {{flex : 2, justifyContent : 'flex-start'}}>
         <Text style = {{...FONTS.h3, color : COLORS.white}}>{list.name}</Text>
       </View>
       <View style = {{flex : 1, alignItems : 'center', justifyContent : 'flex-end', flexDirection : 'row'}}>
         <Text  style = {{...FONTS.body3, color : COLORS.white, marginRight : 5}}>
           See all
         </Text>
         <FontAwesome name = "arrow-right" color = {COLORS.white}/>
       </View>
     </View>
     {/* End list header */}
      {/* Categoty list */}
      <View style = {{marginVertical : SIZES.padding /2, justifyContent : "center", alignItems : "center"}}>
        <FlatList data = {audio} horizontal = {true} renderItem = {({item}) => <AudioItem item = {item} />}/>
      </View>
   </View>
  );
}

export default function SleepingHome() {
  return (
    <View style = {{backgroundColor : COLORS.purple, flex : 1}}>
      <HeaderBar
        bgColor={COLORS.purple}
        color={COLORS.white}
        name="Sleeping"
        rightIcon="bell"
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={musicCategory}
          horizontal={true}
          renderItem={({ item }) => <CategoryItem item={item} />}
        />
      </View>
     <View>
       <FlatList data = {listInCategory} renderItem = {({item}) => <ListInCategory list = {item} />}/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({});
