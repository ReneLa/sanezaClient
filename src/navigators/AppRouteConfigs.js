import React from "react";
import {
    createStackNavigator,createSwitchNavigator
  } from 'react-navigation';
  
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignupScreen from '../screens/AuthScreens/SignupScreen'
import LoggedTabNavigator from './LoggedTabNavigator';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen'
import FinalSignUp from "../screens/AuthScreens/FinalSignUp";

export const SignedOut = createStackNavigator({
    LoginScreen: { screen: LoginScreen,
        navigationOptions:{
        header:null,
        gesturesEnabled:false,

    } },
    ForgotPassword:{screen:ForgotPasswordScreen,
        navigationOptions:{
            // header:null,
            gesturesEnabled:true
    
        } },
    Signup: { screen: SignupScreen,
        navigationOptions:{
            // header:null,
            gesturesEnabled:true
        }
     },
    Register: { screen: FinalSignUp,
        navigationOptions:{
            // header:null,
            gesturesEnabled:true
        }
     },
});

export const SignedIn = createStackNavigator( 
    {
        LoggedScreen:{
            screen: LoggedTabNavigator,
            navigationOptions:{
                header:null,
                gesturesEnabled:false,

            }
        },
    },
);

export const createRootNavigator = (signedIn=false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn,
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};
