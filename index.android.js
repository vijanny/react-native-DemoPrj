/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Dimensions,Image,TextInput,Button,TouchableHighlight,TouchableOpacity,Icon} from 'react-native';
import {Son,Blink,Login,Lotest,Bind} from './app/sonBace';
import { StackNavigator } from 'react-navigation';

const nativeBace = StackNavigator({
    Login: { screen: Login },
    Son: { screen: Son },
    Blink: { screen: Blink },
    Bind: { screen: Bind },
  },{
    initialRouteName:'Login',
  }
);
AppRegistry.registerComponent('nativeBace', () => nativeBace);