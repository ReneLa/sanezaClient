import React from 'react';
import {Platform } from 'react-native'
import { 
  createMaterialTopTabNavigator
} from 'react-navigation';
import colors from '../styles/colors'
import CompletedAppointsScreen from '../screens/appointments/Tabs/CompletedAppointsScreen'
import PendingAppointsScreen from '../screens/appointments/Tabs/PendingAppointsScreen'


const AppointsTabs = createMaterialTopTabNavigator ({

    Bookings:{screen: PendingAppointsScreen},
    Completed:{screen:CompletedAppointsScreen},
},
{
    tabBarOptions: {
      style:{ 
        paddingTop:Platform.OS === 'ios' ? 5 : 2,
        backgroundColor:colors.gray01
      },
      inactiveTintColor:'#566573',
      labelStyle: {
        fontSize: Platform.OS === 'ios' ? 15: 10,
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

export  default AppointsTabs