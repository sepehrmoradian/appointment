import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, Platform, TextInput, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        confirm_password:'',
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });

    const textInputChange = (val) => {
        if( val.trim().length >= 4  ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const handleConfirmPasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                confirm_password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                confirm_password: val,
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

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Signing Up is Easy!</Text>
            </View>
            <Animatable.View 
                style={styles.footer}
                animation='fadeInUpBig'
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val)=>textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                    <Animatable.View
                        animation='bounceIn'
                    >
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20}
                        /> 
                    </Animatable.View>
                    : null}
                </View>

                <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val)=>handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather
                            name='eye-off'
                            color='grey'
                            size={20}
                        /> 
                        :
                        <Feather
                            name='eye'
                            color='grey'
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer, {marginTop:35}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Confirm Your Password'
                        confirm_secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val)=>handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather
                            name='eye-off'
                            color='grey'
                            size={20}
                        /> 
                        :
                        <Feather
                            name='eye'
                            color='grey'
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Sign Up</Text>
                    </LinearGradient>

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
            </Animatable.View>
        </View>
    )
}

export default SignUp

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
        flex: 3,
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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
    }
  });