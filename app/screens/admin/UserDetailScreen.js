import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image, TextInput
} from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constants';
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { updateDoc, doc } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
const avatarSize = 150;

const UserDetailScreen = ({ route, navigation }) => {
    const item = route.params.item;
    const [image, setImage] = useState(item.user_image);
    const [username, setUsername] = useState(item.username);
    const [disable, setDisable] = useState(item.disable);
    const [editUsername, setEditUsername] = useState(false);
    const storage = getStorage();
    //const [hasPermission, setHasPermission] = useState(null);
    const storageRef = ref(storage, "user_image/user" + item.id + ".jpg");
    const pickImage = async () => {
        //No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        //console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);

            //convert image to array of bytes
            const img = await fetch(result.uri);
            const bytes = await img.blob();
            const uploadImage = uploadBytesResumable(storageRef, bytes);
            uploadImage.then((snapshot) => {
                console.log('Uploaded a blob or file!');
                //Get url after upload image for user
                getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
                    updateCurrentUserWithImage(downloadURL);
                });
            });
        }
    };


    //METHOD FOR FIRESTORE
    //Update user with username
    const updateCurrentUserWithUsername = async () => {
        const userRef = doc(db, "users", "user" + item.id);

        // Remove the 'capital' field from the document
        await updateDoc(userRef, {
            username: username
        });
        alert("Edit username successfully!");
    };
    //Update user with image
    const updateCurrentUserWithImage = async (imageLink) => {
        const userRef = doc(db, "users", "user" + item.id);

        // Remove the 'capital' field from the document
        await updateDoc(userRef, {
            user_image: imageLink
        });
    };
    //Enable/Disable user
    const disableEnableUser = async () => {
        const userRef = doc(db, "users", "user" + item.id);

        // Remove the 'capital' field from the document
        await updateDoc(userRef, {
            disable: !disable
        });
        setDisable(!disable)
    };
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.avatarView}>
                <Image
                    style={styles.avatar}
                    source={image ? { uri: image } : image}
                />
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        bottom: 20,
                        right: 0,
                    }}
                    onPress={pickImage}
                >
                    <FontAwesome name="camera" size={SIZES.h2} />
                </TouchableOpacity>
            </View>
            <View style={styles.infoSection}>
                <Text style={[styles.content, { width: "33%", fontWeight: 'bold' }]}>Username : </Text>
                <View style={styles.textInputView}>
                    <TextInput
                        multiline={true}
                        style={styles.textInput}
                        //value={User.currentUser.email}
                        value={username}
                        onChangeText={(text) => {
                            setUsername(text);
                            setEditUsername(true);
                        }}
                        // onBlur={() => {
                        //   setEditStatus(true);
                        // }}
                        returnKeyType="done"
                    />
                </View>
            </View>
            <View style={styles.infoSection}>
                <Text style={[styles.content, { width: "33%", fontWeight: 'bold' }]}>Email : </Text>
                <View style={styles.textInputView}>
                    <Text style={styles.text}>{item.email}</Text>
                </View>
            </View>
            <View style={styles.infoSection}>
                <Text style={[styles.content, { width: "33%", fontWeight: 'bold' }]}>Created at : </Text>
                <View style={styles.textInputView}>
                    <Text style={styles.text}>{item.created_at}</Text>
                </View>
            </View>
            <View style={styles.infoSectionForDisable}>
                <Text style={[styles.content, { fontWeight: 'bold' }]}>{disable?"That user was disable" : "That user was not disable"}</Text>
            </View>
            <View style={styles.btnSection}>
                <TouchableOpacity onPress={disableEnableUser}>
                    <View style={{backgroundColor: '#072136', paddingHorizontal: 15, borderRadius: 10, paddingVertical: 12}}>
                        <Text style={{color:'white', fontSize: 18}}>{disable ? "Enable User" : "Disable User"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity disabled={!editUsername}
                onPress={() => {
                    updateCurrentUserWithUsername();
                    setEditUsername(false);
                }}
                >
                    <View style={{backgroundColor: editUsername ? '#0b3a04' : 'gray', paddingHorizontal: 15, borderRadius: 10, paddingVertical: 12}}>
                        <Text style={{color:'white', fontSize: 18}}>
                            Edit Username
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        ...FONTS.body3,
    },
    avatarView: { height: 200, justifyContent: "center" },
    avatar: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize / 2,
    },
    infoSection: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        // backgroundColor: "red",
        justifyContent: "center",
    },
    infoSectionForDisable: {
        flexDirection: "row",
        width: "90%",
        // backgroundColor: "red",
        justifyContent: "flex-start",
    },
    btnSection: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        // backgroundColor: "red",
        justifyContent: 'space-around',
        marginTop: 10  
    },
    textInputView: {
        paddingVertical: 5,
        // paddingHorizontal: 20,
        //backgroundColor: COLORS.lightGray,
        width: "67%",
    },
    text: {
        fontFamily: FONTS.body3.fontFamily,
        lineHeight: FONTS.body3.lineHeight,
        fontSize: SIZES.androidHeightWithStatusBar.window * 0.023,
        width: "120%",
        padding: 5,
        color: 'black'
        //backgroundColor: "green"
    },
    textInput: {
        fontFamily: FONTS.body3.fontFamily,
        lineHeight: FONTS.body3.lineHeight,
        fontSize: SIZES.androidHeightWithStatusBar.window * 0.023,
        width: "100%",
        padding: 5,
        color: 'black',
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        color: COLORS.black,
    },
    btn: {
        flexDirection: "row",
        backgroundColor: COLORS.purple,
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",

        width: "80%",
    },
    changePwdBtn: {
        justifyContent: "space-between",
    },
    btnDone: {
        justifyContent: "center",
    },
});
export default UserDetailScreen;