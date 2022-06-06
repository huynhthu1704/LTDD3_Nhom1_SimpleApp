import React, {useEffect} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native';
import { authentication } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit';
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { db } from '../../firebase/firebase';

export default StatisticalScreen = ({ navigation }) => {
    var allUser = null;
    //PROPERTIES
    const chartConfig = {
        backgroundColor: '#1cc910',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
        },
    };
    const screenWidth = Dimensions.get("window").width - 20;
    const data = {
        labels: ["July", "Aug", "Sepr", "Oct", "Nov", "Dec"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };
    const graphStyle = {
        marginVertical: 8,
        borderRadius: 16,
    };

    ///METHOD
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
    //Get all users from firestore
    const getAllUsers = async () => {
        const usersCol = query(collection(db, "users"), where("role", "==", 1));
        const userSnapshot = await getDocs(usersCol);
        const userList = userSnapshot.docs.map(doc => doc.data());
        allUser = userList;
         
    };

    //useEffect to get all user
    useEffect(() => {
        getAllUsers();
    }, []);
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View>
                    <LineChart
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }]
                        }}
                        width={Dimensions.get('window').width - 20} // from react-native
                        height={320}
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#fb8c00',
                            backgroundGradientTo: '#ffa726',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                    <Text>
                        Number of registered users from January to June
                    </Text>
                </View>
                <View>
                    <BarChart
                        style={graphStyle}
                        data={data}
                        width={screenWidth}
                        height={320}
                        yAxisLabel="$"
                        chartConfig={chartConfig}
                    />
                </View>
                <Button
                    title='Logout'
                    style={{ width: 20 }}
                    onPress={() => {
                        SignOutUser();
                        navigation.navigate("User");
                    }}
                />
            </View>
        </ScrollView>
    );
}
