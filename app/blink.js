import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Image} from 'react-native';

export default class Blink extends Component {  
    static navigationOptions = {
    drawerLabel: '主页',
        drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
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

const styles = StyleSheet.create({
  red: {
    color: 'red',
    fontSize:28
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  icon: {
    width: 24,
    height: 24,
  },
});