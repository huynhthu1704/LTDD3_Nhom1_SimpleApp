import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { COLORS } from '../constants/theme';

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text>Home</Text>
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