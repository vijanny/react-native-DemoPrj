import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Image,Dimensions,TouchableHighlight   } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';

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
  _onPress(){
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {  
    // 根据当前showText的值决定是否显示text内容  
    return (     
        <View style = {styles.container}>
          <Header 
          iconOnPressLeft = {this._onPress.bind(this)}
          height = {50}
          iconSrcLeft = {require('../img/menu.png')}
          title='主页'
          titleColor = '#F08A78'
          backgroundColor='white'
          />
          <View style={styles.content}>
               <View  style ={{flexDirection:'row',justifyContent:'center'}}>
                <Image style ={{width:60,height:60}} source ={require('../img/decrease.png')}/>
                <PercentageCircle radius={80} percent={100} color={"#F08A78"}  innerColor='#F9DDD2' borderWidth = {10}>
                  <Text></Text>
                </PercentageCircle>
                <Image style ={{width:60,height:60}} source ={require('../img/add.png')}/>  
              </View>
              <View  >
                <PercentageCircle radius={80} percent={100} color={"#F08A78"}  innerColor='#F9DDD2' borderWidth = {5}>
                  <Text></Text>
                </PercentageCircle>  
              </View>
              <View>
                <Text> 213213213</Text>
              </View>
              <View>
                <Text> 213213213</Text>
              </View>
                            
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
  headerOutline:{
    flex:1,
    width:width,
    height:headerHeight,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#000'
  },
  header:{
    width:width,
    height:headerHeight,
    backgroundColor:'white',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
    borderWidth:2,
    borderColor:'red'
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
    alignItems:'center',
    justifyContent:'space-around'
  },
  icon: {
    width: 24,
    height: 24,
  },
});


