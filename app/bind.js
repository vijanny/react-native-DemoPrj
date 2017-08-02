import React, { Component } from 'react';
import {View, StyleSheet, Text,Button,Dimensions,Image,TextInput,TouchableHighlight,Alert} from 'react-native';


const width = Dimensions.get('window').width;
const hight = Dimensions.get('window').hight;


export  default class Bind extends Component{
  static navigationOptions = {
    title: 'Bind',
    header:null
  }
  constructor(props) {
    super(props);
    this.state = {
      accessToken:'',
      account:'',
      password:'',
      text:'你好吗',
      domain:'sever.gmri.com.cn:3001',
      userIcon:'http://sever.gmri.com.cn:3001/images/59656f07587734000162f6861499853046499.jpg',
    };
  }
  _onLogin(){
    this.props.navigation.goBack(); 
  }
  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.textContainer}>
          <Image
            style={styles.textIcon}
            source={require('../img/phone.png')}
          />
          <Text style={[{fontSize:18}]}>手机与机器未进行绑定</Text>
        </View>

        <View style={styles.inputTextContainer}>
          <TextInput 
          style={styles.input} 
          underlineColorAndroid = '#fff' 
          placeholder = '请输入wifi名称'
          keyboardType = 'phone-pad'
          onChangeText={(account) => this.setState({account})}
          />
        </View>
        <View style={styles.inputTextContainer}>
          <TextInput 
            style={styles.input} 
            underlineColorAndroid = '#fff'
            placeholder = '请输入wifi密码'
            secureTextEntry = {true}
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <TouchableHighlight style={styles.loginButton} onPress={this._onLogin.bind(this)} underlayColor='#F9DDD2' >
          <Text style={[{color:'#fff',fontSize:28}]}>
            确定
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
    fontSize:28
  },
  textContainer:{
    width:width,
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center',
    marginTop:70,
    marginBottom:80
  },
  textIcon:{
    width:30,
    height:30
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
    width:width*75/100,
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