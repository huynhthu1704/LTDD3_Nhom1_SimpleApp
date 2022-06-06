import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
} from 'react-native';
import { db } from '../../firebase/firebase';
import UserItem from '../../components/UserItem';
import { FontAwesome } from "@expo/vector-icons";
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { async } from "@firebase/util";
import { SIZES } from '../../constants';

const UserManagementScreen = ({ navigation }) => {
    //PROPERTIES:
    const [users, setUsers] = useState(null);

    //METHOD
    //Get all users from firestore
    const getAllUsers = async () => {
        const usersCol = query(collection(db, "users"), where("role", "==", 1));
        const userSnapshot = await getDocs(usersCol);
        const userList = userSnapshot.docs.map(doc => doc.data());
        setUsers(userList);
    };

    //useEffect to get all user
    useEffect(() => {
        getAllUsers();
    }, []);
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Text style={styles.qty}>Quantity: {users?.length}</Text>
                <TouchableOpacity style={{ margin: 5 }} onPress={getAllUsers}>
                    <FontAwesome name="refresh" size={25} />
                </TouchableOpacity>
            </View>
            <View style={{height: SIZES.androidHeightWithStatusBar.window * 0.9}}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.email}
                renderItem={({ item }) => {
                    return (<TouchableOpacity
                        onPress={() => {
                            navigation.navigate("UserDetails", {
                                item: item
                            });
                        }}>

                        <UserItem item={item} />
                    </TouchableOpacity>)
                }}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    qty: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10
    }
})
export default UserManagementScreen;