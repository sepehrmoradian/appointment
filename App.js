/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import SignIn from './src/screens/SignIn/SignIn';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SplashScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default App;
