/*Author: Pham Van Thanh
  Date: 04/21/2022
*/
import { StyleSheet, Text, View, StatusBar, Pressable, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Gradient from '../../components/Gradient';
import { FONTS, COLORS } from '../../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useReducer } from 'react';


const data = {
  title: "Mindfulness of Breathing",
  useBreath: "Use breath",
  useMantra: "Use mantra",
  chooseMs: "Choose music",
  setT: "Set time",
  guideBreath: "Guide to use breath",
  guideMantra: "Guide to use mantra",
  gtS: "Getting Started",
  intro: "Introduce"
}

const reducer = (time, action) => {
  switch (action.unitChange) {
    case 'hours':
      return { ...time, hours: action.amount };
    case 'minutes':
      return { ...time, minutes: action.amount };
    case 'seconds':
      return { ...time, seconds: action.amount };
  }
}

export default MindfulnessOfBreathing = () => {
  const [useBreathActive, setUseBreathActive] = useState(true);
  const [time, runTime] = useReducer(reducer, {
    hours: "0",
    minutes: "30",
    seconds: "00"
  });
  const textToInt = (text) => {
    if (text.length == 2 && text[0] == '0') {
      return eval(text[1]);
    } else {
      return eval(text);
    }
  }
  //Func change text for hours
  const onChangeTimes = (text, unit) => {
    if (text.length != 0) {
      let newText = '';
      let numbers = '0123456789';
      for (var i = 0; i < text.length; i++) {
        if (numbers.indexOf(text[i]) > -1) {
          newText = newText + text[i];
        }
        else {
          runTime({ unitChange: unit, amount: newText })
          return;
        }
      }
    }
    if (text.length <= 2) {
      runTime({ unitChange: unit, amount: text })
    }
  };
  //Func after submit
  const submit = (unit, value, show) => {
    var text = value.nativeEvent.text;
    if (text.length == 0) {
      //Neu chua nhap ma submit thi se bang show
      runTime({ unitChange: unit, amount: show })
    }
    if (text.length == 2) {
      //08 => 8
      if (text[0] == '0') {
        runTime({ unitChange: unit, amount: text[1] })
      }
      if (unit != 'hours') {
        let value = eval(text);
        if (value > 59) {
          if (unit == 'minutes') {
            //Increase hours 1 unit
            runTime({ unitChange: 'hours', amount: (textToInt(time.hours) + 1) + "" })
            value = value - 60;
            //Decrease minutes 60 unit and show without 0 first
            runTime({ unitChange: unit, amount: (value < 10 ? "0" + value : value + "") })
          } else if (unit == 'seconds') {
            let minute = textToInt(time.minutes) + 1;
            if (minute < 60) {
              runTime({ unitChange: 'minutes', amount: minute + "" });
              value = value - 60;
              runTime({ unitChange: unit, amount: (value < 10 ? "0" + value : value + "") });
            } else {
              //Increase hours 1 unit
              runTime({ unitChange: 'hours', amount: (textToInt(time.hours) + 1) + "" });
              minute = minute - 60;
              //Decrease minutes 60 unit and show without 0 first
              runTime({ unitChange: 'minutes', amount: (minute < 10 ? "0" + minute : minute + "") })
              //Show seconds without 0 first
              runTime({ unitChange: unit, amount: (value < 10 ? "0" + value : value + "") })
            }
          }
        }
      }
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='#14e1ae'
        barStyle="dark-content"
      />
      <LinearGradient
        //Background Linear Gradient
        colors={Gradient.MindfulnessOfBreathing}
        style={{ flex: 1 }}
      >
        {/* Title */}
        <Text style={styles.title}>{data.title}</Text>
        {/* Two button to use breath or mantra */}
        <View style={styles.btnView}>
          <Pressable style={{ ...styles.press, backgroundColor: (!useBreathActive?'#19be34':'#3da34e'), borderColor: (!useBreathActive?'black':'#235d2c')}} disabled={useBreathActive} onPress={() => {
            setUseBreathActive(true);
          }}>
            <Text style={{ ...styles.btnTitle, color: (!useBreathActive?'black':'#235d2c') }}>{data.useBreath}</Text>
          </Pressable>
          <Pressable style={{ ...styles.press, backgroundColor: (useBreathActive?'#ff4a04':'#ff480087'), borderColor: (useBreathActive?'black':'#235d2c')}} disabled={!useBreathActive} onPress={() => {
            setUseBreathActive(false)
          }}>
            <Text style={{ ...styles.btnTitle, color: (useBreathActive?'black':'#235d2c') }}>{data.useMantra}</Text>
          </Pressable>
        </View>
        {/* Choose music */}
        <View style={{ marginTop: 30 }}>
          <Text style={styles.titleSmall}>{data.chooseMs}</Text>
          <Pressable>
            <View style={{...styles.pressChoose, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
              <Text style={styles.yourChoose}>
                None
              </Text>
              <Text style={styles.yourChoose}>
               {">>"}
              </Text>
            </View>
          </Pressable>
        </View>
        {/* Set time */}
        <View style={{ marginTop: 30 }}>
          <Text style={styles.titleSmall}>{data.setT}</Text>
          <View style={{ ...styles.chooseTime, flexDirection: 'row', justifyContent: 'center', padding: 10, marginHorizontal: 100, borderRadius: 20}}>
            {/* Hours */}
            <TextInput
              keyboardType='numeric'
              style={styles.min}
              value={time.hours + ""}
              onChangeText={(text) => {
                onChangeTimes(text, 'hours')
              }}
              onSubmitEditing={(value) => {
                submit('hours', value, '0');
              }}
            />
            <Text style={{ ...styles.min, marginHorizontal: 5 }}>
              :
            </Text>
            {/* Minutes */}
            <TextInput
              keyboardType='numeric'
              style={styles.min}
              value={time.minutes + ""}
              onChangeText={(text) => {
                onChangeTimes(text, 'minutes');
              }}
              onSubmitEditing={(value) => {
                submit('minutes', value, '00')
              }}
            />
            <Text style={{ ...styles.min, marginHorizontal: 5 }}>
              :
            </Text>
            {/* Seconds */}
            <TextInput
              keyboardType='numeric'
              style={styles.min}
              value={time.seconds + ""}
              onChangeText={(text) => {
                onChangeTimes(text, 'seconds');
              }}
              onSubmitEditing={(value) => {
                submit('seconds', value, '00')
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.titleSmall}>{useBreathActive? data.guideBreath : data.guideMantra}</Text>
          <View style={{...styles.btnView, backgroundColor: '#a3f018', padding: 10, marginHorizontal: 25, borderRadius: 15}}>
            <Pressable style={{ ...styles.press, backgroundColor: '#393744' }} onPress={() => {
              console.log(6);
            }}>
              <Text style={{ ...styles.btnTitle, color: 'white' }}>Text</Text>
            </Pressable>
            <Pressable style={{ ...styles.press, backgroundColor: '#19be34' }} onPress={() => {
              console.log(6);
            }}>
              <Text style={{ ...styles.btnTitle, color: 'black' }}>Video</Text>
            </Pressable>
          </View>
        </View>
        {/* Button start */}
        <View style={{marginTop: 60}}>
        <Pressable style={styles.btnStart} onPress={() => {
              console.log(6);
            }}>
              <Text style={{ ...styles.btnTitle, color: 'black', textAlign: 'center' }}>{data.gtS}</Text>
            </Pressable>
        </View>
        <View>
            <Icon name='info' size={15} color="#14e1ae"/>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: FONTS.h1.fontFamily,
    lineHeight: FONTS.h1.lineHeight,
    fontSize: 28,
    color: COLORS.black,
    paddingHorizontal: 8
  },
  btnView: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  press: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderStyle: 'solid',
    borderWidth: 1.5
  },
  btnTitle: {
    fontFamily: FONTS.h1.fontFamily,
    fontSize: 20
  },
  titleSmall: {
    marginLeft: 25,
    color: "white",
    ...FONTS.h3
  },
  pressChoose: {
    backgroundColor: '#a3f018',
    paddingVertical: 10,
    paddingLeft: 25
  },
  yourChoose: {
    ...FONTS.body3,
    fontWeight: 'bold'
  },
  min: {
    ...FONTS.body1,
    fontWeight: 'bold'
  },
  chooseTime: {
    backgroundColor: '#a3f018',
    paddingVertical: 20,
  },
  btnStart: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1.5,
    backgroundColor: '#c4c4c4',
    marginHorizontal: 25
  },
})