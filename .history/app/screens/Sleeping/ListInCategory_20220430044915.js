import React from 'react'
import { Text, View, TouchableWithoutFeedback, ScrollView,FlatList } from 'react-native' ;
import { FontAwesome } from "@expo/vector-icons";
import { AudioItem } from "./AudioItem";

 export function ListInCategory({ list }) {
    return (
      <View style={{ marginLeft: SIZES.padding / 2 }}>
        {/* List header */}
        <View style={{ flexDirection: "row", paddingRight: SIZES.padding / 2 }}>
          <View style={{ flex: 2, justifyContent: "flex-start" }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{list.name}</Text>
          </View>
          <View  style={
                {
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }
              }>
            <TouchableWithoutFeedback
             
              onPress={() => alert("You long-pressed the button!")}
            >
              <Text
                style={{ ...FONTS.body3, color: COLORS.white, marginRight: 5 }}
              >
                See all
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <FontAwesome name="arrow-right" color={COLORS.white} />
            </TouchableWithoutFeedback>
          </View>
        </View>
        {/* End list header */}
        {/* Categoty list */}
        <View
          style={{
            marginVertical: SIZES.padding / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <ScrollView>
           <FlatList
            data={audio}
            horizontal={true}
            numColumns={Math.ceil(listData.length / 2)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <AudioItem item={item} />}
          />  
        </ScrollView>
         
        </View>
      </View>
    );
  }