import React from 'react'
import {connect} from 'react-redux'
import {FontAwesome,EvilIcons} from '@expo/vector-icons'
import { 
   View, StyleSheet, Text,Platform,TouchableOpacity,Picker,
  KeyboardAvoidingView,ScrollView,ImageBackground,
 } from 'react-native';

import colors from '../../styles/colors'
const loginBackground =require('../../images/loginPaper.jpg');
import {InputField} from '../../components/forms/InputField'
import {LoginButton} from '../../components/buttons/LoginButton'
import PickerModal from '../../components/common/PickerModal'
import {onValueChange,signupUser} from '../../redux/actions'
import RoundedButton from '../../components/buttons/RoundedButton'
import DatePick from '../../components/common/DatePick'
import axios from 'axios'
import onSignup from '../../auth'
import { 
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const Sex=[
  {id:1,name:'Male'},
  {id:2,name:'Female'}
]

const locations=[
  {id:1,name:'Kigali'},
  {id:2,name:'Muhanga'},
  {id:3,name:'Rubavu'},
  {id:4,name:'Nyabugogo'},
  {id:5,name:'Musanze'},
  {id:6,name:'Butare'}
]
class FinalSignUp extends React.Component{
  
  static navigationOptions=({navigation})=>({
   
    headerLeft:<RoundedButton customStyle={{marginLeft:5,width:45,height:45}}
                             handlePress={()=>{navigation.goBack()}} 
                             icon={<FontAwesome name="angle-left" 
                                         size={Platform.OS === 'ios' ? 35 : 30} color={colors.white}/>}/>,
    headerTransparent:true,
})

    constructor(props){
        super(props);
        this.state={
            isSexPick:false,
            isLocation:false,
            isDatePick:false,
            visible:false,
            showDate:false,
            loadingVisible:false,
        }
    }


  


    onBackPress=()=>{
        this.props.navigation.goBack()
      }
      
    onSignupPress(){
      const {
            firstname,lastname, email,location,phonenumber,
             password,username,sex,streetname,dateofbirth, signupUser} =this.props

      // signupUser({
      //   location,streetname,phonenumber,username,
      //   firstname,lastname,dateofbirth,sex,password,email})

      this.setState({ loadingVisible: true });
      
      const url = 'http://139.59.163.209:8080/public/client/register';
    
          axios({
            method: 'post',
            url,
            data:{
              "locationId":"321",
              "streetName":"chengdu",
              "phoneNumber":"132789930",
              "username":"Mehn",
              "firstName":"Me",
              "lastName":"Hnd",
              "birthdayStr":"2017-10-14",
              "sex":"1",
              "password":"12345678",
              "email":"mehn@gmail",
              "profileImage":"yeappp"
            },
            config:{header:{"Content-Type": "application/json"}}
        })
        .then((response) => {
          if (response.status == 200){
            // const userToBeSaved = response.data.RETURN_DATA.user
            

            //   AsyncStorage.setItem("client", JSON.stringify(userToBeSaved) )
            //     .then( ()=>{
            //         console.log("It was saved successfully")
            //       } )
            //  .catch( ()=>{
            //        console.log("There was an error saving the product")
            //     } )


            this.setState({isLogin:true})
          }
          else{
            this.setState({credits:false})
          }
      })   

    setTimeout(() => {
      
      if (this.state.isLogin) {
        this.setState({ loadingVisible: false });
        onSignup()
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

    
  choseSex=()=>{
      this.setState({
          isSexPick:true,
          visible:true
      })
  }

  doneSexPick(){
      this.setState({
          visible:false,
          isSexPick:false,
      })
  }

  choseLocation=()=>{
    this.setState({
        isLocation:true,
        visible:true
    })
}

doneLocationPick=()=>{
    this.setState({
        visible:false,
        isDLocation:false,
    })
}

choseDate=()=>{
    this.setState({
        isDatePick:true,
        visible:true
    })
}

doneDatePick=(id)=>{
    this.setState({
        visible:false,
        isDatePick:false,
    })
}

    renderPicker(){
      const {sex,location
      } = this.props

      if(this.state.isSexPick){           
          return(
              <PickerModal 
                modalVisible={this.state.visible}
                onClose={this.doneSexPick.bind(this)}  
                picker={
                 <Picker
                  style={{width:'100%',height:'100%'}}
                   selectedValue={sex}
                   onValueChange={value => this.props.onValueChange('sex',value)}  
                >
                   {Sex.map((sx,i) =>{
                    return(
                      <Picker.Item key={sx.id} label={sx.name} value={sx.id} />
                   )
                    })}  
           </Picker>
            }
            />
          )
      }

      if(this.state.isLocation){
          
          return(
              <PickerModal modalVisible={this.state.visible}
                    onClose={this.doneLocationPick.bind(this)}  
                    picker={
                      <Picker
                      style={{height:'100%',width:'100%'}}
                      selectedValue={location}
                      onValueChange={value => this.props.onValueChange('location',value)}
                       >
                         {locations.map((loc,i) =>{
                          return(
                             <Picker.Item key={loc.id} label={loc.name} value={loc.id} />
             
                          )
                         })}  
                     </Picker>
                    }
               />
               
          )
      }


      if(this.state.isDatePick){
          return(
            <DatePick
               modalVisible={this.state.visible}
               close={this.doneDatePick}
               set={onValueChange}
               prop={'dateofbirth'}
         />
             
          )
      }
  }

  render(){
        const {imageWrapper,wrapper,scrollView,headerWrapper,selecterButton,labelWrapper,
               loginHeader,underline,cardContainer,cardContent,label
         }=styles

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

                <InputField  
                    label={"Tel Number"}
                    value={this.props.phonenumber}
                    textColor={colors.black01}
                    onChangeText={value=>onValueChange({prop:'phonenumber',value})}  
                    customStyle={{
                      marginBottom:10,marginTop:10,
                      backgroundColor:colors.gray01,
                      borderRadius:3
                    }}
                    /> 
  
                <View style={cardContainer}>
              
                 <View style={[{paddingRight:3},cardContent]}>
                 <View style={selecterButton}>
                  <View style={[{flex:0.5, borderRightColor:colors.black02, justifyContent:'center',
                                 borderRightWidth:1},labelWrapper]}>
                     <Text style={label}>Sex</Text>
                  </View>
                  <TouchableOpacity  onPress={this.choseSex}
                     style={[{flex:2.5 ,flexDirection:'row',
                        },labelWrapper]}>
                    <View style={{flex:1.5,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Text style={label}>
                       {this.props.sex}
                       
                     </Text> 
                     </View>
                     <View style={{flex:0.5,display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <EvilIcons name='arrow-down' size={hp('4.5%')} color={colors.black01}/>
                     </View>
                  </TouchableOpacity>

                </View>
                 
                 </View> 
                 <View style={[{paddingLeft:3},cardContent]}>
                 <View style={selecterButton}>
                 <View style={[{flex:1, borderRightColor:colors.black02, justifyContent:'center',
                                 borderRightWidth:1},labelWrapper]}>
                     <Text style={label}>Date-Of-Birth</Text>
                  </View>
                  <TouchableOpacity onPress={this.choseDate}
                      style={[{flex:2,flexDirection:'row',
                        },labelWrapper]}>
                    <View style={{flex:1.5,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Text style={label}>
                       {/* {this.props.dateofbirth}*/}
                        2000-12-10
                     </Text> 
                     </View>
                     <View style={{flex:0.5,display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <EvilIcons name='arrow-down' size={hp('4.5%')} color={colors.black01}/>
                     </View>
                  </TouchableOpacity>

                </View>
                  
                 </View> 
                </View> 

                 <View style={cardContainer}>
                 <View style={[{paddingRight:3},cardContent]}>

                 <View style={selecterButton}>
                 <View style={[{flex:1, borderRightColor:colors.black02, justifyContent:'center',
                                 borderRightWidth:1},labelWrapper]}>
                     <Text style={label}>Location</Text>
                  </View>
                  <TouchableOpacity onPress={this.choseLocation}
                     style={[{flex:2,flexDirection:'row',
                        },labelWrapper]}>
                    <View style={{flex:1.5,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Text style={label}>
                       {/* {this.props.dateofbirth}*/}
                        Kigali
                     </Text> 
                     </View>
                     <View style={{flex:0.5,display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <EvilIcons name='arrow-down' size={hp('4.5%')} color={colors.black01}/>
                     </View>
                  </TouchableOpacity>

                </View>
                 </View>
                 <View style={[{paddingLeft:3},cardContent]}>
                   <InputField  
                    label={"Street Name"}
                    textColor={colors.black01}
                    value={this.props.streetname}
                    onChangeText={value=>onValueChange({prop:'streetname',value})} 
                    customStyle={{
                        marginBottom:10,marginTop:10,
                        backgroundColor:colors.gray01,
                        borderRadius:3
                      }}
                    />  
                  </View> 
                </View>
                  
  

                  <LoginButton 
                    label={'SignUp'}
                    handlePress={this.onSignupPress.bind(this)}
                    customStyle={{borderRadius:30,margin:40}}
                 />

              

                    </View> 
                    
                </ScrollView>
             {this.renderPicker()} 
             {/* <DatePick
                modalVisible={this.state.isDatePick}
                close={this.doneDatePick}
                set={onValueChange}
                prop={'dateofbirth'}
             /> */}
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


export default connect(mapStateToProps,{onValueChange,signupUser
        })(FinalSignUp)

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
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:30,
    flex:1,
  },
  headerWrapper:{
    display:'flex',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom:20,
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
  label:{
    fontSize:hp('1.9%'),
  },
  cardContainer:{
     display:'flex',
     flexDirection:'row',
     
  },
  cardContent:{
    display:'flex',
    width:'50%',  
  },
 selecterButton:{
   display:'flex',
   flexDirection:'row',
   backgroundColor:colors.gray01,
   height: hp('7.2%'),
   marginBottom:10,marginTop:10,
 },
 labelWrapper:{
   display:'flex',
  //  height: hp('7.2%'),
   alignItems:'center',
   padding:5
 }

})


