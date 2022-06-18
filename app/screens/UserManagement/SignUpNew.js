import React, { useRef, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import User from './UserData';
import { SIZES } from '../../constants';
import { authentication } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase";

const SignInScreen = ({ navigation }) => {
    const emailTextInput = useRef(null);
    const passwordTextInput = useRef(null);
    const confirmPasswordTextInput = useRef(null);
    const fullnameTextInput = useRef(null);
    var lastUser = null;
    const [data, setData] = React.useState({
        fullname: '',
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
        isValidFullname: true,
        isValidFullnameForStick: false
    });
    //useEffect to get last user to set id
    useEffect(() => {
        getLastUser();
    });
    ///METHOD CHECK TEXTINPUT
    const checkUserInfoAndSignUp = (fullname, email, password, confirmPassword) => {
        if (fullname[0] == ' ' || fullname[fullname.length - 1] == ' ') {
            alert("Your full name must not leading and trailing spaces!");
            fullnameTextInput.current.focus();
            return;
        } else if (!User.isEmail(email)) {
            alert("Your email is not valid!");
            emailTextInput.current.focus();
            return;
        } else if (!User.checkPassword(password)) {
            alert("Your password is not valid!");
            passwordTextInput.current.focus();
            return;
        } else if (confirmPassword != password) {
            alert("Confirm password is not match with your password!");
            confirmPasswordTextInput.current.focus();
            return;
        }
        handleSignUp(fullname, email, password);
    }
    const textInputChange = (val, dataToChange) => {
        switch (dataToChange) {
            case "fullname":
                setData({
                    ...data,
                    fullname: val
                })
                break;
            case "email":
                setData({
                    ...data,
                    email: val
                });
                break;
            case "password":
                setData({
                    ...data,
                    password: val
                });
                break;
            default:
                break;
        }
    }
    //Check if fullname valid or not
    const checkFullName = (val) => {
        if (val[0] == ' ' || val[val.length - 1] == ' ') {
            setData({
                ...data,
                isValidFullname: false,
                isValidFullnameForStick: false
            })
        } else {
            setData({
                ...data,
                isValidFullname: true,
                isValidFullnameForStick: true
            })
        }
    }
    //Check if password valid or not
    const handlePasswordChange = (val) => {
        if (User.checkPassword(val)) {
            setData({
                ...data,
                //password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                //password: val,
                isValidPassword: false
            });
        }
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (User.isEmail(val)) {
            setData({
                ...data,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const checkConfirmPassword = (val) => {
        if (data.confirm_password == data.password) {
            setData({
                ...data,
                isValidConfirmPassword: true
            });
        } else {
            setData({
                ...data,
                isValidConfirmPassword: false
            });
        }
    }

    ///METHOD FOR FIRESTORE
    //SignUp with authentication
    const handleSignUp = (fullname, email, password) => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then((re) => {
                //console.log(re);
                //When authenticating user successfully will add that user to firestore
                addUserToFirestore(fullname, email, password, lastUser.id);
                alert("Congratulations " + fullname + " has successfully registered an account for simple app!");
                getLastUser();
            })
            .catch((re) => {
                alert("Sign up for failed!\nDetailed error: " + re);
            })
    }
    //Get user from firestore
    const getLastUser = async () => {
        const usersCol = collection(db, 'users');
        const userSnapshot = await getDocs(usersCol);
        const userList = userSnapshot.docs.map(doc => doc.data());
        lastUser = userList[userList.length - 1];
    }
    //Add user to firestore
    const addUserToFirestore = async (fullname, email, password, id) => {
        id = id + 1;
        let date = new Date();
        // Add a new document in collection "users"
        await setDoc(doc(db, "users", ("user" + id)), {
            id: id,
            username: fullname,
            email: email,
            user_image: "https://firebasestorage.googleapis.com/v0/b/fir-simpleapp-894a6.appspot.com/o/user_image%2Fuser_default.png?alt=media&token=d39ba0b5-30df-45f9-bceb-42ae49b8bd04",
            created_at: date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes(),
            role: 1,
            disable: false,
        });
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            {/* Animation */}
            <View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                    <Text style={[styles.text_footer, {
                        // color: colors.text
                    }]}>Fullname</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color='black'
                            size={20}
                        />
                        <TextInput
                            ref={fullnameTextInput}
                            placeholder="Enter your fullname"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                // color: colors.text
                            }]}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(val) => {
                                textInputChange(val, "fullname");
                            }}
                            onEndEditing={(e) => checkFullName(e.nativeEvent.text)}
                        />
                        {data.isValidFullnameForStick ?
                            //Animation
                            <View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </View>
                            : null}
                    </View>
                    {data.isValidFullname ? null :
                        // Animation
                        <View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Your full name must not leading and trailing spaces!</Text>
                        </View>
                    }
                    <Text style={[styles.text_footer, {
                        // color: colors.text
                    }]}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color='black'
                            size={20}
                        />
                        <TextInput
                            ref={emailTextInput}
                            placeholder="Enter your email"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                // color: colors.text
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val, "email")}
                            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange ?
                            //Animation
                            <View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </View>
                            : null}
                    </View>
                    {data.isValidUser ? null :
                        // Animation
                        <View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Your email is not valid!</Text>
                        </View>
                    }

                    <Text style={[styles.text_footer, {
                        // color: colors.text,
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color='black'
                            size={20}
                        />
                        <TextInput
                            ref={passwordTextInput}
                            placeholder="Enter your Password"
                            placeholderTextColor="#666666"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[styles.textInput, {
                                // color: colors.text
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val, "password")}
                            onEndEditing={(e) => {
                                handlePasswordChange(e.nativeEvent.text);
                            }}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null :
                        // Animation
                        <View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Password is longer than 8 characters and has at least 1 lowercase character, 1 uppercase character, 1 number character</Text>
                        </View>
                    }

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            ref={confirmPasswordTextInput}
                            placeholder="Confirm Your Password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                            onEndEditing={(val) => checkConfirmPassword(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.confirm_secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {data.isValidConfirmPassword ? null :
                        // Animation
                        <View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Password and confirm password are not match!</Text>
                        </View>
                    }
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                        </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={styles.color_textPrivate}>{" "}and</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => { checkUserInfoAndSignUp(data.fullname, data.email, data.password, data.confirm_password) }}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: SIZES.androidHeightWithStatusBar.window * 0.017,
    },
});