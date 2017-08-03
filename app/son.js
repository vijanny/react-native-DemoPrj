import React, { Component } from 'react';
import {View, StyleSheet, Text,Button,Image} from 'react-native';



export  default class Son extends Component{
    static navigationOptions = {
    drawerLabel: '设置',
        drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/phone.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      name:props.name
    };
  }
  _onPress(){
    alert('you press me ha ha !!');
  }
  _onPressLearnMore(){
    this.props.navigation.navigate('Login');
  }
  render(){
    return(
      <View>
        <Text style = {styles.red}>{this.props.name}</Text>
        <Button  onPress={this._onPressLearnMore.bind(this)} title="点击" color="#841584"/>
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
    justifyContent:'center',
    alignItems:'center'
  },
  icon: {
    width: 24,
    height: 24,
  },
});
