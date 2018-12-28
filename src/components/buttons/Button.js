import React from 'react';
import { 
     Text,StyleSheet, TouchableOpacity,Platform
    } from 'react-native';
import colors from '../../styles/colors'    


export default Button= ({handlePress,label,textColor,textSize,customStyle, disabled})=>{
    const {buttonStyle,labelStyle}= styles
    const color = textColor ||colors.black01
    
    return(
        <TouchableOpacity
               disabled={disabled}
               onPress={handlePress} 
               style={[customStyle,buttonStyle]}>
              <Text style={[{color,fontSize:textSize},labelStyle]}>{label}</Text>
           
        </TouchableOpacity>
    )
}




const styles=StyleSheet.create({
    labelStyle:{
        fontWeight:Platform.OS === 'ios' ? '500' : '400',
        marginLeft:10,
        
    },
    buttonStyle:{
        justifyContent:'center',
        alignItems:'center',
        height:Platform.OS === 'ios' ? 60 : 50,
        paddingLeft:5,
        paddingRight:5,
    },

})