import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text} from 'react-native';

export default class Blink extends Component {  
  static navigationOptions = {
    title: 'Blink',

  }
  constructor(props) {  
    super(props);  
    this.state = { 
      showText: true,
       };  
    // 每1000毫秒对showText状态做一次取反操作  
    setInterval(() => {  
      this.setState({ showText: !this.state.showText });  
    }, 1000);  
  }  
  
  render() {  
    // 根据当前showText的值决定是否显示text内容  
    let display = this.state.showText ? this.state.name : '我一直在闪';  
    return (  
      <Text >{display}</Text>  
    );  
  }  
}  