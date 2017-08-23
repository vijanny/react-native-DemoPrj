import React, { Component } from 'react';
import {View, AppRegistry, StyleSheet, Text,Image,Dimensions,TouchableHighlight,Alert,Animated,Easing,} from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import Header from './header';
import SinWave from './SinWave';
import WaveViewComponent from 'react-native-waveview-android';
import Swiper from 'react-native-swiper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const headerHeight = 50;
const screenHeight = height;
const screenWidth  = width;

const waterLevel=['60','70','80','90','100','110','120','130','140','150','160','170','180','190','200']
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
  render() {
    const animatedStyle = { height: this.animatedHeightValue, width: this.animatedWidthValue };
    const waterLevelList = waterLevel.map(function(el,index){
      return(
        <View style={styles.slide1}>
          <Text style={styles.text}>
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
                      <Image style ={styles.operatePanelIcon} source ={require('../img/decrease.png')}/>
                  </View>
                  <View style={styles.operatePanelCommon}>
                    <View style={styles.wave}>
                      <WaveViewComponent 
                        style={styles.wave} 
                        frontWaveColor="#F6F5F5"
                        behindWaveColor='#FFFFFF'
                        borderColor='#F08A78'
                        borderWidth={40}
                        progress={50}
                      />
                      <View style={[{position:'absolute',flexDirection:'row',justifyContent:'center',alignItems:'center'},styles.wave]}>
                          <View style={[{flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:20}]}>
                              <Text style={[{color:'#F08A78',fontSize:38}]}>标准</Text>
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
                      <Image style ={styles.operatePanelIcon} source ={require('../img/add.png')}/>
                  </View>
              </View>
              <View style={[{flexDirection:'column',justifyContent:'center',alignItems:'center'}]}>
                  <View style={[{flexDirection:'row'}]}>
                    <Image style={[{width:22,height:22}]} source={require('../img/cup.png')}/>
                    <Text style={[{fontSize:18}]}>出奶量</Text>
                  </View> 
                  <View style={[{width:width,height:40}]}>
                    <Swiper style={styles.wrapper} activeDotColor ='#F08A78'>
                      {waterLevelList}
                    </Swiper>
                  </View>                
              </View>
              <TouchableHighlight style={styles.operateButton}  underlayColor='#F9DDD2' >
                <View>
                <Text style={[{color:'#fff',fontSize:28}]}>
                  一键冲奶
                </Text>
                </View>
              </TouchableHighlight>
          </View>
        </View>
    );  
  }  
}  

const styles = StyleSheet.create({
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
    backgroundColor:'#F08A78'
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