import React from 'react';
import {Platform} from 'react-native'
import { 
  createMaterialTopTabNavigator
} from 'react-navigation';
import { 
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import colors from '../styles/colors'
import AllShopsScreen from '../screens/Home/Tabs/AllShopsScreen'
import SalonsScreen from '../screens/Home/Tabs/SalonsScreen'
import CarwashesScreen from '../screens/Home/Tabs/CarwashesScreen'

const HomeTabNav = createMaterialTopTabNavigator ({

    All:{screen: AllShopsScreen},
    Salon:{screen: SalonsScreen},
    Carwash:{screen:CarwashesScreen},
},
{
    tabBarOptions: {
      style:{ 
        // marginTop:100, 
        backgroundColor:colors.gray01
      },
      inactiveTintColor:'#566573',
      labelStyle: {
        fontSize:hp('2%'),
        fontWeight:Platform.OS === 'ios' ?'600' :'400'
      },
      activeTintColor: colors.primary,
      tabStyle: {
      },
      indicatorStyle:{
        borderBottomWidth:Platform.OS === 'ios' ? 2.5 : 2,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderColor:colors.primary  
      }
    },

   
  });




export  default HomeTabNav