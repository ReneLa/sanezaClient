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
import {usernameChanged,passwordChanged,loginUser,saveUser} from '../../redux/actions'
import { onSignIn } from "../../auth"
import axios from 'axios'
import Notification from '../../components/Notification'



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
            
            const userKey=response.data.RETURN_DATA.token
            AsyncStorage.setItem('auth_key', userKey);
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
  
    renderError(){
      if(this.props.error){
        return(
          <View style={{display:"flex", backgroundColor:"#fff"}}>
            <Text style={{ color:"red",fontSize:25,}}>{this.props.error}</Text>
          </View>
        )
      }
    }

  render(){
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
              style={[wrapper]}>
                <ScrollView contentContainerStyle={scrollView}>
              
                <View style={headerWrapper}>
                <Text style={loginHeader}>
                  Saneza
                  </Text>
                  <View style={underline}/>
                </View>  

                <InputField  
                    placeholder={"hviewTech"}
                    value={this.props.username}
                    onChangeText={this.onUsernameChange.bind(this)}  
                    label={<FontAwesome name="user-circle" size={Platform.OS === 'ios' ? 45 : 30} color={colors.white}
                   
                  />}
                    customStyle={{marginBottom:30,marginTop:20}}
                    /> 

                <InputField  
                    secureTextEntry
                    placeholder={"password"}
                    value={this.state.password}
                    onChangeText={this.onPasswordChange.bind(this)}  
                    label={<Entypo name="key" size={Platform.OS === 'ios' ? 45 : 30} color={colors.white}/>}
                    customStyle={{marginBottom:30}}
                    /> 
                  {this.renderError()}

                 <LoginButton 
                     label={'LOGIN'}
                      handlePress={this.onLoginPress.bind(this)}
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
          usernameChanged,passwordChanged,loginUser
        })(LoginScreen)

const styles =StyleSheet.create({
  imageWrapper:{
    width:'100%',
    height:'100%',
  
  },
  wrapper:{
    display:'flex',
    flex:1,
    flexDirection:'row'
  },
  scrollView:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:30,
    flex:1,
  },
  headerWrapper:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:Platform.OS === 'ios' ? 60 : 40,
    marginBottom:Platform.OS === 'ios' ? 80: 60,
  } ,
  loginHeader:{
    fontSize:Platform.OS === 'ios' ? 50 : 30,
    color:colors.white,
    fontWeight:'400',
    marginBottom:10,
  },
  underline:{
    borderWidth:Platform.OS === 'ios' ? 3:2,
    width:'35%',
    borderColor:colors.white,
  },
  optionsButtons:{
    display:'flex', 
    flexDirection:'row',
    justifyContent: 'space-between',
    marginLeft:20,
    marginRight:20,
    marginTop:30
  },
  forgotPasswordText:{
    color:colors.white,
    fontSize:Platform.OS === 'ios' ? 23 :16,
    fontWeight:Platform.OS === 'ios' ? '200': '100',
    
    },

    signUpText:{
      fontSize: Platform.OS === 'ios' ? 23 : 16,
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


