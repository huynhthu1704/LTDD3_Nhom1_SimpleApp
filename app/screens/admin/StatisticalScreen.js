import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { authentication } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import MyBarChart from '../../components/BarChartForAdmin';

const StatisticalScreen = () => {
    //Sign out user
    const SignOutUser = () => {
        signOut(authentication)
            .then((re) => {
                alert("Log out successfully");
                navigation.navigate("User");
            })
            .catch((re) => {
                console.log(re);
            })
    };
    return (
        <View>
            <MyBarChart />
            {/* <Button
                title='Logout'
                style={{ width: 20 }}
                onPress={() => {
                    SignOutUser();
                    navigation.navigate("User");
                }}
            /> */}
        </View>
    );
}

export default StatisticalScreen;