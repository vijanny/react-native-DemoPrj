import React, { Component } from 'react';
import {View, StyleSheet, Text,Button} from 'react-native';


export  default class Son extends Component{
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
    console.log('you press LearnMore !!');
  }
  render(){
    return(
      <View>
        <Text style = {styles.red}>{this.props.name}</Text>
        <Button  onPress={this._onPressLearnMore} title="点击" color="#841584"/>
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
  }
});