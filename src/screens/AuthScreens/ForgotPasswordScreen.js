import React from 'react'
import {connect} from 'react-redux'
import {FontAwesome,Entypo} from '@expo/vector-icons'
import { 
   View, StyleSheet, Text,TouchableOpacity,Platform,
  KeyboardAvoidingView,ScrollView,ImageBackground,AsyncStorage
 } from 'react-native';

import colors from '../../styles/colors'
const loginBackground =require('../../images/loginPaper.jpg');
import {InputField} from '../../components/forms/InputField'
import {LoginButton} from '../../components/buttons/LoginButton'
import {usernameChanged,passwordChanged,loginUser,saveUser} from '../../redux/actions'
import { onSignIn } from "../../auth"
import axios from 'axios'



class ForgotPasswordScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }


    onUsernameChange(text){
    //   this.props.usernameChanged(text)
    }

    onPhonenumberChange(text){
    //   this.props.phonenumberChanged(text)
    }

  

    

    onSigninPress(){
      this.props.navigation.navigate('LoginScreen')
    }
  
  render(){
        const {imageWrapper,wrapper,scrollView,headerWrapper,
               loginHeader,underline,optionsButtons,
               forgotPasswordText,signUpText}=styles
    return(
      <ImageBackground source={loginBackground}  
                       style={imageWrapper}>
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
                    customStyle={{marginBottom:30,marginTop:20}}
                    /> 

                <InputField  
                    
                    placeholder={"phone number"}
                    value={this.state.password}
                    onChangeText={this.onPhonenumberChange.bind(this)}  
                   
                    customStyle={{marginBottom:30}}
                    /> 
                 

                 <LoginButton 
                     label={'Change Password'}
                      
                 />

                   <View style={optionsButtons}>
                   <TouchableOpacity 
                         style={{alignSelf:'flex-end'}}
                         onPress={this.onSigninPress.bind(this)}
                         >
                           <Text style={signUpText}>
                             Back
                           </Text>
                         </TouchableOpacity>
                        
                    </View>
                </ScrollView>
           
           </KeyboardAvoidingView>
          </ImageBackground>
    )
  }
}
 
const mapStateToProps =({auth}) =>{
  const {username,password,error,loading,userKey,isLoggedIn} = auth
  return{
        username, password, error, loading,userKey,isLoggedIn
  }
}


export default connect(mapStateToProps,{
          usernameChanged,passwordChanged,loginUser,saveUser
        })(ForgotPasswordScreen)

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
    }

})


