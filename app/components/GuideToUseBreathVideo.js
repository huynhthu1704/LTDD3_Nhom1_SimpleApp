import { StyleSheet, ScrollView } from 'react-native'
import Video from 'react-native-video';
import guidetousebreath from '../../assets/video/guidetousebreath.mp4'
import { SIZES } from '../constants/theme';
import React from 'react'

const GuideToUseBreathVideo = () => {
    return (<ScrollView
        height={
            SIZES.androidHeightWithStatusBar.window -
            SIZES.androidHeightWithStatusBar.bottomTap -
            SIZES.androidHeightWithStatusBar.statusBar -
            10
        }
    >
        {/* <Video
            source={{ url: 'http://link-to-your-video.mp4'}}                  // the video file
            paused={false}                  // make it start    
            style={{width: 50, height: 50}}
            repeat={true}                   // make it a loop
        /> */}
    </ScrollView>);
}

const styles = StyleSheet.create({
})

export default GuideToUseBreathVideo;