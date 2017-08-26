import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Image,Dimensions,TouchableHighlight,Alert,Animated,Easing,} from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import Header from './header';
import WaveViewComponent from 'react-native-waveview-android';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modalbox';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const headerHeight = 50;
const screenHeight = height;
const screenWidth  = width;

const waterLevel=['60','70','80','90','100','110','120','130','140','150','160','170','180','190','200'];
const waterLevelInitIndex = 6;
const concentration =[
  {
    name:'稀',
    progress:20
  },
    {
    name:'淡',
    progress:30
  },
    {
    name:'标准',
    progress:50
  },
    {
    name:'浓',
    progress:70
  },
    {
    name:'特浓',
    progress:80
  }];


export default class Blink extends Component {  
    static navigationOptions = {
    drawerLabel: '主页',
        drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }
  constructor(props) {  
    super(props);  
    this.state = { 
      milkButtonOn:true,
      waterButtonOn:false,
      concentrationIndex:2,
      waterLevel:waterLevel[waterLevelInitIndex]
       };  
    // 每1000毫秒对showText状态做一次取反操作  
  }
  _onPress(){
    this.props.navigation.navigate('DrawerOpen');
  }
  _milkOnPress(){
    this.setState({milkButtonOn:true,waterButtonOn:false});
  }
  _waterOnPress(){
    this.setState({milkButtonOn:false,waterButtonOn:true});
  }
  _decreaseOnPress(){
     console.log('_decreaseOnPress');
    let index = this.state.concentrationIndex;
    if(index>0){
      index--;
      this.setState({concentrationIndex:index});
    }
  }
  _addOnPress(){
    let index = this.state.concentrationIndex;
    if(index < concentration.length-1){
      index++;
      this.setState({concentrationIndex:index});
    }
  }
  _onWaterLeveIndexChanged(index){
    this.setState({waterLevel:parseInt(waterLevel[index])});
  }
  _oneKeyMilkOnPress(){
    this.refs.modal1.open();
  }
  render() {
    const animatedStyle = { height: this.animatedHeightValue, width: this.animatedWidthValue };
    const waterLevelList = waterLevel.map(function(el,index){
      return(
        <View style={styles.slide1} key={index}>
          <Text style={styles.text} key={index}>
            {waterLevel[index]}mL
          </Text>
        </View>
        );
    });
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
              <View style={styles.operateItem}>
                <TouchableHighlight style={[styles.operateItemButton,this.state.milkButtonOn?{backgroundColor:'#F08A78'}:null]} onPress={this._milkOnPress.bind(this)} >
                  <View style={styles.operateItemButtonInner}>
                    {this.state.milkButtonOn?<Image style={{width:20,height:20}} source={require('../img/dot.png')}/>:<Text></Text>}
                    <Text style={styles.operateItemText}>冲奶</Text>  
                    <Text></Text>               
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.operateItemButton,this.state.waterButtonOn?{backgroundColor:'#F08A78'}:null]} onPress={this._waterOnPress.bind(this)}>
                  <View style={styles.operateItemButtonInner}>
                    {this.state.waterButtonOn?<Image style={{width:20,height:20}} source={require('../img/dot.png')}/>:<Text></Text>}
                    <Text style={styles.operateItemText}>喝水</Text>  
                    <Text></Text>               
                  </View>
                </TouchableHighlight>
              </View>
               <View  style ={styles.operatePanel}>
                  <View style={styles.operatePanelCommon}>
                      <TouchableHighlight style={styles.operatePanelIcon} underlayColor = '#F9DDD2' activeOpacity={0.5}   onPress={this._decreaseOnPress.bind(this)}>
                        <Image style ={[{width:40,height:40}]} source ={require('../img/decrease.png')}/>
                      </TouchableHighlight>
                  </View>
                  <View style={styles.operatePanelCommon}>
                    <View style={styles.wave}>
                      <WaveViewComponent 
                        style={styles.wave} 
                        frontWaveColor="#F6F5F5"
                        behindWaveColor='#FFFFFF'
                        borderColor='#F08A78'
                        borderWidth={40}
                        progress={concentration[this.state.concentrationIndex].progress}
                      />
                      <View style={[{position:'absolute',flexDirection:'row',justifyContent:'center',alignItems:'center'},styles.wave]}>
                          <View style={[{flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:20}]}>
                              <Text style={[{color:'#F08A78',fontSize:38}]}>{concentration[this.state.concentrationIndex].name}</Text>
                              <View style={[{flexDirection:'row',marginTop:10}]}>
                                <Image style={[{width:22,height:22,marginTop:2}]} source={require('../img/semicircle.png')}/>
                                <Text style={[{fontSize:20,color:'#F08A78'}]}>浓度</Text>
                              </View>                             
                          </View>
                      </View>
                    </View>
                    <Image style={[{width:30,height:50,marginTop:-10}]} source={require('../img/thermometer.png')}/>
                    <Text style={[{fontSize:18}]}>标准浓度10g/100ml</Text>
                    <View style={[{flexDirection:'row'}]}>
                      <Image style={[{width:20,height:20}]} source={require('../img/smallThermometer.png')}/>
                      <Text style={[{fontSize:18}]}>奶温 40℃</Text>
                    </View>
                  </View>
                  <View style={styles.operatePanelCommon}>
                      <TouchableHighlight style={styles.operatePanelIcon} underlayColor = '#F9DDD2' activeOpacity={0.5}   onPress={this._addOnPress.bind(this)}>
                        <Image style ={[{width:40,height:40}]} source ={require('../img/add.png')}/>
                      </TouchableHighlight>
                  </View>
              </View>
              <View style={[{flexDirection:'column',justifyContent:'center',alignItems:'center'}]}>
                  <View style={[{flexDirection:'row'}]}>
                    <Image style={[{width:22,height:22}]} source={require('../img/cup.png')}/>
                    <Text style={[{fontSize:18}]}>出奶量</Text>
                  </View> 
                  <View style={[{width:width,height:40}]}>
                    <Swiper style={styles.wrapper} index = {waterLevelInitIndex}  activeDotColor ='#F08A78' onIndexChanged={this._onWaterLeveIndexChanged.bind(this)}>
                      {waterLevelList}
                    </Swiper>
                  </View>                
              </View>
              <TouchableHighlight style={styles.operateButton}  underlayColor='#F9DDD2' activeOpacity={0.5} onPress={this._oneKeyMilkOnPress.bind(this)}>
                <View>
                <Text style={[{color:'#fff',fontSize:28}]}>
                  一键冲奶
                </Text>
                </View>
              </TouchableHighlight>                           
              <View></View>
              <View></View>
          </View>
          <Modal style={[styles.modal, styles.modal4]} position={"center"} ref={"modal1"} swipeArea={20}>
            <View style={styles.modalInfo}>
                <Text style={[{color:'white',fontSize:18,marginLeft:50}]}>冲奶中...</Text>
            </View>
              <View style={styles.modalFeeder}>
                <Image style={styles.modalInfoIcon} source={require('../img/milkBotl.png')}/>
              </View>
          </Modal>           
        </View>
    );  
  }  
}  

const styles = StyleSheet.create({
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
  modalFeeder:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'white',
    position:'absolute',
    left:0,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{h:20,w:20},
    shadowRadius:3,
    shadowOpacity:0.8
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