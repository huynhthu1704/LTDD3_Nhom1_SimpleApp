import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Sleeping from './app/screens/Sleeping';

export default function App() {
  return (
    <View style={styles.container}>
    <SafeAreaView>
    <StatusBar backgroundColor="#000" style="dark-content" />
    <Sleeping/>
     <Text>HelloHello</Text>
    </SafeAreaView>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
