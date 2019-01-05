import React from 'react'
import {View,Text,StyleSheet,Modal,
    TouchableWithoutFeedback,TouchableOpacity,Platform} from'react-native'
import {FontAwesome} from '@expo/vector-icons'
import colors from '../../styles/colors'
import Button from '../../components/buttons/Button'

const PickerModal=({picker,modalVisible,onClose})=>{

    const {wrapperStyle,containerStyle,headerStyle,
           textStyle,
    }=styles
    return(
        <Modal 
           animationType={'slide'}
           visible={modalVisible}
           transparent
         >
          
            <View style={wrapperStyle}>
            
              <View style={containerStyle}>
                   <View style={headerStyle}>
                       <TouchableOpacity onPress={onClose}>             
                           <Text style={textStyle}>Done</Text>
                       </TouchableOpacity>  
                   </View> 
                   {picker} 
              </View> 
             
            </View>
            
        </Modal>
    )
}

const styles =StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        backgroundColor:'rgba(0,0,0,0)',
        position:'relative',
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    containerStyle:{
          position:'absolute',
          borderColor:'#D6DBDF',
          width:'100%',
          bottom:0,
          left:0,
          zIndex:-1,
          backgroundColor:'#fff',
        
    },
   headerStyle:{
       display:'flex',
       alignItems:'flex-end',
      
       padding:10,
       borderColor:colors.gray,
       borderWidth:1
   },
   textStyle:{
       color:colors.blue01,
       fontSize:18,
       fontWeight:'700'
   }
})

export default PickerModal