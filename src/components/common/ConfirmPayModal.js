import React from 'react'
import {View,Text,StyleSheet,Modal,TouchableOpacity,Image,Platform} from'react-native'
import {FontAwesome} from '@expo/vector-icons'
import colors from '../../styles/colors'
import Button from '../../components/buttons/Button'
const salonImage= require('../../images/salon4.jpg')

const ConfirmPayModal=({shop, location,amount,modalVisible,onClose})=>{

    const {wrapperStyle,iconWrapper,image,container,firstTextWrapper,
        firstText,secondTextWrapper,secondText,buttonStyle,labelStyle
    }=styles
    
    return(
        <Modal 
           animationType={'fade'}
           visible={modalVisible}
           transparent
           onRequestClose={onClose}
         >
            <View style={wrapperStyle}>
              <View style={container}>
                      <View style={iconWrapper}>
                        <Image source={salonImage} style={{height:'100%',width:'100%'}}/>
                     </View>
                     <View style={firstTextWrapper}>
                        <Text style={firstText}>
                         {amount+"  Rwf"}
                         </Text>
                     </View>
                     <View style={secondTextWrapper}>
                        <Text style={secondText}>
                         {"payment @ "+ shop}
                         </Text>
                         <Text style={secondText}>
                         {location}
                         </Text>
                     </View>
                     
                     <View style={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            marginBottom:Platform.OS === 'ios' ? 20 :15,
                            marginTop: Platform.OS === 'ios' ? 15 : 10
                            }}>
                     <TouchableOpacity
                         onPress={onClose} 
                           style={[buttonStyle]}>
                          <Text style={[{color:colors.white,
                            fontSize:Platform.OS === 'ios' ? 20: 15},labelStyle]}>Pay</Text>
           
                      </TouchableOpacity> 
                      </View>
                  </View> 
            </View>
        </Modal>
    )
}

const styles =StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        backgroundColor:'rgba(0,0,0,0.45)',
        position:'relative',
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    container:{
          display:'flex',
          flexDirection:'column',
          borderWidth:1,
          borderRadius:5,
          borderColor:'#D6DBDF',
          marginLeft:10,
          marginRight:10,
          width:Platform.OS === 'ios' ? 320 : 290,
          top:-10,
          zIndex:-1,
          backgroundColor:'#fff',
          alignItems:'center',
    },
    iconWrapper:{
        display:'flex',
        width:Platform.OS === 'ios' ? 80: 60,
        height:Platform.OS === 'ios' ? 70: 60,
        top:Platform.OS === 'ios' ? -15 : -10,
        borderRadius:3,
        // backgroundColor:colors.black01,
        // borderWidth:1,
        // borderColor:colors.black01,
        alignItems:'center',
        justifyContent:'center'
    },

    firstTextWrapper:{
      display:'flex',
      justifyContent:'space-evenly',
      paddingTop:10,
      paddingBottom:10,
      marginBottom:Platform.OS === 'ios' ? 10 : 10
    },
    secondTextWrapper:{
        display:'flex',
       
      paddingBottom:10,
    },
    firstText:{
        fontSize:Platform.OS === 'ios' ? 30 : 25,
        fontWeight:Platform.OS === 'ios' ?'600' : '500',
        color:colors.black01,

    },
    secondText:{
        fontSize:Platform.OS === 'ios' ? 16: 16,
        fontWeight:Platform.OS === 'ios' ?'300' : '200',
        color:colors.black02,
    },
    labelStyle:{
        fontWeight:Platform.OS === 'ios' ? '500' : '400',
        marginLeft:10,
        
    },
    buttonStyle:{
        display:'flex',
        backgroundColor:colors.blue01,
        justifyContent:'center',
        alignItems:'center',
        height:Platform.OS === 'ios' ? 50 : 40,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        width:Platform.OS === 'ios' ? 250 : 200
    },
})

export default ConfirmPayModal