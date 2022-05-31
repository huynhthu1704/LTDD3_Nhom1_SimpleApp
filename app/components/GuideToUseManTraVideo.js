import { StyleSheet, ScrollView, View, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import guidetousebreath from '../../assets/video/guidetousebreath.mp4';
import { SIZES } from '../constants/theme';
import React from 'react';

const GuideToUseMantraVideo = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (<ScrollView
        height={
            SIZES.androidHeightWithStatusBar.device * 0.27}
    >
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
            <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
            />
        </View>
    </ScrollView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default GuideToUseMantraVideo;