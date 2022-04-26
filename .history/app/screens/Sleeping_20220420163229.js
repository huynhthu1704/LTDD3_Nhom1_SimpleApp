import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { FONTS } from "../constants/theme";
import {LinearGradient} from "expo-linear-gradient"

export default function Sleeping() {
  const renderHeader = () => {
    return (<View>
<Text>Hello</Text>
    </View>)
  }
  return (
    <ScrollView>
       <View style = {{flex : 1, paddingBottom : 100}}>
    
   {renderHeader()}
      
    </View>   
    </ScrollView>

  )
}

const styles = StyleSheet.create({})