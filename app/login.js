import React, { Component } from 'react';
import {View, StyleSheet, Text,Button,Dimensions,Image,TextInput,TouchableHighlight,Alert,StatusBar} from 'react-native';


const width = Dimensions.get('window').width;
const hight = Dimensions.get('window').hight;


export  default class Login extends Component{
  static navigationOptions = {
    title: 'Login',
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
    this.props.navigation.navigate('Memu');
/*
            fetch('http://'+this.state.domain+'/miniMasterApp/user/signin', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({'user':{'phoneNum':this.state.account,'password':this.state.password}})
            })
            .then((response) => response.json()) //把response转为json
            .then((responseData) => { // 上面的转好的json
              if(responseData.errorCode!=0){
                     Alert.alert(  
                          '提示',
                          JSON.stringify(responseData.message),
                          [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                          ],
                          { cancelable: false }
                      ); 
              }else{
                this.setState({accessToken:responseData.res.token});
                
              }
            })
            .catch((error)=> {
                Alert.alert(error);
            })
            */


  }
  render() {
    return (
      <View style={styles.container}> 
      <StatusBar backgroundColor = '#F08A78'/>
        <Image
        style={styles.icon}
          source={{uri:this.state.userIcon}}
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
          onChangeText={(account) => this.setState({account})}
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
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <TouchableHighlight style={styles.loginButton} onPress={this._onLogin.bind(this)} underlayColor='#F9DDD2' >
          <View>
          <Text style={[{color:'#fff',fontSize:28}]}>
            登录
          </Text>
          </View>
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
    width:width*65/100,
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