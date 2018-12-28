import React, { Component } from 'react';
import {FontAwesome} from '@expo/vector-icons'
import { View,StyleSheet,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import RoundedButton from '../../components/buttons/RoundedButton' 
import colors from '../../styles/colors'
// import Button from '../../components/buttons/Button' 
import ConfirmModal from '../../components/common/ConfirmModal'

export default class PaymentScreen extends Component{
     
    static navigationOptions=({navigation})=>({
        title:"Saneza",
        headerLeft:<RoundedButton customStyle={{marginLeft:5,width:45,height:45}}
                                 handlePress={()=>{navigation.goBack()}} icon={<FontAwesome name="angle-left" size={35} color={colors.white}/>}/>,
        headerStyle:{
            backgroundColor:colors.primary,
            elevation:4,
            borderBottomWidth:0,
            shadowColor: '#000000',
            shadowOffset: { height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 5,

        },
        headerTitleStyle:{
            fontWeight:'700',
            fontSize:23,
             color:colors.white
        },
        gesturesEnables:false
    })

    constructor(props){
        super(props);
        this.state ={
           
            isConfirm:false
        }
        this.onConfirmPay=this.onConfirmPay.bind(this)
        this.donePayment=this.donePayment.bind(this)
    
    }
   
    onConfirmPay(){
        this.setState({isConfirm:true})
    }

    donePayment(){
        this.closeModal()
        const {navigate}=this.props.navigation
        navigate('Bookings_Completed')
    }
   closeModal(){
     this.setState({isConfirm:false})
   }
        
  render(){
            const {wrapperStyle,titleWrapper,headerTextStyle,
                cardStyle,cardContentStyle,cardDescriptionStyle,
                totalWrapperStyle,dividerStyle,couponCodeWrapper,
                discountText,inputFieldStyle,discountPercent,buttonText,ButtonStyle

            }= styles
            const visible =this.state.isConfirm ? true : false
        return(
            <View style={wrapperStyle}>
          
            <View style={titleWrapper}>
                <Text style={headerTextStyle}>Payment at</Text> 
                <Text style={headerTextStyle}>One Love Salon</Text> 
            </View>
           
            <View style={cardStyle}>
           
               <View styles={cardContentStyle}>
                
                 <View style={totalWrapperStyle}>
                   
                     <Text style={{fontWeight:'300',fontSize:30}}>
                        TOTAL:
                     </Text> 
                     <Text style={{fontWeight:'500',fontSize:30}}>
                         2000 rwf
                    </Text>
                   
                </View> 
                
                 <View style={dividerStyle}/>
               </View>
               
               <View style={cardDescriptionStyle}>
               <Text style={discountText}>
                   Do you have a discount coupon ?
               </Text>
               <View style={couponCodeWrapper}>
                   <TextInput style={inputFieldStyle}
                      placeholder="**********"
                      placeholderTextColor="#212F3D"
                     />
                   <Text style={discountPercent}>
                       15%
                   </Text>
               </View>
              <View style={{display:'flex', flexDirection:'row'}}>
              <Text style={{fontSize:20, marginTop:5,fontWeight:'300',color:'#000', marginRight:15}}> 
              
                  Total Offer Coupon:
               </Text>
                   <Text style={{fontSize:30, fontWeight:'500',color:'#000'}}>
                       1700 Rwf
                   </Text>
              </View>
               </View>
              
            </View>
           
        
            <View style={{
                alignItems:'center', justifyContent:'center',
                display:'flex', top:-40,zIndex:1
            }}>
              <TouchableOpacity 
                      onPress={this.onConfirmPay}
                      style={ButtonStyle}>
                 <Text style={buttonText}>Confirm and Pay</Text>
              </TouchableOpacity>
            </View>
            <ConfirmModal
                 modalVisible={visible}
                 firstLine="Successfully Paid"
                 secondLine="We like our Clients"
                 onClose={this.donePayment}
            />
           </View>
        )
       
    }
}


const styles =StyleSheet.create({
    
    wrapper:{
        display:'flex',
        flex:1,
        paddingTop:15,
        backgroundColor:colors.gray01,
    },
    titleWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:30,
        marginTop:10,
        marginBottom:40
    },
    headerTextStyle:{
        fontSize:40,
        fontWeight:'400',
        color:colors.black01,
    },
    cardStyle:{
    display:'flex',
    flexDirection:'column',
    borderWidth:1,
    borderRadius:5,
    borderColor:'#D6DBDF',
    marginLeft:10,
    marginRight:10,
    marginBottom:20,
    // width:'80%',
    backgroundColor:'#fff',
    zIndex:-1
},
    cardContentStyle:{
        display:'flex',
        borderColor:'red',
        borderWidth:1
    },
    totalWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,
        paddingBottom:20,
        paddingRight:20,
        paddingLeft:20
    },
    cardDescriptionStyle:{
        display:'flex',
        paddingTop:10,
        paddingBottom:50,
        paddingLeft:20,
        paddingRight:20
    },
    dividerStyle:{
        
        marginLeft:20,
        marginRight:20,
        borderWidth:1.6,
        borderColor:'#D5D8DC'
    },
    discountText:{
        fontSize:20,
        color:'#000',
        marginBottom:10,
        marginTop:10,
        fontWeight:'400',
    },
    couponCodeWrapper:{
        display:'flex',
        flexDirection:'row',
        marginBottom:20
    },
    inputFieldStyle:{
        flexGrow:1,
        display: 'flex',
        backgroundColor: '#F2F4F4',
        borderRadius: 4,
        fontWeight:'600',
        height:32,
        paddingLeft:30,
        paddingRight:30,
        marginLeft:30,
        marginRight:30,
        marginBottom:10,
        fontSize:16,
    },
    discountPercent:{
        fontSize:25,
        fontWeight:'300',
        color:'#000'
    },
    ButtonStyle:{
        display:'flex',
        backgroundColor:colors.blue01,
        alignItems:'center',
        justifyContent:'center',
        width:250,
        padding:10,
        height:50,
        borderRadius:5
    },
   buttonText:{
      color:colors.white,
      fontSize:20,
      fontWeight:'600'
  }
    
})

