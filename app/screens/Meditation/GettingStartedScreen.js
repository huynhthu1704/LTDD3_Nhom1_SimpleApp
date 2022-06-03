import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import { SIZES, FONTS } from '../../constants';
import React, { useEffect, useState } from 'react';
//import BackgroundTimer from 'react-native-background-timer';

export default function GettingStartedScreen({ route }) {
    const defaulRemainingTime = route.params;
    //const initialSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    const [remainingTime, setRemainingTime] = useState(defaulRemainingTime);
    return (
        <View>
            <StatusBar backgroundColor="black" barStyle="dark-content" />
            <ImageBackground style={styles.background} source={require('../../../assets/images/Profile/start.jpg')}>
                <Text style={styles.timer}>{remainingTime.hours} : {remainingTime.minutes} : {remainingTime.seconds}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        width: SIZES.width,
        height: (Platform.OS === 'ios') ? SIZES.androidHeightWithStatusBar.window : SIZES.androidHeightWithStatusBar.window,
        flex: 1,
        position: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    timer:{
        fontFamily: FONTS.body2.fontFamily,
        color: 'white',
        fontWeight:'bold',
        fontSize: SIZES.androidHeightWithStatusBar.window * 0.050,
        alignSelf: 'center'
    }
})