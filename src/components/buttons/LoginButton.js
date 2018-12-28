import React from 'react';
import PropTypes from 'prop-types';
import { 
     Text,StyleSheet, TouchableOpacity,
      ImageBackground,Platform
    } from 'react-native';
import colors from '../../styles/colors'    
const buttonImage = require('../../images/buttonBack.jpg')


const LoginButton = ({handlePress,label,customStyle,disabled})=>{
    const {buttonStyle,labelStyle,imageStyle}= styles
    return(
        <TouchableOpacity
               disabled={disabled}
               onPress={handlePress} 
               style={[customStyle,buttonStyle]}>
        <ImageBackground source={buttonImage} style={imageStyle}>
           
              <Text style={labelStyle}>{label}</Text>
           
        </ImageBackground> 
        </TouchableOpacity>
    )
}


export {LoginButton}



const styles=StyleSheet.create({
    imageStyle:{
        height:'100%',
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:12,
        paddingBottom:12,
    },
    labelStyle:{
        fontSize:Platform.OS === 'ios' ? 22 : 18,
        fontWeight:Platform.OS === 'ios' ? '500' : '400',
        color:colors.white,

    },
    buttonStyle:{
        display:'flex',
        height:Platform.OS === 'ios' ? 55 : 45
    },

})