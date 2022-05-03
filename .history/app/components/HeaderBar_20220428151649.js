import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SIZES, COLORS } from '../constants/theme';
export default function HeaderBar() {
  return (
    <View style = {{padding : SIZES.padding, flexDirection: 'row', backgroundColor: COLORS.purple}}>
     <View style = {{alignSelf : 'flex-start', flexDirection : 'row'}}>
       <TouchableOpacity>
         <Ionicons name='arrow-back' size = {SIZES.font} color= {COLORS.gray}/>
       <Text>Back</Text>
       </TouchableOpacity>
     </View>
     <View style = {{alignSelf : 'flex-end'}}>
     <Ionicons name='arrow-back' size = {SIZES.base} color= {COLORS.gray}/>

     </View>
    </View>
  )
}

const styles = StyleSheet.create({})