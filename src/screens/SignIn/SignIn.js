import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignIn = () => {

const navigation = useNavigation();
    return (
        <View>
            <Text>Sign In Screen</Text>
            <Button
            title='Click Me!'
            onPress={()=> alert('Yay!')}
            />
            <Button
            title='Go Back'
            onPress={()=>navigation.navigate('SplashScreen')}
            />
        </View>
    )
}

export default SignIn