/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import StackNavigator from './StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <StackNavigator/>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default App;
