import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const UserItem = ({ item }) => {
    const items = [
        {
            title: "Username:",
            value: item.username
        },
        {
            title: "Email:",
            value: item.email
        },
        {
            title: "Created at:",
            value: item.created_at
        },
        {
            title: "Role:",
            value: item.role == 1 ? "User" : "Admin"
        },
        {
            title: "Disable:",
            value: item.disable ? "true" : "false"
        },
    ];
    return (
        <View style={styles.itemContainer}>
            <Image
                style={{ width: 80, height: 130, marginRight: 20, alignSelf: 'center' }}
                source={{
                    uri: item.user_image,
                }}
            />
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#a10707' }}>ID: user{item.id}</Text>
                {items.map((item, i) => {
                    return (
                        <View key={String(i)} style={styles.viewtext}>
                            <Text style={styles.items}>{item.title}</Text>
                            <Text style={styles.values}>{item.value}</Text>
                        </View>
                    );
                })}
                {/* <View style={styles.viewtext}>
                    <Text style={styles.items}>Username:</Text>
                    <Text style={styles.values}>{item.username}</Text>
                </View>
                <View style={styles.viewtext}>
                    <Text style={styles.items}>Email:</Text>
                    <Text style={styles.values}>{item.email}</Text>
                </View> */}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#baffbf',
        flexDirection: 'row',
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'space-around',
    },
    viewtext: {
        flexDirection: 'row',
        marginVertical: 2
    },
    items: {
        fontWeight: 'bold',
        width: '33%'
    },
    values: {
        width: '67%'
    }
});
export default UserItem;