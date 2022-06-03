import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { user } from '../../constants/data'
export default function UpdateProfile() {
    const userInfo = user;
  return (
    <View>
     <ScrollView>
         <View>
             <Image style = {{width: 80, height: 80}} source={userInfo.img}/>
         </View>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})