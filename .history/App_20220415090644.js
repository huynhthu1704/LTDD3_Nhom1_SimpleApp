import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Poppins from "./assets/fonts/PoppinsSemiBold600.ttf";
export default function App() {
  return (
    <View>
      <Text style={{fontSize= 20,fontFamily: "PoppinsSemiBold600"}}>App</Text>
      <AntDesign name="caretright" size={24} color="blue" />
    </View>
  )
}