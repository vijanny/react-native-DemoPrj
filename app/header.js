import React, { Component } from 'react';
import {StatusBar ,View,StyleSheet,Text,TouchableHighlight,Image} from 'react-native';


export default class Header extends Component {  
  constructor(props) {  
    super(props);  
  }  

  render() {  
    // 根据当前showText的值决定是否显示text内容  
    const iconSrcLeft = this.props.iconSrcLeft?this.props.iconSrcLeft:null;
    const iconSrcRight = this.props.iconSrcRight?this.props.iconSrcRight:null;
    const titleColor   = this.props.titleColor?this.props.titleColor:'#000'
    return (        
          <View style={{backgroundColor:this.props.backgroundColor,flexDirection:"row",height:this.props.height}}>  
              <View style={{flex:1,flexDirection:'column',justifyContent:'center',paddingLeft:10}}>  
                <TouchableHighlight   
                    onPress={this.props.iconOnPressLeft}
                    style={styles.headerIcon}
                    underlayColor = '#F5F5F5'
                  >
                  <View >
                  {iconSrcLeft 
                  	?
                  	<Image 
                      style={styles.headerIcon}
                      source={iconSrcLeft}
                      />
                    :
                    null
                  }
                  </View>
                </TouchableHighlight>              
              </View>  
              <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>  
                <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:20,color:titleColor,fontWeight:'bold'}} >{this.props.title}</Text>                    
                </View>
              </View>  
              <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>  
                <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',paddingRight:10}}>
                  <TouchableHighlight   
                    onPress={this.props.iconOnPressRight}
                    style={styles.headerIcon}
                    underlayColor = '#F5F5F5'
                  >
                  <View >
                  {iconSrcRight
                  	?
                  	<Image 
                      style={styles.headerIcon}
                      source={iconSrcRight}
                      />
                    :
                    null
                  }

                  </View>
                </TouchableHighlight>    
                </View>
              </View>  
          </View>  
    );  
  }  
}  


const styles = StyleSheet.create({

  headerIcon:{
    width:30,
    height:30
  },
});

