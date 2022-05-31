import { Text, StyleSheet, ScrollView } from 'react-native'
import { SIZES } from '../constants/theme';
import React from 'react'

const GuideToUseMantraText = () => {
    return (<ScrollView
        height={
            SIZES.androidHeightWithStatusBar.window -
            SIZES.androidHeightWithStatusBar.bottomTap -
            SIZES.androidHeightWithStatusBar.statusBar -
            10
        }
    >
        <Text style={styles.modalText}>
            fdadsfsdfdsfsdfdsfdsfdsf
        </Text>
    </ScrollView>);
}

const styles = StyleSheet.create({
    modalText: {
        marginBottom: -30,
        textAlign: "justify",
    },
})

export default GuideToUseMantraText;