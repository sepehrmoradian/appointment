import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/hospital-icon.png'

const SignIn = () => {
const{height} = useWindowDimensions();
const{width} = useWindowDimensions();

<View style={{
    flex: 1,
justifyContent: 'center',
backgroundColor: '#ecf0f1',
  }}>
   <Image source={Logo} style={{height:50,width:50,alignSelf:'center'}}         
   />
  </View>
;
};

const styles = StyleSheet.create({
    root: {
        //flex: 1,
        //flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    logo: {
        //width: '70%',
        alignSelf: 'center',
        //maxWidth: 300,
        //maxHeight: 200,
    },
});

export default SignIn