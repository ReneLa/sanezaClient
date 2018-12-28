import React from 'react'
import {Entypo,FontAwesome} from '@expo/vector-icons'
import {View, Text, StyleSheet,TouchableOpacity,Platform} from 'react-native'
import colors from '../../styles/colors'

const HourList= ({date, handlePress})=>{
    const {wrapperStyle,dateWrapper,iconWrapper,nameText}=styles
    return(
        <TouchableOpacity style={[wrapperStyle]}
             onPress={handlePress}>

             <View style={{flex:1}} >
                 <Entypo name='menu' color={colors.gray} size={Platform.OS === 'ios' ? 40: 35}/>
             </View>
            
          <View style={dateWrapper}>
              <Text style={nameText}>{date}</Text>
            
           </View>
           <View style={iconWrapper}>
             <FontAwesome name={'angle-right'} size={Platform.OS === 'ios' ? 45:40} color={colors.black01}/>
            </View>
            
            </TouchableOpacity>
        )
}


export default HourList

const styles = StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:colors.white,
        borderColor:'#D5D8DC',
        borderWidth:0.5,
        marginTop:5,
        marginBottom:5,
        padding:10,
        height:Platform.OS === 'ios' ? 70 : 50
    },
  
   
    dateWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex:2
    },
    nameText:{
        fontSize:Platform.OS === 'ios' ? 20 : 16,
        fontWeight:Platform.OS === 'ios' ? '400': '300',
        color:"#000"
    },

    iconWrapper:{
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'center',
        flex:1,
        paddingRight:5
    }
})