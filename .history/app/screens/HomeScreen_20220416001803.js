import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import NavBar from '../components/NavBar';
const HomeScreen = ({navigation}) => {
  return (
    <View>
     <NavBar/>
    </View>
  );
};
const styles = StyleSheet.create({
  textHome: {
    fontSize: 50,
    color: 'red',
  },
});
export default HomeScreen;