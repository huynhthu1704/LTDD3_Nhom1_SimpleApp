import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { FONTS } from '../../constants'

export default function ChangePassword() {
  return (
<ScrollView >
    <View style = {{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red"
    }}>
    <View style={{height: 200, justifyContent: 'center', alignContent: 'center'}}>
        <Text style = {{
        ...FONTS.h1
    }}>CHANGE PASSWORD</Text>
    </View>
    
     <View>
         <TextInput placeholder='Enter password'></TextInput>
     </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})