import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:10,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
