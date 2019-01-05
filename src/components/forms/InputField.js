import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
        paddingBottom:5,
        paddingRight:10,
        fontSize:hp('2.5%'),
        // lineHeight:hp('2.4%'),
        flex:2
    },
    labelStyle:{  
        paddingLeft:10,
        flex:1,
        fontSize:hp('2%'),
    },
    containerStyle:{
        // width: wp('90%'),
        // height:Platform.OS === 'ios' ? 50 : 45,
        height: hp('7.2%'),
        flexDirection:'row',
        alignItems:'center',
        borderWidth:0.5,
        borderColor:colors.white
    }
})