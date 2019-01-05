import React from 'react';
import PropTypes from 'prop-types';
import { 
     Text,StyleSheet, TouchableOpacity,Platform,
    } from 'react-native';
import colors from '../../styles/colors'    
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

const ButtonWithIcon= ({handlePress,label,textColor,textSize,customStyle,icon, disabled})=>{
    const {buttonStyle,labelStyle}= styles
    const color =textColor ||colors.black01
    
    return(
        <TouchableOpacity
               disabled={disabled}
               onPress={handlePress} 
               style={[customStyle,buttonStyle]}>
              {icon}
              <Text style={[{color,fontSize:textSize},labelStyle]}>{label}</Text>
           
        </TouchableOpacity>
    )
}


export { ButtonWithIcon}



const styles=StyleSheet.create({
    labelStyle:{
        fontWeight:Platform.OS === 'ios' ?'500': '400',
        marginLeft:10,
        flex:1
    },
    buttonStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:hp('7.5%'),
        paddingLeft:5,
        paddingRight:5
    },

})