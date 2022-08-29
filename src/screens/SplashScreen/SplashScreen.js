import { View, Text, Dimensions, StyleSheet, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    
const navigation = useNavigation();
  return (
    <View style={styles.container}>
            <StatusBar backgroundColor='#fe8690' barStyle='light-content'/>
        <View style={styles.header}>
            <Animatable.Image
                animation='bounceIn'
                //duration='1500'
            source={require('../../../assets/images/hospital-icon.png')}
            style={styles.logo}
            resizeMode='stretch'
            />
        </View>
        <Animatable.View 
            style={styles.footer}
            animation='fadeInUpBig'
        >
            <Text style={styles.title}>Easily Book Your Appointments!</Text>
            <Text style={styles.text}>Sign into your account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                <LinearGradient
                    colors={['#08D4C4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='#fff'
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
  )
}

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FE8690'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,

    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }

});

export default SplashScreen