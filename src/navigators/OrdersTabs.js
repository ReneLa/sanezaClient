import React from 'react';
import {Platform } from 'react-native'
import { 
  createMaterialTopTabNavigator
} from 'react-navigation';

import { 
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import colors from '../styles/colors'
import CompletedOrdersScreen from '../screens/Orders/Tabs/CompletedOrdersScreen'
import PendingOrdersScreen from '../screens/Orders/Tabs/PendingOrdersScreen'


const OrdersTabs = createMaterialTopTabNavigator ({

   
    Pending:{screen: PendingOrdersScreen},
    Completed:{screen:CompletedOrdersScreen},
},
{
    tabBarOptions: {
      style:{ 
        paddingTop:Platform.OS === 'ios' ? 5 : 2,
        backgroundColor:colors.gray01
      },
      inactiveTintColor:'#566573',
      labelStyle: {
        fontSize:hp('2%'),
        fontWeight:Platform.OS === 'ios' ?'600':'400'
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

export  default OrdersTabs