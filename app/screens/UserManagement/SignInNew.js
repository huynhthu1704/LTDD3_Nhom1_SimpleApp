import React, { useRef, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    Animated,
    Image
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import User from './UserData';
import { authentication, db, firebase } from "../../firebase/firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail, getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { SIZES } from '../../constants';



const SignInScreen = ({ navigation }) => {
    //PROPERTIES
    //const auth = getAuth();
    const emailTextInput = useRef(null);
    const passwordTextInput = useRef(null);
    // emailTextInput = createRef();
    // passwordTextInput = createRef();
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    ///METHOD CHECK TEXTINPUT

    const checkUserInfoAndSignIn = (email, password) => {
        if (!User.isEmail(email)) {
            alert("Your email is not valid!");
            emailTextInput.current.focus();
            return;
        } else if (!User.checkPassword(password)) {
            alert("Your password is not valid!");
            passwordTextInput.current.focus();
            return;
        }
        signInUser(email.toLowerCase(), password);
    }
    ///METHOD WITH API FOR FIREBASE
    const forgotPassword = (email) => {
        if (!User.isEmail(email)) {
            alert("Please enter an valid email to send reset password mail!");
            emailTextInput.current.focus();
            return;
        }
        sendPasswordResetEmail(authentication, email)
            .then(() => {
                alert("Reset password to " + email);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    //Get current user
    const getCurrentUser = async () => {
        const q = query(collection(db, "users"), where("email", "==", authentication.currentUser.email));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            User.currentUser = doc.data();
            switch (User.currentUser.role) {
                //Check if role == 0 => navigate to Admin
                case 0:
                    navigation.navigate("Admin");
                    break;
                //Check if role == 1 => navigate to HomeTabs
                case 1:
                    navigation.navigate("HomeTabs");
                default:
                    break;
            }
        });
    };
    //Sign in user with authentication
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((re) => {
                // setIsSignedIn(true);
                alert("Sign in with " + email + " successfully!");
                //Get current user info
                getCurrentUser();
            })
            .catch((re) => {
                alert("Sign in failed!\nDetailed error: " + re);
            })
    }

    // const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val, dataToChange) => {
        // if (User.isEmail(val.trim())) {
        //     setData({
        //         ...data,
        //         email: val,
        //         check_textInputChange: true,
        //         isValidUser: true
        //     });
        // } else {
        //     setData({
        //         ...data,
        //         email: val,
        //         check_textInputChange: false,
        //         isValidUser: false
        //     });
        // }
        switch (dataToChange) {
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
        // setData({
        //     ...data,
        //     email: val
        // });
    }

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

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
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

    useEffect(() => {
        if (authentication.currentUser != null) {
            getCurrentUser();
            //console.log(JSON.stringify(authentication.currentUser, null, 4));
        }
    })
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387'
                barStyle="light-content"
                translucent={true}
            />
            <View style={styles.header}>
                <Image style={{ ...styles.image, marginBottom: 10 }} source={require('../../../assets/images/signin_signup.png')} />

                <Text style={styles.text_header}>Welcome to Simple App!</Text>
            </View>
            {/* Animation */}
            <View
                style={[styles.footer, {
                    //backgroundColor: 'black'
                }]}
            >
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
                        placeholder="Your email"
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
                        placeholder="Your Password"
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


                <TouchableOpacity onPress={() => forgotPassword(data.email)}>
                    <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
                </TouchableOpacity>
                {/* Button signIn */}
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            //signInUser(data.email, data.password);
                            checkUserInfoAndSignIn(data.email, data.password);
                        }}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignUp')
                        }}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: SIZES.androidWidth.window * 0.05,
        paddingBottom: SIZES.androidHeightWithStatusBar.window * 0.05
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: SIZES.androidWidth.window * 0.05,
        paddingVertical: SIZES.androidHeightWithStatusBar.window * 0.035
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: SIZES.androidHeightWithStatusBar.window * 0.035
    },
    text_footer: {
        color: '#05375a',
        fontSize: SIZES.androidHeightWithStatusBar.window * 0.022
    },
    action: {
        flexDirection: 'row',
        marginTop: SIZES.androidHeightWithStatusBar.window * 0.013,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: SIZES.androidHeightWithStatusBar.window * 0.006
    },
    actionError: {
        flexDirection: 'row',
        marginTop: SIZES.androidHeightWithStatusBar.window * 0.013,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: SIZES.androidHeightWithStatusBar.window * 0.006
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -SIZES.androidHeightWithStatusBar.window * 0.006,
        paddingLeft: SIZES.androidWidth.window * 0.02,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: SIZES.androidHeightWithStatusBar.window * 0.017,
    },
    button: {
        alignItems: 'center',
        marginTop: SIZES.androidHeightWithStatusBar.window * 0.05
    },
    signIn: {
        width: '100%',
        height: SIZES.androidHeightWithStatusBar.window * 0.063,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: SIZES.androidHeightWithStatusBar.window * 0.022,
        fontWeight: 'bold'
    },
    image: {
        height: SIZES.androidHeightWithStatusBar.window * 0.15,
        width: SIZES.androidHeightWithStatusBar.window * 0.2
    },
});
