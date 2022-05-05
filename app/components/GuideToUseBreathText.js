import { Text, StyleSheet, ScrollView } from 'react-native'
import { SIZES } from '../constants/theme';
import React from 'react'

const GuideToUseBreathText = () => {
    return (<ScrollView
        height={
            SIZES.androidHeightWithStatusBar.window -
            SIZES.androidHeightWithStatusBar.bottomTap -
            SIZES.androidHeightWithStatusBar.statusBar -
            10
        }
    >
        <Text style={styles.modalText}>
            As your body settles and your eyes close, bring your awareness to
            your breathing. Notice the breath coming in, and the breath going
            out. Follow the breath with your awareness… follow the breath all
            the way in… and follow the breath all the way out… not trying to
            change it in any way. Just breathing in… and breathing out.
            Breathing in, feeling the breath as it passes through your
            nostrils… breathing out, feeling the breath as it leaves your
            nostrils. Keeping your awareness lightly and gently on your
            breath… breathing mindfully in the present moment. “Breathing in,
            I know I am breathing in… Breathing out, I know I am breathing
            out.” If thoughts come in…as they always do… acknowledge the
            thoughts, without judgment, and let them go… let them drift away
            like clouds floating across the sky… and bring your awareness back
            to your breath, back to your breathing… back to the present
            moment. “Breathing in… I know I am breathing in… Breathing out… I
            know I am breathing out…” Each time your attention moves away from
            the breath… distracted by a thought about something you have to
            remember to do perhaps… or maybe something that is bothering you
            or worrying you… notice the thought, acknowledge the thought, and
            then let it go… and bring your awareness back to your breath, back
            to the present moment. Letting your full awareness be on the
            breath… as it comes in… and as it goes out… noticing the familiar
            rhythm of the breath. “Breathing in, I calm my body… Breathing
            out, I smile…” When you bring your awareness to the breath in this
            way, you are connecting the mind and the body in the present
            moment. The word for breath and the word for spirit in many
            languages is the same. So bringing your awareness to your breath,
            connects mind, body and spirit in the present moment.“Dwelling in
            the present moment… I know this is a wonderful moment…” Continue
            to mindfully breathe in this way for as long as you like…
            following the breath all the way in… noticing the slight pause at
            the turning point as the in-breath becomes the out-breath… and
            following the breath all the way out… noticing the brief pause at
            the turning point as the out-breath becomes the in-breath… aware
            of the steady familiar rhythm of the breath. Continue for 10-15
            minutes if possible As we bring this meditation to an end, keeping
            your eyes closed for just a little while longer… take a moment to
            notice how you are feeling… your body… your mind… your spirit. If
            you like, offer gratitude for this time you have taken for
            yourself… to be quiet… to breathe.. and bring yourself back into
            balance. So slowly come back into the room… aware of your body in
            the chair… opening your eyes whenever you are ready.
        </Text>
    </ScrollView>);
}

const styles = StyleSheet.create({
    modalText: {
        marginBottom: -30,
        textAlign: "justify",
    },
})

export default GuideToUseBreathText;