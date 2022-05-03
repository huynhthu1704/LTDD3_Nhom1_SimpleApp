import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import data from '../../constants/data'
export default function ListDetail() {
    const listAudio = data.audio;
  return (
    <View>
      <FlatList
            data={listAudio}
           //  horizontal={true}
            numColumns={3}
            extraData = {listAudio}
         //   showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <AudioItem item={item} />}
          />
    </View>
  )
}

const styles = StyleSheet.create({})