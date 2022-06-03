import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { user } from '../../constants/data'
export default function UpdateProfile() {
    const userInfo = user;
  return (
    <View>
     <ScrollView>
         <View>
             <Image style = {{width: 100, height: 100}} source={userInfo.avatar}/>
         </View>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})