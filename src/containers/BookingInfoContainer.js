import React from 'react'
import {View,Text,StyleSheet,Platform} from  'react-native'
import colors from '../styles/colors'
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import {connect} from 'react-redux'

class BookingInfo extends React.Component{
  
    renderBookings(){
        const {byHash}=this.props
        return(
       byHash.map((booking,i)=>{
            var num = i+1
            return(
                <View key={i} style={styles.serviceWrapper}>
                   <View style={styles.bookWrapperStyle}>
                       <Text style={styles.bookTextStyle}>{booking.name}</Text>
                       <Text style={styles.bookTextStyle}>{booking.price+ " Rwf"}</Text> 
                   </View>
                   <View style={styles.bookWrapperStyle}>
                   <Text style={styles.bookDateStyle}>{booking.date}</Text>
                       <Text style={styles.bookDateStyle}>{booking.time}</Text> 
                   </View>
                </View>
            )
        })
        )}

    renderShop(){

        }

    render(){
        const {wrapperStyle,totalWrapperStyle,headerWrapperStyle,titleTextwrapper}= styles
        console.log(this.props.byHash)
        const initialValue=0;
            const sum = this.props.byHash.reduce(
                           (total, currentValue) => {

                            return total + currentValue.price

                           },
                           initialValue        
                                
                    );

        return(
          <View style={wrapperStyle}>
           
            <View style={headerWrapperStyle}>
             <View style={titleTextwrapper}>
              <Text style={{
                     color:colors.white,
                     fontSize:hp('3.3%'),
                     marginLeft:10,
                     fontWeight:Platform.OS === 'ios' ? '800' :'500',
                     marginBottom:Platform.OS === 'ios' ? 10: 10,
                     }}
                       >
                          Total
              </Text>
              <Text style={{color:colors.white,fontSize:15,fontWeight:'300'}}>
                  AppointmentNo:
              </Text>
              </View>
              <View style={totalWrapperStyle}>
                  
                    <Text style={{
                     color:colors.white,
                     fontSize:hp('3.3%'),
                     marginRight:10,
                     fontWeight:Platform.OS === 'ios' ? '600' : '500',
                     
                     }}>
                     {sum}
                     </Text>
                      <Text
                      style={{
                        color:colors.white,
                        fontSize:hp('3%'),   
                        fontWeight:Platform.OS === 'ios' ? '500' : '400',
                        
                        }}>Rwf</Text>
                 
              </View>
            </View>
              
               {this.renderBookings()}
               
          </View>
        )
    }
}

function mapStateToProps({cart}){
    const {byHash} = cart

    return {
        byHash
    }
}

export default connect(mapStateToProps,{})(BookingInfo)

const styles= StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        backgroundColor:colors.white,
        borderColor:colors.gray01,
        marginBottom:30,
        borderWidth:0.5,
        borderRadius:1,
    
    },
    headerWrapperStyle:{
        display:'flex',
        backgroundColor:colors.primary,
        padding:15,
        height:hp('13%'),
        flexDirection:'row'
    },
    titleTextwrapper:{
       display:'flex',
       flex:2,
       alignItems:'flex-start',
       justifyContent:'center',
       padding:5
    },
    totalWrapperStyle:{
      display:'flex',
      flexDirection:'row',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      padding:5
    },

    serviceWrapper:{
       display:'flex',
       padding:5,
       borderBottomColor:colors.gray,
       borderBottomWidth:1,    
 },
 bookWrapperStyle:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-between',
     paddingTop:5,
     paddingBottom:5,
     paddingLeft:10,
     paddingRight:10
 },
 bookTextStyle:{
     color:colors.black01,
     fontSize:hp('3.1%'),
     marginBottom:5,
     fontWeight:'600'
 },
 bookDateStyle:{
    color:colors.black02,
    marginBottom:5,
    fontSize:hp('2%'),
    fontWeight:'400'
}
})