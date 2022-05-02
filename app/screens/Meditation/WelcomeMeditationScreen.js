/*Author: Pham Van Thanh
  Date: 04/21/2022
*/
import { StyleSheet, Text, View, ImageBackground, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import { welcomeMeditationBackground } from '../../constants/images'
import { COLORS, FONTS } from '../../constants/theme';
import React from 'react'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const { width, height } = Dimensions.get("window");
const data = {
  meditation: "Meditation",
  title: "Train your mind to focus",
  content: "Meditation keeps you from being too attached to a specific view of reality and allows you to forgive your own tendencies towards self-judgment or self-recrimination",
}

export default function WelcomeMeditationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#002142"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <ImageBackground style={styles.background} source={welcomeMeditationBackground}>
        <Text style={styles.meditation}>{data.meditation}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.content}>{data.content}</Text>
        <TouchableOpacity
          style={styles.gettingStarted}
          onPress={() => {
            navigation.navigate('MindfulnessOfBreathing')
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              Get started
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            {">>"}
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width,
    height
  },
  meditation: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    //fontSize: 30,
    marginTop: 30,
    ...FONTS.h1
  },
  title: {
    textAlign: 'center',
    color: '#82a2d5',
    marginTop: 15,
    //fontSize: 20
    ...FONTS.h3
  },
  content: {
    textAlign: 'justify',
    marginTop: 450,
    color: '#82a2d5',
    paddingHorizontal: 40,
    //fontSize: 17
    ...FONTS.body3
  },
  gettingStarted: {
    backgroundColor: '#4676c3',
    paddingHorizontal: 20,
    marginTop: 20,
    paddingVertical: 7,
  }
})