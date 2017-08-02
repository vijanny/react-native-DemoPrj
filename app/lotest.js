import React, { Component } from 'react';
import {View, StyleSheet, Text,Button,Dimensions,Image,TextInput,TouchableHighlight} from 'react-native';
const width = Dimensions.get('window').width;
const hight = Dimensions.get('window').hight;

export  default class Lotest extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name:props.name
    };
  }
  _onLogin(){
    alert('loginButton');
  }

  render() {
    return (
      <View style={styles.container}> 
        <Image
        style={styles.icon}
          source={require('../img/1.jpg')}
        />

        <View style={styles.inputTextContainer}>
          <Image
            style={styles.inputTextIcon}
            source={require('../img/account.png')}
          />
          <TextInput 
          style={styles.input} 
          underlineColorAndroid = '#fff' 
          placeholder = '请输入手机号码'
          keyboardType = 'phone-pad'
          />
        </View>
        <View style={styles.inputTextContainer}>
          <Image
            style={styles.inputTextIcon}
            source={require('../img/password.png')}
          />
          <TextInput 
            style={styles.input} 
            underlineColorAndroid = '#fff'
            placeholder = '请输入登录密码'
            secureTextEntry = {true}
          />
        </View>
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
  inputTextIcon:{
    width:20,
    height:20
  },
  inputTextContainer:{
    width:width*70/100,
    flexDirection:'row', 
    alignItems:'center', 
  },
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    width:width,
    backgroundColor:'#F9DDD2'
  },
  input:{
    width:width*60/100,
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