import React from 'react'
import {FontAwesome,MaterialIcons}from '@expo/vector-icons'
import {View,StyleSheet,Text,Platform,TouchableOpacity} from 'react-native'
import colors from '../../styles/colors'
import IconButton from '../../components/buttons/IconButton'
import Item from './Item'
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

const CartCard = ({name,location,handlePress,total,listing})=>{

    const {wrapperStyle, cardActionsWrapper,cardFooterStyle,
           nameWrapperStyle,nameStyle,actionButtonsStyle,totalTextStyle}=styles
          
    return(
        <TouchableOpacity style={wrapperStyle}>
           <View style={cardActionsWrapper}>
              <View style={nameWrapperStyle}>
                  <Text style={nameStyle}>{name}</Text>
              </View>
              <View style={nameWrapperStyle}>
                  <Text style={{
                      color:colors.blue01,
                     fontSize:hp('1.5%'),
                      fontWeight:Platform.OS === 'ios' ? '500':'400'
                      }}>
                      {location}
                  </Text>
              </View>
              <View style={actionButtonsStyle}>
                  {/* <IconButton style={{flex:1}}
                      handlePress={handlePress}
                      icon={<FontAwesome name='heart' size={Platform.OS === 'ios' ? 22 : 20} color={colors.blue01}/>}
                  /> */}
                   <IconButton style={{flex:1}}
                      handlePress={handlePress}
                      icon={ <MaterialIcons name='check' size={Platform.OS === 'ios' ? 25 : 23} color={colors.blue01}/>
                    }
                  />
              </View>
           </View>
           <View>
               {listing.map((list,i) =>{
                   return(
                       <Item 
                             key={i}
                             number={i+1} 
                             name={list.productName}
                             date={list.date}
                             price={list.total}
                         />
                   )
               })}
           </View>
           <View style={cardFooterStyle}>
                 <Text style={totalTextStyle}>Total:</Text>
                 <Text style={totalTextStyle}>{total+ ' Rwf'}</Text>
           </View>
        </TouchableOpacity>
    )
}

export default CartCard
const styles = StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        borderRadius:6,
        backgroundColor:colors.white,
        width:wp('90%'),
        // borderWidth:0.7,
        // borderColor:colors.gray,
        // height:Platform.OS === 'ios' ?250 : 200,
        marginTop:hp('0.6%'),
        marginBottom:hp('0.6%'),
    },
    cardActionsWrapper:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        borderBottomWidth:Platform.OS === 'ios' ? 0.8 : 0.5,
        borderBottomColor:colors.gray01

    },
    nameWrapperStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        flexWrap:'wrap',
        flex:2
    },
    nameStyle:{
        color:colors.black01,
        fontSize:hp('2%'),
        fontWeight:Platform.OS === 'ios' ? '600' : '500'
    },
    actionButtonsStyle:{
        display:'flex',
       
        alignItems:'flex-end',
        justifyContent:'center',

        flex:2
    },
    cardFooterStyle:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:10,
        borderTopWidth:Platform.OS === 'ios' ? 0.8 : 0.5,
        borderTopColor:colors.gray01
    },
    totalTextStyle:{
            fontSize:hp('2%'),
            fontWeight:Platform.OS === 'ios' ? '600':'500',
            color:colors.black01,
            marginLeft:5,
            marginRight:5
       
    }
})
