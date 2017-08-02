/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Dimensions,Image,TextInput,Button,TouchableHighlight} from 'react-native';
import {Son,Blink} from './app/sonBace';
const width = Dimensions.get('window').width;
const hight = Dimensions.get('window').hight;

class nativeBace extends Component {
  _onLogin(){
    alert('loginButton');
  }

  render() {
    return (
      <View style={styles.container}> 
        <Image
        style={styles.icon}
          source={require('./img/1.jpg')}
        />
        <TextInput 
          style={styles.input} 
          underlineColorAndroid = '#fff' 
          placeholder = '请输入手机号码'
          inlineImageLeft = './img/account.png'
          inlineImagePadding = {10}
        />
        <TextInput 
          style={styles.input} 
          underlineColorAndroid = '#fff'
          placeholder = '请输入登录密码'
          secureTextEntry = {true}
        />
        <TouchableHighlight style={styles.loginButton} onPress={this._onLogin} underlayColor='#F9DDD2' >
          <Text style={[{color:'#fff',fontSize:28}]}>
            登录
          </Text>
        </TouchableHighlight>
        <View style={styles.optTextOutLine}>
          <Text style={styles.optText} >忘记密码</Text>
          <Text style={styles.optText}>|</Text>
          <Text style={styles.optText}>注册用户</Text>
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
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    width:width,
    backgroundColor:'#F9DDD2'
  },
  input:{
    width:width*80/100,
    borderColor:'#fff'
  },
  loginButton:{
    marginTop:30,
    width:width*85/100,
    borderWidth:2,
    borderColor:'#fff',
    borderRadius:45,
    alignItems:'center',  
    justifyContent: 'center', 
    backgroundColor:'#F08A78'
  },
  icon:{
    marginTop:60,
    marginBottom:50,
    borderWidth:5,
    borderColor:'#F08A78',
    borderRadius:20,
    width: 100,
    height:100,
    resizeMode: 'cover',
  },
  optTextOutLine:{
    width:width*50/100,
    marginTop:20,
    flex:1,
    flexDirection:'row', 
    justifyContent: 'space-around', 

  },
  optText:{
        fontSize:18,
  }
});

AppRegistry.registerComponent('nativeBace', () => nativeBace);
