import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const UserItem = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Image
                style={{ width: 60, height: 90, marginRight: 20, alignSelf: 'center' }}
                source={{
                    uri: item.user_image,
                }}
            />
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>ID: user{item.id}</Text>
                <Text>Name: {item.username}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'space-around',
    },
});
export default UserItem;