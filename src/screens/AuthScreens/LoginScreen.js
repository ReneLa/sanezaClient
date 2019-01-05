import React from 'react'
import {connect} from 'react-redux'
import {FontAwesome,Entypo} from '@expo/vector-icons'
import { 
   View, StyleSheet, Text,TouchableOpacity,Platform,ActivityIndicator,
  KeyboardAvoidingView,ScrollView,ImageBackground,AsyncStorage
 } from 'react-native';

import colors from '../../styles/colors'
const loginBackground =require('../../images/loginPaper.jpg');
import {InputField} from '../../components/forms/InputField'
import {LoginButton} from '../../components/buttons/LoginButton'
import {usernameChanged,passwordChanged,loginUser,onValueChange} from '../../redux/actions'
import { onSignIn } from "../../auth"
import axios from 'axios'
import Notification from '../../components/Notification'
import { 
        widthPercentageToDP as wp, heightPercentageToDP as hp
      } from 'react-native-responsive-screen';


class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:'',
            credits:true,
            isLogin:false,
            loadingVisible:false
        }
        this.handleCloseNotification = this.handleCloseNotification.bind(this)
    }


    onUsernameChange(text){
      this.props.usernameChanged(text)
    }

    onPasswordChange(text){
      this.props.passwordChanged(text)
    }

    handleCloseNotification() {
      this.setState({ credits: true });
    }

    onLoginPress(){
      const {username, password,loginUser,user,error} =this.props
      const {navigate} = this.props.navigation

      this.setState({ loadingVisible: true });
      
      // loginUser(username,password)
      const url = 'http://139.59.163.209:8080/public/client/login';
    
          axios({
            method: 'post',
            url,
            data:{
                "username":username,
                "password":password
            },
            config:{header:{"Content-Type": "application/json"}}
        })
        .then((response) => {
          if (response.status == 200){
            const userToBeSaved = response.data.RETURN_DATA.user
            

              AsyncStorage.setItem("client", JSON.stringify(userToBeSaved) )
                .then( ()=>{
                    console.log("It was saved successfully")
                  } )
             .catch( ()=>{
                   console.log("There was an error saving the product")
                } )

            this.setState({isLogin:true})
          }
          else{
            this.setState({credits:false})
          }
      })   

    setTimeout(() => {
      
      if (this.state.isLogin) {
        this.setState({ loadingVisible: false });
        onSignIn()
           .then(()=>{
               navigate('LoggedScreen')
            })
          .catch(() => { 
        console.log('no user found')
      });
      } else {
        this.setState({ credits: false, loadingVisible: false });
      }
    }, 2000);
    
   
    }

  

    onForgotPasswordPress(){
      this.props.navigation.navigate('ForgotPassword')
    }
    onSignupPress(){
      this.props.navigation.navigate('Signup')
    }
  

  render(){
        const {onValueChange}=this.props

        const {imageWrapper,wrapper,scrollView,headerWrapper,
               loginHeader,underline,optionsButtons,
               forgotPasswordText,signUpText}=styles

               const showNotification = !this.state.credits;
               const notificationMarginTop = showNotification ? 10 : 0;
               
    return(
      <ImageBackground source={loginBackground}  
                       style={imageWrapper}>
                       {
                         this.state.loadingVisible ?
                          <View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                             <ActivityIndicator color={colors.white} size={'large'}/>
                         </View>
                         :

                       
          <KeyboardAvoidingView
            behavior="padding"
              style={[wrapper]}
              
              >
                <ScrollView contentContainerStyle={scrollView}>
              
                <View style={headerWrapper}>
                <Text style={loginHeader}>
                  Saneza
                  </Text>
                  <View style={underline}/>
                </View>  

                <InputField  
                    placeholder={"username"}
                    value={this.props.username}
                    onChangeText={value=>onValueChange({prop:'username',value})}  
                    label={<FontAwesome name="user-circle" size={hp('5.5%')} color={colors.white}
                   
                  />}
                    customStyle={{width: wp('90%'),marginBottom:30,marginTop:20}}
                    /> 

                <InputField  
                    secureTextEntry
                    placeholder={"password"}
                    value={this.props.password}
                    onChangeText={value=>onValueChange({prop:'password',value})}   
                    label={<Entypo name="key" size={hp('5.5%')} color={colors.white}/>}
                    customStyle={{width: wp('90%'),marginBottom:30}}
                    /> 
                 

                 <LoginButton 
                     label={'LOGIN'}
                      handlePress={this.onLoginPress.bind(this)}
                      customStyle={{width:wp('70%'),borderRadius:5}}
                 />

                   <View style={optionsButtons}>
                         <TouchableOpacity
                         style={{alignSelf:'flex-start'}}
                         onPress={this.onForgotPasswordPress.bind(this)}
                         >
                           <Text style={forgotPasswordText}>
                             Forgot Password
                           </Text>
                         </TouchableOpacity>
                         <TouchableOpacity 
                         style={{alignSelf:'flex-end'}}
                         onPress={this.onSignupPress.bind(this)}
                         >
                           <Text style={signUpText}>
                             Sign Up
                           </Text>
                         </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
                  <Notification
                    showNotification={showNotification}
                     handleCloseNotification={this.handleCloseNotification}
                     type="Error"
                     firstLine="Those credentials don't look right."
                     secondLine="Please try again."
                    />
        </View>
           </KeyboardAvoidingView>
          }
          </ImageBackground>
    )
  }
}
 
const mapStateToProps =({auth}) =>{
  const {username,password,error,loading,user} = auth
  return{
        username, password, error, loading,user
  }
}


export default connect(mapStateToProps,{
          onValueChange,loginUser
        })(LoginScreen)

const styles =StyleSheet.create({
  imageWrapper:{
    width:'100%',
    height:'100%',
  },
  wrapper:{
    display:'flex',
    flex:1,
    flexDirection:'row',
   
  },
  scrollView:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:30,
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },
  headerWrapper:{
    display:'flex',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:Platform.OS === 'ios' ? 60 : 40,
    marginBottom:Platform.OS === 'ios' ? 80: 60,
  } ,
  loginHeader:{
    fontSize:hp('7%'),
    color:colors.white,
    fontWeight:'400',
    marginBottom:10,
  },
  underline:{
    display:'flex',
    
    borderWidth:hp('0.3%'),
    width:wp('30%'),
    borderColor:colors.white,
  },
  optionsButtons:{
    display:'flex', 
    flexDirection:'row',
    width:'100%',
    justifyContent: 'space-evenly',
    marginLeft:20,
    marginRight:20,
    marginTop:30
  },
  forgotPasswordText:{
    color:colors.white,
    fontSize:hp('3%'),
    fontWeight:Platform.OS === 'ios' ? '200': '100',
    
    },

    signUpText:{
      fontSize: hp('3.2%'),
      color:colors.white,
      fontWeight:Platform.OS === 'ios' ? '600' : '500',  
    },
    notificationWrapper: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },

})


