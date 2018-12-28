import React from 'react'
import {FontAwesome,MaterialIcons}from '@expo/vector-icons'
import {View,StyleSheet,Text,Platform} from 'react-native'
import colors from '../../styles/colors'
import IconButton from '../../components/buttons/IconButton'
import Item from '../orders/Item'

const AppointCard = ({name,location,handlePress,total,listing})=>{
    const {wrapperStyle, cardActionsWrapper,cardFooterStyle,
           nameWrapperStyle,nameStyle,actionButtonsStyle,totalTextStyle}=styles
          
    return(
        <View style={wrapperStyle}>
           <View style={cardActionsWrapper}>
              <View style={nameWrapperStyle}>
                  <Text style={nameStyle}>{name}</Text>
              </View>
              <View style={nameWrapperStyle}>
                  <Text style={{
                      color:colors.blue01,
                      fontSize:Platform.OS === 'ios' ? 14 : 12,
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
                             key={list.branchId}
                             number={i+1} 
                             name={list.serviceName}
                             date={list.time}
                             price={list.price}
                         />
                   )
               })}
           </View>
           <View style={cardFooterStyle}>
                 <Text style={totalTextStyle}>Total:</Text>
                 <Text style={totalTextStyle}>{total+ ' Rwf'}</Text>
           </View>
        </View>
    )
}

export default AppointCard

const styles = StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.white,
        borderWidth:Platform.OS === 'ios' ? 0.7 : 0.4,
        borderColor:colors.gray,
        // height:Platform.OS === 'ios' ? 250: 250,
        marginTop:Platform.OS === 'ios' ? 7.5 : 5.5,
        marginBottom:Platform.OS === 'ios' ? 7.5 :5.5
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
        fontSize:Platform.OS === 'ios' ? 18 : 13,
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
            fontSize:Platform.OS === 'ios' ? 18 :15 ,
            fontWeight:Platform.OS === 'ios' ? '600':'500',
            color:colors.black01,
            marginLeft:5,
            marginRight:5
       
    }
})
