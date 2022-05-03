/*Author: Pham Van Thanh
  Date: 04/21/2022
*/
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Gradient from "../../components/Gradient";
import { FONTS, COLORS, SIZES } from "../../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFeather from "react-native-vector-icons/Feather";
import React, { useState, useReducer } from "react";

const data = {
  title: "Mindfulness of Breathing",
  useBreath: "Use breath",
  useMantra: "Use mantra",
  chooseMs: "Choose music",
  setT: "Set time",
  guideBreath: "Guide to use breath",
  guideMantra: "Guide to use mantra",
  gtS: "Getting Started",
  intro: "Introduce",
};

const reducer = (time, action) => {
  switch (action.unitChange) {
    case "hours":
      return { ...time, hours: action.amount };
    case "minutes":
      return { ...time, minutes: action.amount };
    case "seconds":
      return { ...time, seconds: action.amount };
  }
};

export default MindfulnessOfBreathing = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [useBreathActive, setUseBreathActive] = useState(true);
  const [time, runTime] = useReducer(reducer, {
    hours: "0",
    minutes: "30",
    seconds: "00",
  });
  const textToInt = (text) => {
    if (text.length == 2 && text[0] == "0") {
      return eval(text[1]);
    } else {
      return eval(text);
    }
  };
  //Func change text for hours
  const onChangeTimes = (text, unit) => {
    if (text.length != 0) {
      let newText = "";
      let numbers = "0123456789";
      for (var i = 0; i < text.length; i++) {
        if (numbers.indexOf(text[i]) > -1) {
          newText = newText + text[i];
        } else {
          runTime({ unitChange: unit, amount: newText });
          return;
        }
      }
    }
    if (text.length <= 2) {
      runTime({ unitChange: unit, amount: text });
    }
  };
  //Func after submit
  const submit = (unit, value, show) => {
    var text = value.nativeEvent.text;
    if (text.length == 0) {
      //Neu chua nhap ma submit thi se bang show
      runTime({ unitChange: unit, amount: show });
    } else if (text.length == 2) {
      //08 => 8
      if (text[0] == "0") {
        runTime({ unitChange: unit, amount: text[1] });
      }
      if (unit != "hours") {
        let value = -1;
        if (text[0] != "0") {
          value = eval(text);
        } else {
          value = eval(text[1]);
        }
        if (value > 59) {
          if (unit == "minutes") {
            //Increase hours 1 unit
            runTime({
              unitChange: "hours",
              amount: textToInt(time.hours) + 1 + "",
            });
            value = value - 60;
            //Decrease minutes 60 unit and show without 0 first
            runTime({
              unitChange: unit,
              amount: value < 10 ? "0" + value : value + "",
            });
          } else if (unit == "seconds") {
            let minute = textToInt(time.minutes) + 1;
            if (minute < 60) {
              runTime({
                unitChange: "minutes",
                amount: minute < 10 ? "0" + minute : minute + "",
              });
              value = value - 60;
              runTime({
                unitChange: unit,
                amount: value < 10 ? "0" + value : value + "",
              });
            } else {
              value = value - 60
              //Increase hours 1 unit
              runTime({
                unitChange: "hours",
                amount: textToInt(time.hours) + 1 + "",
              });
              minute = minute - 59;
              //Decrease minutes 60 unit and show without 0 first
              runTime({ unitChange: "minutes", amount: "00" });
              //Show seconds without 0 first
              runTime({
                unitChange: unit,
                amount: value < 10 ? "0" + value : value + "",
              });
            }
          }
        } else if (value < 10) {
          runTime({ unitChange: unit, amount: "0" + value });
        }
      }
    } else if (text.length == 1) {
      if (unit == "minutes" || unit == "seconds") {
        runTime({ unitChange: unit, amount: "0" + text });
      }
    }
  };
  return (
    <View style={styles.container} blurType="light" blurAmount={30}>
      <StatusBar backgroundColor="#14e1ae" barStyle="dark-content" />
      <LinearGradient
        //Background Linear Gradient
        colors={Gradient.MindfulnessOfBreathing}
        style={{ flex: 1 }}
      >
        {/* Title */}
        <Text style={styles.title}>{data.title}</Text>
        {/* Two button to use breath or mantra */}
        <View style={styles.btnView}>
          <TouchableOpacity
            style={{
              ...styles.press,
              backgroundColor: !useBreathActive ? "#19be34" : "#3da34e",
              borderColor: !useBreathActive ? "black" : "#235d2c",
            }}
            disabled={useBreathActive}
            onPress={() => {
              setUseBreathActive(true);
            }}
          >
            <Text
              style={{
                ...styles.btnTitle,
                color: !useBreathActive ? "black" : "#235d2c",
              }}
            >
              {data.useBreath}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.press,
              backgroundColor: useBreathActive ? "#ff4a04" : "#ff480087",
              borderColor: useBreathActive ? "black" : "#235d2c",
            }}
            disabled={!useBreathActive}
            onPress={() => {
              setUseBreathActive(false);
            }}
          >
            <Text
              style={{
                ...styles.btnTitle,
                color: useBreathActive ? "black" : "#235d2c",
              }}
            >
              {data.useMantra}
            </Text>
          </TouchableOpacity>
        </View>
        {/* Choose music */}
        <View style={{ marginTop: 30 }}>
          <Text style={styles.titleSmall}>{data.chooseMs}</Text>
          <TouchableOpacity>
            <View
              style={{
                ...styles.pressChoose,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingRight: 15,
              }}
            >
              <Text style={styles.yourChoose}>None</Text>
              <Text style={styles.yourChoose}>{">>"}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Set time */}
        <View style={{ marginTop: 30 }}>
          <Text style={styles.titleSmall}>{data.setT}</Text>
          <View
            style={{
              ...styles.chooseTime,
              flexDirection: "row",
              justifyContent: "center",
              padding: 10,
              marginHorizontal: 25,
              borderRadius: 20,
            }}
          >
            {/* Hours */}
            <TextInput
              keyboardType="numeric"
              style={styles.min}
              value={time.hours + ""}
              onChangeText={(text) => {
                onChangeTimes(text, "hours");
              }}
              // onSubmitEditing={(value) => {
              //   submit('hours', value, '0');
              // }}
              onEndEditing={(value) => {
                submit("hours", value, "0");
              }}
            />
            <Text style={{ ...styles.min, marginHorizontal: 5 }}>:</Text>
            {/* Minutes */}
            <TextInput
              keyboardType="numeric"
              style={styles.min}
              value={time.minutes + ""}
              onChangeText={(text) => {
                onChangeTimes(text, "minutes");
              }}
              // onSubmitEditing={(value) => {
              //   submit('minutes', value, '00')
              // }}
              onEndEditing={(value) => {
                submit("minutes", value, "00");
              }}
            />
            <Text style={{ ...styles.min, marginHorizontal: 5 }}>:</Text>
            {/* Seconds */}
            <TextInput
              keyboardType="numeric"
              style={styles.min}
              value={time.seconds + ""}
              onChangeText={(text) => {
                onChangeTimes(text, "seconds");
              }}
              // onSubmitEditing={(value) => {
              //   submit('seconds', value, '00')
              // }}
              onEndEditing={(value) => {
                submit("seconds", value, "00");
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.titleSmall}>
            {useBreathActive ? data.guideBreath : data.guideMantra}
          </Text>
          <View
            style={{
              ...styles.btnView,
              backgroundColor: "#a3f018",
              padding: 10,
              marginHorizontal: 25,
              borderRadius: 15,
            }}
          >
            <TouchableOpacity
              style={{ ...styles.press, backgroundColor: "#393744" }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ ...styles.btnTitle, color: "white" }}>Text</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.press, backgroundColor: "#19be34" }}
              onPress={() => {
                console.log(6);
              }}
            >
              <Text style={{ ...styles.btnTitle, color: "black" }}>Video</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Button start */}
        <View style={{ marginTop: 60 }}>
          <TouchableOpacity
            style={styles.btnStart}
            onPress={() => {
              console.log(6);
            }}
          >
            <Text
              style={{
                ...styles.btnTitle,
                color: "black",
                textAlign: "center",
              }}
            >
              {data.gtS}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Tutorial");
            }}
          >
            <Text
              style={{
                color: "#14e1ae",
                fontFamily: FONTS.body1.fontFamily,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Introduce
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Tutorial");
            }}
          >
            <Icon
              name="info"
              size={25}
              color="#14e1ae"
              style={{
                textAlignVertical: "center",
                paddingLeft: 13,
                paddingRight: 10,
                paddingVertical: 3,
                marginLeft: 5,
                marginRight: 10,
                borderColor: "#14e1ae",
                borderWidth: 1,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {/* Modal for guide to text */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <View
            style={{
              marginTop: -10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textAlignVertical: "center",
                fontWeight: "bold",
                textTransform: "uppercase",
                ...FONTS.h2,
              }}
            >
              Guide to use Breath
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <IconFeather
                name="x-circle"
                size={35}
                color="gray"
                style={{ textAlign: "center" }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
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
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontFamily: FONTS.h1.fontFamily,
    lineHeight: FONTS.h1.lineHeight,
    fontSize: 28,
    color: COLORS.black,
    paddingHorizontal: 8,
  },
  btnView: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  press: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderStyle: "solid",
    borderWidth: 1.5,
  },
  btnTitle: {
    fontFamily: FONTS.h1.fontFamily,
    fontSize: 20,
  },
  titleSmall: {
    marginLeft: 25,
    color: "white",
    ...FONTS.h3,
  },
  pressChoose: {
    backgroundColor: "#a3f018",
    paddingVertical: 10,
    paddingLeft: 25,
    marginHorizontal: 25,
    borderRadius: 10
  },
  yourChoose: {
    ...FONTS.body3,
    fontWeight: "bold",
  },
  min: {
    fontFamily: FONTS.body1.fontFamily,
    fontSize: FONTS.body1.fontSize,
    fontWeight: "bold",
  },
  chooseTime: {
    backgroundColor: "#a3f018",
    paddingVertical: 20,
  },
  btnStart: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1.5,
    backgroundColor: "#c4c4c4",
    marginHorizontal: 25,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },
  button: {
    backgroundColor: "#ffffff00",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: -30,
    textAlign: "justify",
  },
});
