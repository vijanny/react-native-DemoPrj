import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Image,Dimensions} from 'react-native';
import {Left, Body, Right,Container,Title} from 'native-base';
import Header from './header';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const headerHeight = 50;

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
      showText: false,
       };  
    // 每1000毫秒对showText状态做一次取反操作  
  }  

  render() {  

    // 根据当前showText的值决定是否显示text内容  
    let display = this.state.showText ? this.state.name : '我一直在闪';  
    return (     
        <View style = {styles.container}>
          <View style = {styles.header}>
            <Image 
            style={styles.headerIcon}
            source={require('../img/menu.png')}/>
          </View>
          <View style={styles.content}>
            <Text>DFADFAS</Text>
          </View>
        </View>
    );  
  }  
}  

const styles = StyleSheet.create({
  red: {
    color: 'red',
    fontSize:28
  },

  header:{
    width:width,
    height:headerHeight,
    backgroundColor:'white',
    justifyContent:'center',
    paddingLeft:20,
    paddingRight:20,
  },
  headerIcon:{
    width:30,
    height:30
  },
  container:{
    height:height,
    width:width,
    backgroundColor:'#F9DDD2'
  },
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

