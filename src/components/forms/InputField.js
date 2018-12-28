import React from 'react'

import {TextInput,Text,View,Platform,StyleSheet} from 'react-native'
import colors from '../../styles/colors';

const InputField = ({label,value,onChangeText,placeholder,secureTextEntry,textColor,customStyle}) =>{
    const {containerStyle,labelStyle, inputStyle}= styles

    const color = textColor || colors.white
    return(
        <View style={[customStyle,containerStyle]}>
            <Text style={[labelStyle,{display:label?'flex':'none'}]}>{label}</Text>
             
            <TextInput
               secureTextEntry={secureTextEntry}
               autoCorrect={false}
               placeholder={placeholder}
               value={value}
               onChangeText={onChangeText}
               style={[{color},inputStyle]}
            />
        </View>
    )
}

export {InputField}

const styles=StyleSheet.create({
    inputStyle:{
        // color:colors.white,
        fontWeight:'400',
        paddingLeft:5,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:5,
        fontSize:20,
        lineHeight:23,
        flex:2
    },
    labelStyle:{  
        paddingLeft:10,
        flex:1
    },
    containerStyle:{
        height:Platform.OS === 'ios' ? 50 : 45,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:0.5,
        borderColor:colors.white
    }
})