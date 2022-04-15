import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import NavBar from '../components/NavBar';
import { COLORS } from '../constants/theme';

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <NavBar navigation = {navigation} backgroundColor = {COLORS.black}/>
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