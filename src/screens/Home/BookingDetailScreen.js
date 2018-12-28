import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import {FontAwesome} from '@expo/vector-icons'
import { View,StyleSheet,ScrollView,Platform} from 'react-native';
import colors from '../../styles/colors'
import BottomContainer from '../../components/BottomContainer'
import Button from '../../components/buttons/Button'
import BookingInfoContainer from '../../containers/BookingInfoContainer'
import UserInfo from '../../containers/UserInfo'

 export default class BookDetailScreen extends Component{

    static navigationOptions=({navigation})=>({
        title:"Saneza",
        headerLeft:<RoundedButton customStyle={{marginLeft:5,width:45,height:45}}
                                 handlePress={()=>{navigation.goBack()}} icon={<FontAwesome name="angle-left" size={35} color={colors.white}/>}/>,
        headerStyle:{
            backgroundColor:colors.primary,
            elevation:4,
            borderBottomWidth:0,
            shadowColor: colors.gray01,
            shadowOffset: { height: 2},
            shadowOpacity: 0.4,
            shadowRadius: 5,

        },
        headerTitleStyle:{
            fontWeight:'700',
            fontSize:23,
             color:colors.white
        },
        gesturesEnables:false
    })
 
    goPay(){
        this.props.navigation.navigate('Payment')
    }
    saveToPending(){
        this.props.navigation.navigate('Bookings')
    }
    render(){
           const {wrapperStyle,scrollViewStyle}=styles
           const {branchId} = this.props.navigation.state.params
            return(
                <View style={wrapperStyle}>
    
                    <ScrollView contentContainerStyle={scrollViewStyle}>
                       
                      <BookingInfoContainer/>
                      <UserInfo/>
                
                    </ScrollView>
    
                    <BottomContainer
                        showBottomNav={true}
                        buttonOne={<Button
                                           label="Pay at Salon"
                                           textSize={Platform.OS === 'ios' ? 25 : 20}
                                           textColor={colors.white}
                                           handlePress={this.saveToPending.bind(this)}
                                           customStyle={{backgroundColor:'transparent'}}
                        />}
                        buttonTwo={<Button
                                           label="Pay Now"
                                           textSize={Platform.OS === 'ios' ? 25: 20}
                                           textColor={colors.white}
                                           handlePress={this.goPay.bind(this)}
                                           customStyle={{backgroundColor:'transparent'}}
                        />}
                        customStyle={{height:Platform.OS === 'ios' ? 75 : 65,backgroundColor:colors.primary}}
                        containerOneStyle={{backgroundColor:'transparent'}}
                        containerTwoStyle={{backgroundColor:colors.black01}}
                        />
                </View>
        )

    }
}



const styles =StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray03,
    },
    scrollViewStyle:{
        display:'flex',
        flex:1
    }
}) 