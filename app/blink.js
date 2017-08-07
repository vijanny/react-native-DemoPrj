import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Image,Dimensions,TouchableHighlight   } from 'react-native';
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
  _onPress(){
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {  
    // 根据当前showText的值决定是否显示text内容  
    let display = this.state.showText ? this.state.name : '我一直在闪';  
    return (     
        <View style = {styles.container}>
          <View style={{backgroundColor:"white",flexDirection:"row",height:headerHeight}}>  
              <View style={{flex:1,flexDirection:'column',justifyContent:'center',paddingLeft:10}}>  
                <TouchableHighlight   
                    onPress={this._onPress.bind(this)}
                    style={styles.headerIcon}
                    underlayColor = '#F5F5F5'
                  >
                  <View >
                      <Image 
                      style={styles.headerIcon}
                      source={require('../img/menu.png')}
                      />
                  </View>
                </TouchableHighlight>              
              </View>  
              <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>  
                <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:20,color:'#F08A78',fontWeight:'bold'}} >主页</Text>                    
                </View>
              </View>  
              <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>  
                <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',paddingRight:10}}>
                   
                </View>
              </View>  
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
    justifyContent:'center',
    alignItems:'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

