/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Dimensions,Image,TextInput,Button,TouchableHighlight,TouchableOpacity,Icon} from 'react-native';
import {Son,Blink,Login,Lotest} from './app/sonBace';
import { StackNavigator } from 'react-navigation';


class HomeScreen extends Component {
  render() {
    return (
        <Login />
    );
  }
}

const nativeBace = StackNavigator({
    Login: { screen: Login }
  },{
    initialRouteName:'Login',
    navigationOptions:{
      header:{
        visible:false
      }
    }
  }
);

AppRegistry.registerComponent('nativeBace', () => nativeBace);
