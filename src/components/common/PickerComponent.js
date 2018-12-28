import React from 'react'
import {View,Picker,Text,StyleSheet} from 'react-native'
import colors from '../../styles/colors'

const PickerComponent =({listing,prop,onChangeValue,visible})=>{
    const {pickerStyle} = styles
    return(
        <View style={pickerStyle}>
             <Picker
                style={{width:'100%',height:'100%'}}
               selectedValue={prop}
               onValueChange={onChangeValue}
             >
             {listing.map((list,i) =>{
                 return(
                    <Picker.Item key={i} label={list.label} value={list.value} />
                 )
             })}
             
             </Picker>
        </View>
         
    )
}

export default PickerComponent

const styles=StyleSheet.create({
    pickerStyle:{
        
        bottom:0,
        left:0,
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor:colors.black01,
        
    },
})