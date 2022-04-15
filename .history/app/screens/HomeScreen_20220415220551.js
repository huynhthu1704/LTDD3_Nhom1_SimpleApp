import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textHome}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Font')}
        title="Go testfont screen"
      />
      <Button
        onPress={() => navigation.navigate('Sleeping')}
        title="Go sleeping screen"
      />
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