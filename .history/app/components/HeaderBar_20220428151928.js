import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SIZES, COLORS } from '../constants/theme';
export default function HeaderBar() {
  return (
    <View style = {{paddingHorizontal : SIZES.padding, flexDirection: 'row', backgroundColor: COLORS.purple}}>
     <View style = {{flex : 1, flexDirection : 'row',alignSelf : 'flex-start', }}>
       <TouchableOpacity>
         <Ionicons name='arrow-back' size = {SIZES.h1} color= {COLORS.gray}/>
       <Text>Back</Text>
       </TouchableOpacity>
     </View>
     <View style = {{flex:1, alignSelf : 'flex-end'}}>
     <Ionicons name='arrow-back' size = {SIZES.base} color= {COLORS.gray}/>

     </View>
    </View>
  )
}

const styles = StyleSheet.create({})