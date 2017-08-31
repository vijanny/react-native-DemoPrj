import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Image,Dimensions,TouchableHighlight,Alert,Animated,Easing,} from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import Header from './header';
import WaveViewComponent from 'react-native-waveview-android';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modalbox';
import AnimatedCircleProgress from './CircleProgressComponents/AnimatedCircleProgress'
import AMAText from './CircleProgressComponents/AMAText'


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


export default class Son extends Component {  
    static navigationOptions = {
    drawerLabel: '喂养助手',
        drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/feeder.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
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
  _onModalClosePress(){
    this.refs.modal1.close();
  }
  render() {
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
          title='喂养助手'
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
                {this.state.milkButtonOn?null:<Text style={[{fontSize:18}]}> </Text>}
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