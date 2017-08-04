/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from 'react-native';
import {Login,Bind,Memu} from './app/sonBace';
import { StackNavigator } from 'react-navigation';


const nativeBace = StackNavigator({
    Login: { screen: Login },
    Bind: { screen: Bind },
    Memu:{
    	screen:Memu,
    	navigationOptions:{
    		header:null
    	}
    }
  },{
    initialRouteName:'Login',
  }
);
AppRegistry.registerComponent('nativeBace', () => nativeBace);