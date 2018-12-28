import React from 'react'
import {connect} from 'react-redux'
import {FontAwesome,Entypo} from '@expo/vector-icons'
import { 
   View, StyleSheet, Text,TouchableOpacity,
  KeyboardAvoidingView,ScrollView,ImageBackground,
  Picker
 } from 'react-native';

import colors from '../../styles/colors'
const loginBackground =require('../../images/loginPaper.jpg');
import {InputField} from '../../components/forms/InputField'
import {LoginButton} from '../../components/buttons/LoginButton'
import {
       emailChanged,passwordChanged,locationChanged,streetnameChanged,
       usernameChanged,firstnameChanged,lastnameChanged,phonenumberChanged,
       sexChanged,dateofbirthChanged,signupUser
      } from '../../redux/actions'




class SignupScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    onFirstnameChange(text){
        this.props.firstnameChanged(text)
      }
    onLastnameChange(text){
        this.props.lastnameChanged(text)
      }  
    onUsernameChange(text){
        this.props.usernameChanged(text)
      }  
    onEmailChange(text){
      this.props.emailChanged(text)
    }

    onPasswordChange(text){
      this.props.passwordChanged(text)
    }

    onPhonenumberChange(text){
        this.props.phonenumberChanged(text)
      }
    onSexChange(text){
        this.props.sexChanged(text)
      }
    onBirthDateChange(text){
        this.props.dateofbirthChanged(text)
      } 
    onLocationChange(text){
        this.props.locationChanged(text)
      } 
      
    onStreetnameChange(text){
        this.props.streetnameChanged(text)
      }  
      onSignInPress=()=>{
        this.props.navigation.navigate('LoginScreen')
      }
    onSignupPress(){
      const {
            firstname,lastname, email,location,phonenumber,
             password,username,sex,streetname,dateofbirth, signupUser} =this.props

      signupUser({
        location,streetname,phonenumber,username,
        firstname,lastname,dateofbirth,sex,password,email})
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
               loginHeader,underline,optionsButtons,cardContainer,cardContent,
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

                
                <View style={cardContainer}>
                <View style={[{paddingRight:3},cardContent]}>
                   <InputField  
                    placeholder={"First Name"}
                    value={this.props.firstname}
                    onChangeText={this.onFirstnameChange.bind(this)}  
                    textColor={colors.black01}
                    customStyle={{
                      alignItems:'left',backgroundColor:colors.gray01,
                      marginBottom:10,marginTop:10,borderRadius:4
                    }}
                   />
                 </View>
                 <View style={[{paddingLeft:3},cardContent]}>
                   <InputField  
                    placeholder={"Last Name"}
                    value={this.props.lastname}
                    textColor={colors.black01}
                    onChangeText={this.onLastnameChange.bind(this)}  
                    customStyle={{
                      alignItems:'left',marginBottom:10,backgroundColor:colors.gray01,
                      marginTop:10,borderRadius:4
                    }}
                  /> 
                </View>
                </View>
                
                <InputField  
                    placeholder={"User Name"}
                    value={this.props.username}
                    textColor={colors.black01}
                    onChangeText={this.onUsernameChange.bind(this)}  
                    // label={"User Name"}
                    customStyle={{
                      alignItems:'center',marginBottom:10,
                      marginTop:10,borderRadius:4, backgroundColor:colors.gray01
                    }}
                    /> 
                <InputField  
                    placeholder={"E-mail"}
                    value={this.props.email}
                    textColor={colors.black01}
                    onChangeText={this.onEmailChange.bind(this)}  
                    // label={"E-mail"}
                    customStyle={{
                      marginBottom:10,marginTop:10,
                      backgroundColor:colors.gray01,
                      borderRadius:4
                    }}
                    /> 

                <InputField  
                    secureTextEntry
                    placeholder={"Password"}
                    value={this.state.password}
                    textColor={colors.black01}
                    onChangeText={this.onPasswordChange.bind(this)}  
                    // label={"Password"}
                    customStyle={{
                      marginBottom:10,marginTop:10,
                      backgroundColor:colors.gray01,
                      borderRadius:4
                    }}
                /> 

                <InputField  
                    placeholder={"Tel Number"}
                    value={this.props.phonenumber}
                    textColor={colors.black01}
                    onChangeText={this.onPhonenumberChange.bind(this)}  
                    // label={"Tel Number"}
                    customStyle={{
                      marginBottom:10,marginTop:10,
                      backgroundColor:colors.gray01,
                      borderRadius:4
                    }}
                    /> 
  
                <View style={cardContainer}>
                 <View style={[{paddingRight:3},cardContent]}>
                  <InputField  
                    placeholder={"Sex"}
                    value={this.props.sex}
                    textColor={colors.black01}
                    onChangeText={this.onSexChange.bind(this)}  
                    // label={"Sex"}
                    customStyle={{
                      marginBottom:10,marginTop:10,
                      backgroundColor:colors.gray01,
                      borderRadius:4
                    }}
                    />  
                 </View> 
                 <View style={[{paddingLeft:3},cardContent]}>
                  <InputField  
                    placeholder={"Date-Of-Birth"}
                    value={this.props.dateofbirth}
                    textColor={colors.black01}
                    onChangeText={this.onBirthDateChange.bind(this)}  
                    // label={"Date-Of-Birth"}
                    customStyle={{
                      marginBottom:10,marginTop:10,
                      backgroundColor:colors.gray01,
                      borderRadius:4
                    }}
                    />  
                 </View> 
                </View>

                 {/* <View style={cardContainer}>
                 <View style={[{paddingRight:3},cardContent]}>
                   <InputField  
                    placeholder={"Location"}
                    value={this.props.location}
                    onChangeText={this.onLocationChange.bind(this)}  
                    // label={"Location"}
                    customStyle={{marginBottom:10,marginTop:10}}
                    /> 
                 </View>
                 <View style={[{paddingLeft:3},cardContent]}>
                   <InputField  
                    placeholder={"Street Name"}
                    value={this.props.streetname}
                    onChangeText={this.onStreetnameChange.bind(this)}  
                    // label={"Street Name"}
                    customStyle={{marginBottom:10,marginTop:10}}
                    />  
                  </View> 
                </View> */}
                  
                  {this.renderError()}

                 <LoginButton 
                     label={this.props.loading ? 'Am Loading' : 'SignUp'}
                      handlePress={this.onSignupPress.bind(this)}
                 />

                   <View style={optionsButtons}>
                        
                           <Text style={forgotPasswordText}>
                             Already Have account
                           </Text>
                         
                         <TouchableOpacity 
                         style={{alignSelf:'flex-end'}}
                         onPress={this.onSignInPress}
                         >
                           <Text style={signUpText}>
                             Sign In
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
  const {
    firstname,lastname, email,location,phonenumber,
    password,username,sex,streetname,dateofbirth, error,loading} = auth
  return{
        firstname,lastname, email,location,phonenumber,
        password,username,sex,streetname,dateofbirth,error, loading, 
  }
}


export default connect(mapStateToProps,{
          emailChanged,passwordChanged,locationChanged,
          streetnameChanged,usernameChanged,firstnameChanged,
          lastnameChanged,sexChanged,dateofbirthChanged,
          phonenumberChanged,signupUser
        })(SignupScreen)

const styles =StyleSheet.create({
  imageWrapper:{
    width:'100%',
    height:'100%',
  
  },
  wrapper:{
    display:'flex',
    flex:1,
  
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
    marginTop:40,
    marginBottom:30,
  } ,
  loginHeader:{
    fontSize:50,
    color:colors.white,
    fontWeight:'400',
    marginBottom:10,
  },
  underline:{
    borderWidth:4,
    width:'25%',
    borderColor:colors.white,
  },
  cardContainer:{
     display:'flex',
     flexDirection:'row',
     
  },
  cardContent:{
    display:'flex',
    width:'50%',  
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
    fontSize:23,
    fontWeight:'200',
    
    },

    signUpText:{
      fontSize:23,
      color:colors.white,
      fontWeight:'600',
     
    }

})


