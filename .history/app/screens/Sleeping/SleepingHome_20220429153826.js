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


const musicCategory = [
  {
    id: 1,
    name: "Sleep stories",
  },
  {
    id: 2,
    name: "Meditation",
  },
  {
    id: 3,
    name: "Music",
  },
];

const listInCategory = [
  {
    id: 1,
    name : "Popular sleep stories",
    idCategory: 1,
  },
  {
    id: 2,
    name : "Popular meditation",
    idCategory: 2,
  },
  {
    id: 3,
    name : "Sleep stories for kids",
    idCategory: 1,
  },
];

const audio = [
  {
    id : 1,
    name : "First audio",
    duration : 1,
    author : "David",
    idList : 1
  },
  {
    id : 2,
    name : "Second audio",
    duration : 40,
    author : "Yushu",
    idList : 1
  },
  {
    id : 3,
    name : "Third audio",
    duration : 1,
    author : "Aniya",
    idList : 1
  },
]
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
   <View>
   {/* List header */}
     <View style = {{flexDirection : 'row', paddingHorizontal : SIZES.padding}}>
       <View style = {{flex : 2, justifyContent : 'flex-start'}}>
         <Text style = {{...FONTS.h3, color : COLORS.white}}>{list.name}</Text>
       </View>
       <View style = {{flex : 1, justifyContent : 'flex-end', flexDirection : 'row'}}>
         <Text  style = {{...FONTS.body3, color : COLORS.white}}>
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
