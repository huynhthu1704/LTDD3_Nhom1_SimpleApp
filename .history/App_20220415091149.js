import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  return (
    <View>
      <Text style={{fontSize: 20,fontFamily: 'Poppins-ExtraBold'}}>App</Text>
      <AntDesign name="caretright" size={24} color="blue" />
    </View>
  )
}