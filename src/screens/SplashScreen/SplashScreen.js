import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
            source={require('../../../assets/images/hospital-icon.png')}
            style={styles.logo}
            resizeMode='stretch'
            />
        </View>
        <View style={styles.footer}>
            <Text>Please Work</Text>
        </View>
    </View>
  )
}

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#01796F',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
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