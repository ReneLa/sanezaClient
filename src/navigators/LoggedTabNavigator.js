import React from 'react';
import {Platform} from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import {FontAwesome,EvilIcons,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../styles/colors'
import HomeTabNav from './HomeTabNav'
import OrdersTabs from './OrdersTabs'
import HeaderSearch from '../components/HeaderSearch';
import SingleShop from '../screens/Home/SingleShop'
import SearchScreen from '../screens/Home/Search/SearchScreen'
import BookServiceScreen from '../screens/Home/BookServiceScreen'
import BookingDetailScreen from '../screens/Home/BookingDetailScreen'
import PaymentScreen from '../screens/Home/PaymentScreen'
import MakeOrdersScreen from '../screens/Home/MakeOrdersScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen'
import ReviewsScreen from '../screens/Orders/ReviewScreen'
import AppointsTabs from './AppointsTabs';
import SearchResultsScreen from '../screens/Home/Search/SearchResultsScreen';

const HomeTab=createStackNavigator({

   HomeContainer: {screen: HomeTabNav,
     navigationOptions:{
      header: props=><HeaderSearch {...props}/>},
             gesturesEnables:false
        },
    SingleShop:{ screen: SingleShop },
    Search:{screen:SearchScreen,
      navigationOptions:{
        header:null},
               gesturesEnables:false
          },
    SearchResults:{screen:SearchResultsScreen},      
    BookService:{screen:BookServiceScreen}, 
    MakeOrders:{screen:MakeOrdersScreen},   
    BookingDetails:{screen:BookingDetailScreen},
    Payment:{screen:PaymentScreen}    

});

HomeTab.navigationOptions= ({navigation}) =>{
  let tabBarVisible=true;
  if(navigation.state.index> 0){
    tabBarVisible=false;
  }

  return {tabBarVisible}
}


const OrdersTab=createStackNavigator(
  {
    OrdersContainer:{ screen:OrdersTabs,

       navigationOptions:{
        title:"Saneza",
        headerStyle:{
        backgroundColor:colors.primary,
        elevation:2,
        borderBottomWidth:0,
        shadowColor: colors.gray,
        shadowOffset: { height: 1},
        shadowOpacity: 0.3,
        shadowRadius: Platform.OS === 'ios' ?5:2,

      },
      headerTitleStyle:{
        fontWeight:Platform.OS === 'ios' ?'700':'500',
        fontSize:Platform.OS === 'ios' ? 18: 14,
         color:colors.white
      },
      gesturesEnables:false
      }
    },

    Reviews:{screen:ReviewsScreen},

  }
)

OrdersTab.navigationOptions=({navigation})=>{
  let tabBarVisible=true;
  
  if(navigation.state.index> 0){
    tabBarVisible=false;
  }

  return {tabBarVisible}
}

const AppointmentsTab=createStackNavigator(
  {
    ApointmentsContainer:{ screen:AppointsTabs,

       navigationOptions:{
        title:"Saneza",
        headerStyle:{
        backgroundColor:colors.primary,
        elevation:2,
        borderBottomWidth:0,
        shadowColor: colors.gray01,
        shadowOffset: { height: 1},
        shadowOpacity: 0.3,
        shadowRadius: Platform.OS === 'ios' ?5:2,

      },
      headerTitleStyle:{
        fontWeight:Platform.OS === 'ios' ?'700':'500',
        fontSize:Platform.OS === 'ios' ? 18: 15,
         color:colors.white
      },
      gesturesEnables:false
      }
    },

    Reviews:{screen:ReviewsScreen},

  }
)

AppointmentsTab.navigationOptions=({navigation})=>{
  let tabBarVisible=true;
  
  if(navigation.state.index> 0){
    tabBarVisible=false;
  }

  return {tabBarVisible}
}


const ProfileTab=createStackNavigator({
  ProfileContainer:{screen:ProfileScreen,
  }
})

// ProfileTab.navigationOptions= ({navigation}) =>{
//   let tabBarVisible=true;
//   if(navigation.state.index> 0){
//     tabBarVisible=false;
//   }

//   return {tabBarVisible}
// }


const LoggedTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions:{
        tabBarLabel:'HOME',
        tabBarIcon:({ tintColor })=>(<FontAwesome name='home' size={Platform.OS === 'ios' ? 30 : 25}  color={tintColor}/>),
      }
    } ,
    Orders: {
      screen: OrdersTab,
      navigationOptions:{
        tabBarLabel:'ORDERS',
        tabBarIcon:({ tintColor })=>(<MaterialIcons name='playlist-add-check' size={Platform.OS === 'ios' ? 35 : 30} color={tintColor}/>)
      },
    },

    Appointments: {
      screen: AppointmentsTab,
      navigationOptions:{
        tabBarLabel:'APPOINTMENTS',
        tabBarIcon:({ tintColor })=>(<MaterialIcons name='event-note' size={Platform.OS === 'ios' ? 28 : 27} color={tintColor}/>)
      },
    },

    ProfileContainer:{
      screen:ProfileTab,
      navigationOptions:{
        tabBarLabel:'PROFILE',
        tabBarIcon:({ tintColor })=>(<EvilIcons name="user" color={tintColor} size={Platform.OS === 'ios' ? 35 : 30}/>)
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle:{
        fontWeight:Platform.OS === 'ios' ? '600': '500',
        marginBottom:5,
        
        // color:colors.black01
      },
      activeTintColor:colors.primary,
      inactiveTintColor:colors.black01,
    },

    tabBarPosition:'bottom'
   
  },
);

export default  LoggedTabNavigator