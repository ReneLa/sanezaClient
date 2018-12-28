import React from 'react'
import {View,Text,StyleSheet,Modal,TouchableOpacity,Platform} from'react-native'
import {FontAwesome} from '@expo/vector-icons'
import colors from '../../styles/colors'
import Button from '../../components/buttons/Button'

const ConfirmModal=({firstLine,secondLine,modalVisible,onClose})=>{

    const {wrapperStyle,iconWrapper,container,firstTextWrapper,
        firstText,secondTextWrapper,secondText,buttonStyle,labelStyle
    }=styles
    return(
        <Modal 
           animationType={'slide'}
           visible={modalVisible}
           transparent
           onRequestClose={onClose}
         >
            <View style={wrapperStyle}>
              <View style={container}>
                      <View style={iconWrapper}>
                     <FontAwesome name="check" color={'#fff'} size={50}/>
                     </View>
                     <View style={firstTextWrapper}>
                        <Text style={firstText}>
                         {firstLine}
                         </Text>
                     </View>
                     <View style={secondTextWrapper}>
                     <Text style={secondText}>
                         {secondLine}
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
                            fontSize:Platform.OS === 'ios' ? 20: 15},labelStyle]}>OK</Text>
           
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
          width:Platform.OS === 'ios' ? 350 : 300,
          top:-10,
          zIndex:-1,
          backgroundColor:'#fff',
          alignItems:'center',
    },
    iconWrapper:{
        width:Platform.OS === 'ios' ? 100 :70,
        height:Platform.OS === 'ios' ? 100 : 70,
        marginBottom:Platform.OS === 'ios' ? 20 : 15,
        borderRadius:Platform.OS === 'ios' ? 100 : 70,
        backgroundColor:colors.white,
        shadowColor: colors.gray01,
        shadowOffset: { height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        top:Platform.OS === 'ios' ? -50 : -40,
        borderColor:colors.gray,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },

    firstTextWrapper:{
      display:'flex',
      justifyContent:'space-evenly',
      paddingTop:10,
      paddingBottom:10,
      marginBottom:Platform.OS === 'ios' ? 20 : 15
    },
    secondTextWrapper:{
        display:'flex',
        paddingTop:10,
      paddingBottom:10,
      marginBottom:Platform.OS === 'ios' ? 30 : 25
    },
    firstText:{
        fontSize:Platform.OS === 'ios' ? 30 : 25,
        fontWeight:Platform.OS === 'ios' ?'600' : '500',
        color:'#000',

    },
    secondText:{
        fontSize:Platform.OS === 'ios' ? 20: 15,
        fontWeight:Platform.OS === 'ios' ?'300' : '200',
        color:'#000',
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
        width:Platform.OS === 'ios' ? 300 : 250
    },
})

export default ConfirmModal