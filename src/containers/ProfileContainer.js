import React, { Component } from 'react';
import {EvilIcons,FontAwesome,AntDesign} from '@expo/vector-icons'
import { View,Text,StyleSheet,TouchableOpacity,AsyncStorage,Image,Platform} from 'react-native';
import colors from '../styles/colors'
import RoundedButton from '../components/buttons/RoundedButton';
import {connect} from 'react-redux';
import {getClientById} from "../redux/actions"
// const AvatorImage = require('../images/icons/user.jpg')
// const backgroundImage= require('../images/signup.jpg');



class ProfileContainer extends Component{
  
 constructor(props){
        super(props);

        this.onEditPress=this.onEditPress.bind(this)
        this.trackOrders=this.trackOrders.bind(this)
        this.state={
            
        }
        
    }
   
    componentDidMount= async()=>{
        const clientId=4
        // let myID= await AsyncStorage.getItem('auth_key')
         
        //  console.log(myID)
        this.props.getClientById(clientId)
    }

   

    onEditPress(){
        alert('Edit your Profile')
    }

    trackOrders(){
       this.props.navigation.navigate('Completed')
    }
    render(){
        const {currentUser}=this.props
        
    
        const data = currentUser ? currentUser.data : ''
        const orders= currentUser ? currentUser.completed:0
        const pend = currentUser? this.props.currentUser.pending: 0

        // console.log(pend,data,orders)
        return(
            
            <View style={styles.wrapper}>
                <View style={styles.avatorImage}>
                   {/* <Image source={client.propfilePicture}/> */}
                </View>
               
             <View style={styles.card}>
            
                <View styles={styles.cardContent}>
                <RoundedButton icon={<FontAwesome name='edit' color='#fff' size={Platform.OS === 'ios' ? 30 : 25} />}
                    handlePress={this.onEditPress}
                    customStyle={{backgroundColor:'#1F618D',
                    padding:5,alignItems:'center',zIndex:2,
                    alignSelf:'flex-end',
                    borderRadius:4,
                    right:Platform.OS === 'ios' ? -10: -7,
                    top:Platform.OS === 'ios' ? -20 : -15, 
                    shadowColor: colors.gray02,
                    shadowOffset: { height: 2},
                    shadowOpacity: 0.8,
                    shadowRadius: 5}}
             />
                  <View style={styles.nameWrapper}>
                    <Text style={styles.profileName}>
                    {data.firstName}
                    </Text>
                    <Text style={styles.profileName}>
                    {data.lastName}
                        </Text>
                  </View>
                  <View style={styles.ordersInfo}>
                    <View style={styles.ordersWrapper}>
                    <Text style={{
                        fontWeight:Platform.OS === 'ios' ? '600': '500',
                        fontSize:Platform.OS === 'ios' ? 18 : 14}}>
                         {orders}
                    </Text>
                      <Text style={{
                          fontWeight:Platform.OS === 'ios' ?'300' : '200',
                          fontSize:Platform.OS === 'ios' ? 20 :16}}>
                          Orders
                      </Text> 
                    </View>  
                    <View style={styles.pendingWrapper}>
                  
                         <Text style={{
                            fontWeight:Platform.OS === 'ios' ? '600': '500',
                            fontSize:Platform.OS === 'ios' ? 18: 14}}>
                            {pend}
                        </Text> 
                      
                   
                      <Text style={{
                          fontWeight:Platform.OS === 'ios' ? '300': '200',
                          fontSize:Platform.OS === 'ios' ? 20: 16}}>
                          Pending 
                          </Text>
                    </View>
                 </View>   
                </View>
                <View style={styles.cardDescription}>
                <Text style={styles.infor}>
                    {data.streetName}
                </Text>
                <Text style={styles.infor}>
                    {data.email}
                </Text>
                <Text style={styles.infor}>
                {data.phoneNumber}
                </Text>
                </View>
             </View>
             <View style={{
                alignItems:'center', justifyContent:'center',
                display:'flex', 
                top:Platform.OS === 'ios' ? -80: -65,
                 zIndex:1
            }}>
              <TouchableOpacity 
                      onPress={this.trackOrders}
                      style={styles.ButtonStyle}>
                 <Text style={styles.buttonText}>Track Order</Text>
              </TouchableOpacity>
            </View>
        
            </View>
            
        )
       
    }
}

function mapStateToProps({auth,user}){
    const {error,loading,currentUser}=user
    return {
       error,loading, currentUser
    }
}

export default connect(mapStateToProps,{getClientById}) (ProfileContainer);

const styles =StyleSheet.create({
    imageWrapper:{
        flex:1,
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    },
    wrapper:{
        display:'flex',
        flex:1,
        paddingTop:Platform.OS === 'ios' ? 20 : 15,
        alignItems:'center',
        justifyContent:'center'  
    },

    headerText:{
        fontSize:Platform.OS === 'ios' ? 28 : 24,
        fontWeight:Platform.OS === 'ios' ? '500': '400',
        color:colors.white,
        marginBottom:Platform.OS === 'ios' ? 10: 7,
    },
    avatorImage:{
        width:Platform.OS === 'ios' ? 100: 80,
        height:Platform.OS === 'ios' ? 100: 80,
        marginBottom:Platform.OS === 'ios' ? 10 : 7,
        borderRadius:Platform.OS === 'ios' ? 100 : 80,
        backgroundColor:'#fff',
        shadowColor: '#000000',
        shadowOffset: { height: 2},
        shadowOpacity: 0.5,
        shadowRadius:Platform.OS === 'ios' ?  5 : 4,
    },
    image:{
        resizeMode:'contain',
        width:"100%",
        height:'100%'
    },
    card:{
      display:'flex',
      flexDirection:'column',
      borderWidth:1,
      borderRadius:5,
      borderColor:'#D6DBDF',
      shadowColor: colors.gray02,
      shadowOffset: { height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 5,
      marginLeft:Platform.OS === 'ios' ? 30: 20,
      marginRight:Platform.OS === 'ios' ? 30: 20,
      width:Platform.OS === 'ios' ? 350 : 300,
      top:Platform.OS === 'ios' ? -50: -40,
      zIndex:-1,
      backgroundColor:'#fff'
    },
    cardContent:{
     display:'flex',
     flex:1,
     
    },
    nameWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:Platform.OS === 'ios' ? 30: 25,
        marginBottom:Platform.OS === 'ios' ? 30: 25
    },
    profileName:{
        fontWeight:Platform.OS === 'ios' ? '500':'400',
        fontSize:Platform.OS === 'ios' ? 30: 25,
        color:'#17202A'
    },
    ordersInfo:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingBottom:Platform.OS === 'ios' ? 30 :25
    },
    ordersWrapper:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginLeft:Platform.OS === 'ios' ? 20: 15
    },
    pendingWrapper:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginRight:Platform.OS === 'ios' ? 20: 15
    },
    cardDescription:{
        display:'flex',
        // flex:1,
        backgroundColor:'#F2F3F4',
        alignItems:'center',
        paddingTop:Platform.OS === 'ios' ? 20: 15,
        paddingBottom:Platform.OS === 'ios' ? 50: 40 
    },
    infor:{
        fontSize:Platform.OS === 'ios' ? 20: 16,
        color:'#000',
        marginBottom:10,
        marginTop:10,
        fontWeight:Platform.OS === 'ios' ? '400' : '300',

    },
    ButtonStyle:{
        display:'flex',
        backgroundColor:colors.blue01,
        alignItems:'center',
        justifyContent:'center',
        width:Platform.OS === 'ios' ?250: 200,
        padding:10,
        height:Platform.OS === 'ios' ? 50: 40,
        borderRadius:5
    },
   buttonText:{
      color:colors.white,
      fontSize:Platform.OS === 'ios' ?20 : 16,
      fontWeight:Platform.OS === 'ios' ? '600' :'500'
  }

})