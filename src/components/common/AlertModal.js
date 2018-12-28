import React from 'react'
import {View,Text,StyleSheet,Modal,TouchableOpacity,Platform} from'react-native'
import {FontAwesome} from '@expo/vector-icons'
import colors from '../../styles/colors'
import Button from '../../components/buttons/Button'

const AlertModal=({firstLine,secondLine,modalVisible,onConfirm,onClose})=>{

    const {wrapperStyle,iconWrapper,container,firstTextWrapper,cancelButton,
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
                     <FontAwesome name="exclamation" color={'#fff'} size={50}/>
                     </View>
                     <View style={firstTextWrapper}>
                        <Text style={firstText}>
                         {"Are you sure "}
                         </Text>
                     </View>
                     <View style={secondTextWrapper}>
                     <Text style={secondText}>
                         {secondLine}
                     </Text>
                   
                     </View>
                     <View style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            }}>
                     <TouchableOpacity
                         onPress={onConfirm} 
                           style={[buttonStyle]}>
                          <Text style={[{color:colors.white,
                            fontSize:Platform.OS === 'ios' ? 20:15},labelStyle]}>OK</Text>
           
                      </TouchableOpacity> 
                      <TouchableOpacity
                         onPress={onClose} 
                           style={[cancelButton]}>
                          <Text style={[{color:colors.blue01,
                               fontSize:Platform.OS === 'ios' ? 20:15},labelStyle]}>Cancel</Text>
           
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
        backgroundColor:'rgba(0,0,0,0.6)',
        position:'relative',
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    container:{
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        bottom:0,
        left:0,
        borderWidth:1,
        borderRadius:4,
        borderColor:'#D6DBDF',
        width:'100%',
        backgroundColor:colors.white,
    },
    iconWrapper:{
        width:Platform.OS === 'ios' ? 100 : 70,
        height:Platform.OS === 'ios' ? 100 : 70 ,
        marginBottom:Platform.OS === 'ios' ? 20 :15,
        borderRadius:Platform.OS === 'ios' ? 100 :70,
        backgroundColor:colors.white,
        shadowColor: colors.gray01,
        shadowOffset: { height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        top:Platform.OS === 'ios' ? -50 : 0,
        borderColor:colors.gray,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center',
        zIndex:1
    },

    firstTextWrapper:{
      display:'flex',
      justifyContent:'space-evenly',
      paddingTop:10,
      paddingBottom:10,
      marginBottom:Platform.OS === 'ios' ? 20 :15
    },
    secondTextWrapper:{
        display:'flex',
        paddingTop:10,
      paddingBottom:10,
      marginBottom:Platform.OS === 'ios' ? 30 :20
    },
    firstText:{
        fontSize:Platform.OS === 'ios' ? 30 : 25,
        fontWeight:Platform.OS === 'ios' ? '600' :'500',
        color:'#000',

    },
    secondText:{
        fontSize:Platform.OS === 'ios' ? 20 : 15,
        fontWeight:Platform.OS === 'ios' ? '300' : '200',
        color:'#000',
        marginBottom:Platform.OS === 'ios' ? 15: 10
    },
    labelStyle:{
        fontWeight:Platform.OS === 'ios' ? '500' : '400',
        marginLeft:10,
        
    },
    buttonStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        height:Platform.OS === 'ios' ? 50 : 40,
        // marginLeft:5,
        // marginRight:5,
        // borderRadius:5,

        width:Platform.OS === 'ios' ? 250 : 200
    },
    cancelButton:{
        display:'flex',
        flex:1,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center',
        height:Platform.OS === 'ios' ? 50 : 40,
        borderWidth:1,
        borderColor:colors.gray01,
        // marginLeft:5,
        // marginRight:5,
        // borderRadius:5,
        width:Platform.OS === 'ios' ? 250 : 200
    }
})

export default AlertModal