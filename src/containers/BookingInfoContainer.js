import React from 'react'
import {View,Text,StyleSheet,Platform} from  'react-native'
import colors from '../styles/colors'
import {connect} from 'react-redux'

shops=[
    {
      "shop":"onelove",
      "locationName":'nyamirambo',
      "total":2000
    },
    {
        "shop":"Nyamata Salon",
        "locationName":'nyamata',
        "total":500
      },
    {
        "shop":"onePeace",
        "locationName":'nyamirambo',
        "total":2500
      }
]
const bookings=[
    {id:1,name:'Hair Dry',date:'2019-10-01',price:500},
    {id:2,name:'Hair Dry',date:'2019-10-14',price:500},
    {id:3,name:'Hair Dry',date:'2019-10-01',price:1000},
    {id:4,name:'Hair Dry',date:'2019-10-01',price:3400},
]
 
class BookingInfo extends React.Component{

    renderBookings(){
        const {byHash}=this.props
        return(
       byHash.map((booking,i)=>{
            var num = i+1
            return(
                <View key={i} style={styles.serviceWrapper}>
                <View style={{
                    display:'flex',
                    flex:1,
                    alignItems:'center'
                }}>
                   <Text  style={{
                       fontSize:Platform.OS === 'ios' ? 18 : 14,
                       color:colors.black01,
                       fontWeight:Platform.OS === 'ios' ? '500': '400'}}>
                          {num}
                    </Text>
                  </View>

                  <View style={{
                    display:'flex',
                    flex:2,
                    alignItems:'center',
                    flexWrap:'nowrap'
                }}>
                   <Text style={{
                       
                       fontSize:Platform.OS === 'ios' ? 15 : 12,
                       color:colors.black01,
                       fontWeight:Platform.OS === 'ios' ?'500' : '400'}}>
                          {booking.name}
                     </Text>
                    </View>

                     <View style={{
                    display:'flex',
                    flex:2,
                    alignItems:'center'
                }}>
                     <Text style={{
                       
                       fontSize:Platform.OS === 'ios' ? 15 : 12,
                       color:colors.black01,
                       fontWeight:Platform.OS === 'ios' ?'400': '300'}}>
                          {booking.time.toDateString()}
                     </Text>
                    </View>

                    <View style={{
                    display:'flex',
                    flex:1,
                    alignItems:'center'
                }}>
                   <Text
                    style={{
                        
                        fontSize:Platform.OS === 'ios' ? 15: 12,
                        color:colors.black01,
                        fontWeight:Platform.OS === 'ios' ?'500':'400'
                        }}>
                   {booking.price}
                   </Text>
                   </View>
                </View>
            )
        })
        )}

    renderShop(){

        }

    render(){
        const {wrapperStyle,totalWrapper}= styles

        const initialValue=0;
            const sum = this.props.byHash.reduce(
                           (total, currentValue) => {

                            return total + currentValue.price

                           },
                           initialValue        
                                
                    );

        return(
          <View style={wrapperStyle}>
            <View style={{display:'flex',alignItems:'center'}}>
                <Text style={{
                     color:colors.red,
                     fontSize:Platform.OS === 'ios' ? 20:15,
                     marginLeft:10,
                     fontWeight:Platform.OS === 'ios' ? '600' :'500',
                     marginBottom:Platform.OS === 'ios' ? 15: 10,
                     }}
                       >
                          Your Booking Info
                </Text>
                {this.renderBookings()}
            </View>
            <View style={totalWrapper}>
                <Text style={{
                    color:colors.black01,
                    fontSize:Platform.OS === 'ios' ? 18 : 15 ,
                    fontWeight:Platform.OS === 'ios' ? '600' : '500',
                }}>
                   Total:
                </Text>
                <Text style={{
                     color:colors.black01,
                     fontSize:Platform.OS === 'ios' ? 18 : 15,
                     marginLeft:10,
                     fontWeight:Platform.OS === 'ios' ? '600' : '500',
                     
                }}>
                    {sum+ ' rwf'}
                </Text>
            </View>
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
        marginLeft:10,
        marginRight:10,
        padding:15,
        borderColor:colors.gray01,
        borderWidth:0.5,
        borderRadius:2,
        elevation:5,
        shadowColor: colors.gray02,
         shadowOffset: { height: 2},
         shadowOpacity: 0.2,
         shadowRadius: 4,  
    },
    serviceWrapper:{
       display:'flex',
       flexDirection:'row',
    //    justifyContent:'center',
       padding:3,
       marginTop:5,
       marginBottom:5
 },
      totalWrapper:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          paddingTop:10,
          paddingBottom:10
      }

})