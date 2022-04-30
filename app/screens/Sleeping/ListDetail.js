import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import data from '../../constants/data'
import AudioItem from './AudioItem';
import HeaderBar from '../../components/HeaderBar';
import { SIZES, COLORS } from '../../constants/index';
export default function ListDetail({route, navigation}) {
    const list = data.listInCategory.find((item) => item.id == route.params.list);
    const listAudio = data.audio.filter((item) => item.idList == list.id);
  return (
    <View>
    <HeaderBar  bgColor = {COLORS.purple} color = {COLORS.white} name = {list.name}  />
     <View style = {{alignItems : 'center', }}>
       <FlatList
            data={listAudio}
           //  horizontal={true}
            numColumns={3}
            extraData = {listAudio}
         //   showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <AudioItem item={item} navigation = {navigation} />}
          />   
     </View>
     
    </View>
  )
}

const styles = StyleSheet.create({})