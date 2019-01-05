import React from 'react'
import {connect} from 'react-redux'
import {FontAwesome,Entypo} from '@expo/vector-icons'
import { 
   View, StyleSheet, Text,TouchableOpacity,Platform,
  KeyboardAvoidingView,ScrollView,ImageBackground,
 } from 'react-native';

import colors from '../../styles/colors'
const loginBackground =require('../../images/loginPaper.jpg');
import {InputField} from '../../components/forms/InputField'
import RoundedButton from '../../components/buttons/RoundedButton'

import {onValueChange,signupUser
      } from '../../redux/actions'
import { 
        widthPercentageToDP as wp, heightPercentageToDP as hp
      } from 'react-native-responsive-screen';

class SignupScreen extends React.Component{
  static navigationOptions=({navigation})=>({
   
    headerLeft:<RoundedButton customStyle={{marginLeft:5,width:45,height:45}}
                             handlePress={()=>{navigation.goBack()}} 
                             icon={<FontAwesome name="angle-left" 
                                         size={Platform.OS === 'ios' ? 35 : 30} color={colors.white}/>}/>,
    headerTransparent:true,
})
  
 
  onNextPress=()=>{
    this.props.navigation.navigate('Register')
  }    

  render(){
        const {imageWrapper,wrapper,scrollView,headerWrapper,
               loginHeader,underline,optionsButtons,cardContainer,cardContent,
               forgotPasswordText,signUpText}=styles

      const {onValueChange}=this.props
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

               <View style={{display:'flex',justifyContent:'center',marginTop:60}}>
                <View style={cardContainer}>
                <View style={[{paddingRight:3},cardContent]}>
                   <InputField  
                    label="First Name"
                    value={this.props.firstname}
                    onChangeText={value=>onValueChange({prop:'firstname',value})}  
                    textColor={colors.black01}
                    customStyle={{
                      alignItems:'left',backgroundColor:colors.gray01,
                     marginBottom:10,marginTop:10,borderRadius:4
                    }}
                   />
                 </View>
                 <View style={[{paddingLeft:3},cardContent]}>
                   <InputField  
                    label={"Last Name"}
                    value={this.props.lastname}
                    textColor={colors.black01}
                    onChangeText={value=>onValueChange({prop:'lastname',value})} 
                    customStyle={{
                      alignItems:'left',marginBottom:10,backgroundColor:colors.gray01,
                      marginTop:10,borderRadius:4
                    }}
                  /> 
                </View>
                </View>
                
                <InputField  
                    label={"User Name"}
                    value={this.props.username}
                    textColor={colors.black01}
                    onChangeText={value=>onValueChange({prop:'username',value})}  
                    
                    customStyle={{
                      alignItems:'center',marginBottom:10,
                      marginTop:10,borderRadius:4, backgroundColor:colors.gray01
                    }}
                    /> 
                <InputField  
                    label={"E-mail"}
                    value={this.props.email}
                    textColor={colors.black01}
                    onChangeText={value=>onValueChange({prop:'email',value})} 
                    customStyle={{
                      marginBottom:10,marginTop:10,
                      backgroundColor:colors.gray01,
                      borderRadius:4
                    }}
                    /> 

                <InputField  
                    secureTextEntry
                    label={"Password"}
                    value={this.props.password}
                    textColor={colors.black01}
                    onChangeText={value=>onValueChange({prop:'password',value})}  
                    customStyle={{
                      marginBottom:10,marginTop:10,
                      backgroundColor:colors.gray01,
                      borderRadius:4
                    }}
                /> 

                   <View style={{
                     display:'flex',
                    //  width:'100%',
                     padding:10,
                     marginTop:30,
                     alignItems:'center',
                     justifyContent:'center'
                   }}>
                      <TouchableOpacity 
                      onPress={this.onNextPress}
                         style={{
                           display:'flex',
                           height:hp('9%'),
                           width:wp('15%'),
                           borderRadius:65,
                           backgroundColor:colors.white,
                           alignItems:'center',
                           justifyContent:'center'
                         }}
                      >
                         <FontAwesome name={'angle-right'} size={hp('7%')} color={colors.primary}/>
                      </TouchableOpacity>
                   </View>

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
           onValueChange,signupUser
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
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:30,
    flex:1,
  },
  headerWrapper:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    marginTop:20,
    marginBottom:20,
  },
  
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

  cardContainer:{
     display:'flex',
     flexDirection:'row',
     
  },
  cardContent:{
    display:'flex',
    width:'50%',  
  },

})


