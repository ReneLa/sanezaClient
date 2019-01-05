import React from 'react'
import {View, Text, StyleSheet,TextInput,Image,KeyboardAvoidingView,Platform,AsyncStorage} from 'react-native'
import colors from '../styles/colors'
import {connect} from 'react-redux'
import {getClientById} from '../redux/actions'
const salonImage= require('../images/salon4.jpg')
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

class UserInfo extends React.Component{

    componentDidMount=async()=>{
        const retrievedItem =  await AsyncStorage.getItem("client");
        const item = JSON.parse(retrievedItem);
        this.props.getClientById(item.clientId)
    }

    render(){
       
        const {wrapperStyle,infotWrapperStyle,iconWrapper}=styles
        const {currentUser}=this.props
        const data = currentUser ? currentUser.data : ''
        return(
            <View style={wrapperStyle}>
            <View style={{display:'flex', alignItems:'center'}}>
              <View style={iconWrapper}>
                 <Image source={salonImage} style={{width:'100%',height:'100%'}}/>
              </View>
            </View>
            <View style={infotWrapperStyle}>
              <View style={{flex:1, alignItems:'flex-start',justifyContent:'center'}}>
                 <Text style={{color:colors.black02,fontSize:hp('2.3%'),fontWeight:'300'}}>
                   Contact
                 </Text>
             </View>

             <View style={{flex:2,paddingLeft:10,alignItems:'flex-start',justifyContent:'center'}}>
                 <Text style={{flex:2,color:colors.black01,fontSize:hp('2.7%'),fontWeight:'400'}}>
                   {data !== '' ? data.firstName:data +"  "+ data !== '' ? data.lastName:data }
                 </Text>
             </View>
         </View>
         

         <View style={infotWrapperStyle}>
              <View style={{flex:1, alignItems:'flex-start',justifyContent:'center'}}>
                 <Text style={{color:colors.black02,fontSize:hp('2.3%'),fontWeight:'300'}}>
                  Phone Number
                 </Text>
             </View>

             <View style={{flex:2,paddingLeft:10,alignItems:'flex-start',justifyContent:'center'}}>
                 <Text style={{flex:2,color:colors.black01,fontSize:hp('2.7%'),fontWeight:'400'}}>
                   {data !== '' ? data.phoneNumber:data}
                 </Text>
             </View>
         </View>
         <View style={infotWrapperStyle}>
              <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                 <Text style={{color:colors.black02,fontSize:hp('2.3%'),fontWeight:'300'}}>
                  Email
                 </Text>
             </View>

             <View style={{flex:2,paddingLeft:10,alignItems:'flex-start',justifyContent:'center'}}>
                 <Text style={{flex:2,color:colors.black01,fontSize:hp('2.7%'),fontWeight:'400'}}>
                   {data !== '' ? data.email:data }
                 </Text>
             </View>
         </View>
            </View>
        )
    }
}
 function mapStateToProps({user}){
     const {currentUser}=user
     return{
         currentUser
     }
 }

export default connect(mapStateToProps,{getClientById})(UserInfo)

const styles= StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        padding:10,
        backgroundColor:colors.white,
        marginTop:15
    },
    infotWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        padding:5
    },

    iconWrapper:{
        display:'flex',
        width:wp('25%'),
        height:hp('14%'),
        // margin:Platform.OS === 'ios' ? 20: 15,
        borderRadius:5,
        top:-20

    },
    
})