/*
import { DrawerNavigator,DrawerItems  } from 'react-navigation'
import { Dimensions ,ScrollView,StyleSheet} from 'react-native'
import Blink from './blink'
import Son from'./son'

const width = Dimensions.get('window').width;
const hight = Dimensions.get('window').hight;


var  CustomDrawerContentComponent = function(props) => (
  <View style={style.container}>
    <DrawerItems {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Memu = DrawerNavigator({
	Blink:{screen:Blink},  
    Son:{screen:Son},  
},{
	initialRouteName:'Son',
	drawerWidth:width*60/100,
	contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>
}
);
export default Memu;

*/


import React from 'react';
import {
   AppRegistry,
   Text,
   View,
   StyleSheet,
   Image,
   Button,
   ScrollView,
   Dimensions
}  from 'react-native';


import { 
	     DrawerNavigator ,
         DrawerItems ,
         } from 'react-navigation';


import Blink from './blink'
import Son from'./son'

const width = Dimensions.get('window').width;
const hight = Dimensions.get('window').hight;

class MyHomeScreen extends React.Component {

  static navigationOptions = {
  	//{ focused: boolean, tintColor: string }
    drawerLabel: 'Home',
    //{ focused: boolean, tintColor: string }
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/phone.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title=" MyHomeScreen ----> open drawer"
      />
    );
  }
}


const MyNotificationsScreen = ({navigation}) => (
    <View>
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
          title="MyNotificationsScreen ---> open drawer  "
        />
        <Text></Text>
	</View>
);


MyNotificationsScreen.navigationOptions = {
   drawerLabel: 'Notifications',
    drawerIcon: () => (
    	<View>
            <Image
                source={require('../img/phone.png')}
                style={styles.icon}
            />
    	</View>
      
    ),
};


const Memu = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
         screen: Son,
    },
},{
    drawerWidth: width*70/100, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
      initialRouteName: 'Home', // 默认页面组件
      activeItemKey : 'Notifications',
      labelStyle : {//标签样式
           // color : 'red',
           height : 30,
      },
      activeTintColor: '#F08A78',  // 选中文字颜色
      activeBackgroundColor: '#fff', // 选中背景颜色
      inactiveTintColor: 'white',  // 未选中文字颜色
      inactiveBackgroundColor: '#F08A78', // 未选中背景颜色
      style: {  // 样式
         width:width*65/100,     
     },
     itemStyle:{
     	borderTopRightRadius:30,
     	borderBottomRightRadius:30,
     	flexDirection:'row', 
    	alignItems:'center',
     },
      //没有作用
      onItemPress : (route) => {
      	 console.log('-------->' )
      },
   },

   contentComponent: props => {
        console.log('contentComponent');
        console.log(props);
        return (
            <ScrollView style={{backgroundColor:'#F08A78'}}>
                <View>
                    <View style={styles.userContainer}>
                    	<Image style={styles.userIcon} source = {{uri:'http://sever.gmri.com.cn:3001/images/59656f07587734000162f6861499853046499.jpg'}}/>
                        <Text style={{color:'#FFF',fontSize:18,marginLeft:20}}>Smart Cook</Text>
                    </View>
                    <DrawerItems {...props} />
                </View>
            </ScrollView>
        )
    },
});

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  userIcon:{
    borderWidth:2,
    borderColor:'white',
    borderRadius:10,
    width: 50,
    height:50,
    resizeMode: 'cover',
  } ,
  userContainer:{
    width:width*70/100,
    flexDirection:'row', 
    alignItems:'center', 
    paddingVertical: 20, 
    paddingHorizontal: 15,
    marginTop:20,
    marginBottom:40
  },
});

export default Memu;