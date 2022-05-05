/*Author: Pham Van Thanh
  Date: 04/21/2022
*/
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity, Platform } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import React from 'react'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import sizesDiffer from 'react-native/Libraries/Utilities/differ/sizesDiffer';

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
      <ImageBackground style={styles.background} source={require('../../../assets/images/welcometomeditaion.jpg')}>
        <Text style={styles.meditation}>{data.meditation}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.content}>{data.content}</Text>
        <TouchableOpacity
          style={styles.gettingStarted}
          onPress={() => {
            navigation.navigate('MindfulnessOfBreathing')
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.gettingStartedText}>
              Get started
            </Text>
            <Text style={styles.gettingStartedText}>
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
    width: SIZES.width,
    height: (Platform.OS === 'ios') ? SIZES.androidHeightWithStatusBar.window - SIZES.androidHeightWithStatusBar.bottomTap : SIZES.androidHeightWithStatusBar.window - SIZES.androidHeightWithStatusBar.bottomTap
  },
  meditation: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    //fontSize: 30,
    marginTop: SIZES.androidHeightWithStatusBar.statusBar,
    fontFamily: FONTS.h1.fontFamily,
    fontSize: (Platform.OS === 'ios') ? SIZES.androidHeightWithStatusBar.window * 0.03 : SIZES.androidHeightWithStatusBar.window * 0.03
  },
  title: {
    textAlign: 'center',
    color: '#82a2d5',
    marginTop: (Platform.OS === 'ios') ? SIZES.androidHeightWithStatusBar.window * 0.02 : SIZES.androidHeightWithStatusBar.window * 0.02,
    //fontSize: 20
    fontFamily: FONTS.h3.fontFamily,
    fontSize: (Platform.OS === 'ios') ? SIZES.androidHeightWithStatusBar.window * 0.02 : SIZES.androidHeightWithStatusBar.window * 0.02
  },
  content: {
    textAlign: 'justify',
    marginTop: SIZES.androidHeightWithStatusBar.window / 2,
    color: '#82a2d5',
    paddingHorizontal: SIZES.androidWidth.device * 0.08,
    //fontSize: 17
    fontFamily: FONTS.body3.fontFamily,
    fontSize: SIZES.androidHeightWithStatusBar.window * 0.02
  },
  gettingStarted: {
    backgroundColor: '#4676c3',
    paddingHorizontal: SIZES.androidWidth.device * 0.08,
    marginTop: SIZES.androidHeightWithStatusBar.window * 0.025,
    paddingVertical: SIZES.androidHeightWithStatusBar.window * 0.010,
  },
  gettingStartedText: {
    color: COLORS.white, 
    fontFamily: FONTS.h3.fontFamily, 
    fontSize: SIZES.androidHeightWithStatusBar.window * 0.022
  }
})