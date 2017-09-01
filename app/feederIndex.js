import Son from'./son'
import feederOpt from'./feederOpt'
import { StackNavigator } from 'react-navigation';


const feederIndex = StackNavigator({
    feeder: { 
                screen: Son,             
                navigationOptions:{
                header:null
            } 
        },
    feederOpt: { 
            screen: feederOpt,
            navigationOptions:{
                header:null
            } 
        }
  },{
    initialRouteName:'feeder',
  }
);

export default feederIndex;