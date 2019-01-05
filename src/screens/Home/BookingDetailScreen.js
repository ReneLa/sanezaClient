import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import {FontAwesome} from '@expo/vector-icons'
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import { View,StyleSheet,Text,TouchableOpacity,ScrollView,Platform} from 'react-native';
import colors from '../../styles/colors'
import BottomContainer from '../../components/BottomContainer'
import Button from '../../components/buttons/Button'
import BookingInfoContainer from '../../containers/BookingInfoContainer'
import UserInfo from '../../containers/UserInfo'
import {connect} from 'react-redux'
import {createAppointment,refreshCart} from '../../redux/actions'
import {StackActions,NavigationActions} from 'react-navigation'

class BookDetailScreen extends Component{

    static navigationOptions=({navigation})=>{
        const { params } = navigation.state
        return {
        title:params.detailTitle,
        headerLeft:<RoundedButton customStyle={{marginLeft:5,width:45,height:45}}
                                 handlePress={()=>{navigation.goBack()}} icon={<FontAwesome name="angle-left" size={35} color={colors.blue01}/>}/>,
        headerStyle:{
            backgroundColor:colors.white,
            elevation:4,
            borderBottomWidth:0,
            

        },
        headerTitleStyle:{
            fontWeight:'700',
            fontSize:18,
             color:colors.black02 
        },
        gesturesEnables:false
    }}
 
    handleCreateAppointment=()=>{
     
      const {createdAppoint,success,createAppointment, byHash}=this.props

       byHash.map( (serv) => {
           createAppointment(serv)
       })
    }
    goPay(){
        const {branchId,shopName,shopLocation} = this.props.navigation.state.params
        this.props.navigation.navigate('Payment',
          {
              title:'Payment',
              shopLocation,
              shopName
          }
        )
    }
    saveToPending(){
        this.handleCreateAppointment();
        
        const popAction = StackActions.pop({
            n: 2,
          });
    this.props.navigation.dispatch(popAction);
    }

    onCancelAppointment=()=>{
        const {navigation,refreshCart}=this.props
        refreshCart()
        navigation.navigate('SingleShop')
    }
    render(){
           const {wrapperStyle,scrollViewStyle,cancelWrapperStyle,cancelButton}=styles
           const {branchId} = this.props.navigation.state.params
           console.log(this.props)
            return(
                <View style={wrapperStyle}>
    
                    <ScrollView contentContainerStyle={scrollViewStyle}>
                       
                      <BookingInfoContainer/>

                      <UserInfo/>
                
                      <View style={cancelWrapperStyle}>
                          <TouchableOpacity style={cancelButton}
                              onPress={this.onCancelAppointment}
                          >
                              <Text style={{
                                  color:colors.black01,
                                  fontSize:hp('2.5%'),
                                  fontWeight:'500'
                              }}>
                                  Cancel Appoint
                              </Text>
                          </TouchableOpacity>
                      </View>


                    </ScrollView>
    
                    <BottomContainer
                        showBottomNav={true}
                        buttonOne={<Button
                                           label="Pay at Salon"
                                           textSize={hp('3.2%')}
                                           textColor={colors.white}
                                           handlePress={this.saveToPending.bind(this)}
                                           customStyle={{backgroundColor:'transparent'}}
                        />}
                        buttonTwo={<Button
                                           label="Pay Now"
                                           textSize={hp('3.2%')}
                                           textColor={colors.white}
                                           handlePress={this.goPay.bind(this)}
                                           customStyle={{backgroundColor:'transparent'}}
                        />}
                        customStyle={{height:hp('9%'),backgroundColor:colors.primary}}
                        containerOneStyle={{backgroundColor:'transparent'}}
                        containerTwoStyle={{backgroundColor:colors.black01}}
                        />
                </View>
        )

    }
}

function mapStateToProps({cart,appoints}){
    const {byHash} = cart
    const {createdAppoint,success}=appoints
    return {
        byHash,createdAppoint,success
    }
}
export default connect(mapStateToProps,{createAppointment,refreshCart})(BookDetailScreen)

const styles =StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray03,
    },
    scrollViewStyle:{
        display:'flex',
        flex:1
    },
    cancelWrapperStyle:{
        display:'flex',
        padding:10,
        marginTop:20,
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent:'center'
    },
    cancelButton:{
       display:'flex',
       width:wp('60%'),
       borderColor:colors.black02,
       borderWidth:1,
       borderRadius:10,
       padding:10,
       alignItems:'center',
       justifyContent:'center',
    }
}) 