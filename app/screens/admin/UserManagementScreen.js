import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
} from 'react-native';
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from '../../firebase/firebase';
import { authentication } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import UserItem from '../../components/UserItem';

const UserManagementScreen = ({navigation}) => {
    //PROPERTIES:
    const [users, setUsers] = useState(null);

    //METHOD
    //Get all users from firestore
    const getLastUser = async () => {
        const usersCol = collection(db, 'users');
        const userSnapshot = await getDocs(usersCol);
        const userList = userSnapshot.docs.map(doc => doc.data());
        setUsers(userList);
    }

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
        <SafeAreaView>
            <ScrollView horizontal={false} style={{ height: 800, marginTop: 10 }}>
                <Button
                    title='Logout'
                    style={{ width: 20 }}
                    onPress={() => {
                        SignOutUser();
                        navigation.navigate("User");
                    }}
                />
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.email}
                    renderItem={({ item }) => {
                        <TouchableOpacity
                            onPress={() => {
                                alert(item.email);
                            }}>
                            <UserItem item={item} />
                        </TouchableOpacity>
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default UserManagementScreen;