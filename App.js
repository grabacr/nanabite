import React from 'react';
// import {
//   AppRegistry,
//   Platform,
//   StatusBar,
//   StyleSheet,
//   View,
//   Button,
//   Image,
//   Text,
// } from 'react-native';
// import { AppLoading, Asset, Font, Icon } from 'expo';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { BaseNavigator } from './navigation';

export default class App extends React.Component {
  render() {
    return <BaseNavigator />;
  }
}
