import React, { Component } from 'react';
import {StatusBar ,View,StyleSheet,Text} from 'react-native';


export default class Header extends Component {  
  constructor(props) {  
    super(props);  
  }  

  render() {  
    // 根据当前showText的值决定是否显示text内容  
    return (        
      		<View>
			<StatusBar backgroundColor = {this.props.barBackgroundColor} barStyle = 'default' />
				<View style = {[styles.headerContainer,{backgroundColor:this.props.backgroundColor}]}>
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
  headerContainer:{
  	height:50,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

