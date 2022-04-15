import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const App = () => {
  return (
    <View>
    <Text>Hello</Text>
      <Text style={}>App</Text>
      <AntDesign name="caretright" size={24} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "Poppins-ExtraBold",
  },
});
export default App;

