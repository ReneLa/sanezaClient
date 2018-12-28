import React from 'react'
import {FontAwesome}from '@expo/vector-icons'
import {View,StyleSheet,Text,Platform} from 'react-native'
import colors from '../../styles/colors'
import IconButton from '../../components/buttons/IconButton'


const Item = ({name,number,date,price})=>{
    const {wrapperStyle,textStyle}=styles
    return(
        <View style={wrapperStyle}>
           <Text style={{
               flex:0.5,
               fontSize:Platform.OS === 'ios' ? 16:13,
               color:colors.black01}}>{number}</Text>
           <Text style={textStyle}>{name}</Text>
           <Text style={textStyle}>{date}</Text>
           <Text style={{
                   flex:0.5,
                   fontSize:Platform.OS === 'ios' ? 18 : 15,
                   color:colors.black01,
                   fontWeight:Platform.OS === 'ios' ? '600' :'500'
                   }}>{price}</Text>
        </View>
    )
}

export default Item


const styles = StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flexDirection:'row',
       
        backgroundColor:colors.gray01,
        marginTop:Platform.OS === 'ios' ?5:3,
        marginBottom:Platform.OS === 'ios' ? 5:3,
        padding:Platform.OS === 'ios' ? 10: 5,
    },
     textStyle:{    
            fontSize:Platform.OS === 'ios' ? 18 : 14,
            fontWeight:Platform.OS === 'ios' ? '500':'400',
            color:colors.black01,
            flex:1  
    },
    
})
