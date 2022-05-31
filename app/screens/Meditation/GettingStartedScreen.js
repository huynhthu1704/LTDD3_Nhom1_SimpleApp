import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import { SIZES } from '../../constants';
import React, { useEffect, useState } from 'react';
//import BackgroundTimer from 'react-native-background-timer';

export default function GettingStartedScreen({ route }) {
    const { hours, minutes, seconds } = route.params;
    const initialSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    console.warn(initialSeconds);
    // const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
    // const [timerOn, setTimerOn] = useState(false);

    // useEffect(() => {
    //     if (timerOn) {
    //         startTimer();
    //     } else {
    //         BackgroundTimer.stopBackgroundTimer();
    //     }
    //     return () => {
    //         BackgroundTimer.stopBackgroundTimer();
    //     };
    // }, [timerOn]);
    return (
        <View>
            <StatusBar backgroundColor="black" barStyle="dark-content" />
            <ImageBackground style={styles.background} source={require('../../../assets/images/Profile/start.jpg')}>
                <Text style={{color: 'white'}}>
                    {initialSeconds}
                </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: SIZES.width,
        height: (Platform.OS === 'ios') ? SIZES.androidHeightWithStatusBar.window - SIZES.androidHeightWithStatusBar.bottomTap : SIZES.androidHeightWithStatusBar.window - SIZES.androidHeightWithStatusBar.bottomTap
    },
})