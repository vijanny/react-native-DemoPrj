import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Image,Dimensions,TouchableHighlight,Alert,Animated,Easing,} from 'react-native';
import Header from './header';

import Modal from 'react-native-modalbox';
import AnimatedCircleProgress from './CircleProgressComponents/AnimatedCircleProgress'
import AMAText from './CircleProgressComponents/AMAText'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const headerHeight = 50;
const screenHeight = height;
const screenWidth  = width;


export default class feederOpt extends Component {  
  constructor(props) {  
    super(props);  
    this.state = { 
      milkButtonOn:true,
       };  
    // 每1000毫秒对showText状态做一次取反操作  
  }
  _onPress(){
    this.props.navigation.goBack();
  }
  _milkOnPress(){

  }
  _waterOnPress(){
  }
  _decreaseOnPress(){

  }
  _addOnPress(){

  }
  _onWaterLeveIndexChanged(index){
  }
  _oneKeyMilkOnPress(){
    this.refs.modal1.open();
  }
  _onModalClosePress(){
    this.refs.modal1.close();
  }
  render() {

    return (
        <View style = {styles.container}>
          <Header 
          iconOnPressLeft = {this._onPress.bind(this)}
          height = {50}
          iconSrcLeft = {require('../img/left.png')}
          title='喂养助手OPT'
          titleColor = '#F08A78'
          backgroundColor='white'
          />
          <View style={styles.content}>
              <View style={styles.operatePanelCommon}>
                <View style={styles.wave}>
                <AnimatedCircleProgress progress={180} progressColor='#F08A78' baseProgressWidth={15} progressWidth={15} raduis={100}>
                    <View style={{backgroundColor: 'transparent', flex: 1,  alignItems: 'center',justifyContent:'center'}}>
                    </View>
                </AnimatedCircleProgress>
                  <View style={[{position:'absolute',flexDirection:'row',justifyContent:'center',alignItems:'center'},styles.wave]}>
                  {
                    this.state.milkButtonOn
                    ?                         
                    <View style={[{flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:20}]}>
                        <Text style={[{color:'#F08A78',fontSize:38}]}> 40℃</Text>
                        <View style={[{flexDirection:'row',marginTop:10}]}>
                          <Image style={[{width:22,height:22,marginTop:2}]} source={require('../img/pinkSmallThermometer.png')}/>
                          <Text style={[{fontSize:20,color:'#F08A78'}]}>当前水温</Text>
                        </View>                             
                    </View>
                    :<Image style={[{width:80,height:80}]} source={require('../img/pinkOneCup.png')}/>                        
                  }                       
                  </View>
                </View>
                <Image style={[{width:30,height:30,marginTop:-10}]} source={require('../img/thermometer.png')}/>
                <View style={[{flexDirection:'row'}]}>
                  <Image style={[{width:20,height:20,marginTop:3}]} source={require('../img/exclamationMark.png')}/>
                  <Text style={[{fontSize:18,marginLeft:5}]}>水已存储8小时</Text>
                </View>
              </View>
              <View style={[{width:width*80/100}]}>
                  <View style={styles.devInfoContainer}>
                      <View style={styles.devInfoItem}> 
                        <View style={styles.devInfoItemLeft}>
                          <Image style={styles.devInfoItemLeftImage} source={require('../img/loop.png')}/>
                          <Text style={styles.devInfoItemText}>消毒</Text>                          
                        </View>
                        <Text style={styles.devInfoItemText}>2天10小时前</Text>
                      </View>
                      <Image style={styles.devInfoLine} source={require('../img/line.png')}/>
                  </View>
                  <View style={styles.devInfoContainer}>
                      <View style={styles.devInfoItem}> 
                        <View style={styles.devInfoItemLeft}>
                          <Image style={styles.devInfoItemLeftImage} source={require('../img/waterBox.png')}/>
                          <Text style={styles.devInfoItemText}>水箱</Text>                          
                        </View>
                        <Image style={styles.devInfoItemRightImage} source={require('../img/checked.png')}/>
                      </View>
                      <Image style={styles.devInfoLine} source={require('../img/line.png')}/>
                  </View>
                  <View style={styles.devInfoContainer}>
                      <View style={styles.devInfoItem}> 
                        <View style={styles.devInfoItemLeft}>
                          <Image style={styles.devInfoItemLeftImage} source={require('../img/mixBox.png')}/>
                          <Text style={styles.devInfoItemText}>混合器</Text>                          
                        </View>
                        <Image style={styles.devInfoItemRightImage} source={require('../img/checked.png')}/>
                      </View>
                      <Image style={styles.devInfoLine} source={require('../img/line.png')}/>
                  </View>
                  <View style={styles.devInfoContainer}>
                      <View style={styles.devInfoItem}> 
                        <View style={styles.devInfoItemLeft}>
                          <Image style={styles.devInfoItemLeftImage} source={require('../img/powderBox.png')}/>
                          <Text style={styles.devInfoItemText}>粉盒</Text>                          
                        </View>
                        <Image style={styles.devInfoItemRightImage} source={require('../img/error.png')}/>
                      </View>
                      <Image style={styles.devInfoLine} source={require('../img/line.png')}/>
                  </View>
              </View>          
              <TouchableHighlight style={styles.operateButton}  underlayColor='#F9DDD2' activeOpacity={0.5} onPress={this._oneKeyMilkOnPress.bind(this)}>
                <View>
                <Text style={[{color:'#fff',fontSize:28}]}>
                  喂养设定
                </Text>
                </View>
              </TouchableHighlight>                           
              <View></View>
              <View></View>
          </View>
          <Modal style={[styles.modal, styles.modal4]} position={"center"} ref={"modal1"} swipeArea={20}>
            <View style={styles.modalInfo}>
                <Text style={[{color:'white',fontSize:18,marginLeft:50}]}>{this.state.milkButtonOn?'冲奶中':'出水中'}...</Text>
            </View>
              <View style={styles.modalFeederInner}>
                  <Image style={styles.modalInfoIcon} source={this.state.milkButtonOn?require('../img/milkBotl.png'):require('../img/pinkOneCupMini.png')}/>
              </View>
              <View style={styles.modalFeederX} >
                <TouchableHighlight underlayColor='#fff' activeOpacity={0.5} onPress={this._onModalClosePress.bind(this)}>
                    <Text style={[{color:'#F08A78',fontSize:16}]}>X</Text>                
                </TouchableHighlight>
              </View>                                 
          </Modal>           
        </View>
    );  
  }  
}  


const styles = StyleSheet.create({
  devInfoItemText:{
    fontSize:18,
    marginLeft:5
  },
  devInfoItemLeftImage:{
    width:30,
    height:30
  },
  devInfoItemRightImage:{
    width:20,
    height:20
  },
  devInfoLine:{
    width:width*80/100,
    height:3,
    resizeMode:'stretch'
  },
  devInfoContainer:{
    width:width*80/100,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  devInfoItem:{
    width:width*70/100,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  devInfoItemLeft:{
    flexDirection:'row'
  },
  modal: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
    modal4: {
    width:250,
    height: 100,
    marginTop:150,
    backgroundColor: "transparent"
  },
  modalFeederX:{
    width:25,
    height:25,
    borderRadius:50,
    backgroundColor:'white',
    position:'absolute',
    right:20,
    top:10,

    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden'
  },
  modalFeederInner:{
    width:100,
    height:100,
    borderRadius:50,
        position:'absolute',
    left:0,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{h:20,w:20},
    shadowRadius:3,
    shadowOpacity:0.8,   
    elevation:4

  },

  modalInfo:{
    width:200,
    height:70,
    borderRadius:50,
    backgroundColor:'#F08A78',
    justifyContent:'center',
    alignItems:'center'
  },

  modalInfoIcon:{
    width:60,
    height:60
  },
  wave:{
    width:200,
    height:200
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c93939',
    height: 100,
    width: 100,
    overflow: 'hidden'
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
  operateItem:{
    width:width*60/100,
    height:40,
    borderWidth:2,
    borderColor:'white',
    borderRadius:30,
    flexDirection:'row',
    justifyContent:'space-around',
    paddingLeft:15,
    paddingRight:15
  },
  operateItemButton:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0,
    borderColor:'red',
    borderRadius:30,
    width:(width*60/100)*55/100
  },
  operateItemButtonInner:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:(width*60/100)*55/100
  },
  operateItemText:{
    color:'white',
    fontSize:18
  },
  operatePanel:{
    width:width,
    flexDirection:'row',
    justifyContent:'center',
  },
  operatePanelIcon:{
    width:40,
    height:40,
    marginTop:-90
  },
  operatePanelCommon:{
    marginLeft:10,
    marginRight:10,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  operateButton:{
    width:width*85/100,
    borderWidth:2,
    borderColor:'#fff',
    borderRadius:45,
    alignItems:'center',  
    justifyContent: 'center', 
    backgroundColor:'#F08A78',
  },
  icon: {
    width: 24,
    height: 24,
  },

  wrapper: {
    width:width,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    color: '#F08A78',
    fontSize: 20,
    fontWeight: 'bold',
  }
});