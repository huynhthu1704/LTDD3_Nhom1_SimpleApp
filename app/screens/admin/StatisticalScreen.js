import React, { useEffect, useState } from 'react';
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
    const [mo1, setMo1] = useState(0);
    const [mo2, setMo2] = useState(0);
    const [mo3, setMo3] = useState(0);
    const [mo4, setMo4] = useState(0);
    const [mo5, setMo5] = useState(0);
    const [mo6, setMo6] = useState(0);
    const [mo7, setMo7] = useState(0);
    const [mo8, setMo8] = useState(0);
    const [mo9, setMo9] = useState(0);
    const [mo10, setMo10] = useState(0);
    const [mo11, setMo11] = useState(0);
    const [mo12, setMo12] = useState(0);
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
                data: [mo7, mo8, mo9, mo10, mo11, mo12]
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
        var arrayMonth = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const usersCol = query(collection(db, "users"), where("role", "==", 1));
        const userSnapshot = await getDocs(usersCol);
        const userList = userSnapshot.docs.map(doc => doc.data());
        userList.forEach((item) => {
            const createdatArray = item.created_at.split("/");
            switch (createdatArray[0]) {
                case "1":
                    arrayMonth[0]++;
                    break;
                case "2":
                    arrayMonth[1]++;
                    break;
                case "3":
                    arrayMonth[2]++;
                    break;
                case "4":
                    arrayMonth[3]++;
                    break;
                case "5":
                    arrayMonth[4]++;
                    break;
                case "6": 
                    arrayMonth[5]++;
                    break;
                case "7":
                    arrayMonth[6]++;
                    break;
                case "8":
                    arrayMonth[7]++;
                    break;
                case "9":
                    arrayMonth[8]++;
                    break;
                case "10":
                    arrayMonth[9]++;
                    break;
                case "11":
                    arrayMonth[10]++;
                    break;
                case "12":
                    arrayMonth[11]++;
                    break;

                default:
                    break;
            }
        })
        for (let index = 0; index < 12; index++) {
            const element = arrayMonth[index];
            switch (index) {
                case 0:
                    setMo1(element);
                    break;
                case 1:
                    setMo2(element);
                    break;
                case 2:
                    setMo3(element);
                    break;
                case 3:
                    setMo4(element);
                    break;
                case 4:
                    setMo5(element);
                    break;
                case 5:
                    setMo6(element);
                    break;
                case 6:
                    setMo7(element);
                    break;
                case 7:
                    setMo8(element);
                    break;
                case 8:
                    setMo9(element);
                    break;
                case 9:
                    setMo10(element);
                    break;
                case 10:
                    setMo11(element);
                    break;
                case 11:
                    setMo12(element);
                    break;
                default:
                    break;
            }
        }
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
                                    mo1,
                                    mo2,
                                    mo3,
                                    mo4,
                                    mo5,
                                    mo6
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
                        height={300}
                        yAxisLabel=""
                        chartConfig={chartConfig}
                    />
                    <Text>
                        Number of registered users from July to December
                    </Text>
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
