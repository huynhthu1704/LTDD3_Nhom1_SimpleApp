import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
//import PoppinsSemiBold from "./assets/fonts/PoppinsSemiBold";
const App = () => {
  return (
    <View>
    <Text>Hello</Text>
    <Text>Hi</Text>
      <Text style={styles.text}>App</Text>
      <AntDesign name="caretright" size={24} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: PoppinsSemiBold,
  },
});
export default App;

