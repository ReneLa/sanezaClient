import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity,Platform} from 'react-native'
import colors from '../../styles/colors'
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

export default ShopCard =({handlePress,image,title,location,rating})=>{
    const {wrappeStyle,cardImageStyle,cardContent,locationStyle,nameStyle,
        cardMeta,titleWrapper,lineBreak,ratingTextStyle
    } = styles
    return(
        <TouchableOpacity style={wrappeStyle} onPress={handlePress}>
           <View style={cardImageStyle}>
               {image}
           </View>
           <View style={cardContent}>
              <View style={titleWrapper}>
                  <Text style={nameStyle}>{title}</Text>
                  <Text style={locationStyle}>{location}</Text>
              </View>
           </View>
           <View style={lineBreak}/>
           <View style={cardMeta}>
                <Text style={ratingTextStyle}>Ratings:</Text>
                <Text style={locationStyle}>{rating}</Text>
           </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    wrappeStyle:{
      display:'flex',
      height:hp('30%'),
      marginLeft:10,
      marginRight:10,
      width:wp('90%'),
      backgroundColor:colors.white,
      borderColor:colors.gray03,
      borderWidth:0.5,
      borderRadius:2,
      elevation:5,
      shadowColor: colors.gray02,
       shadowOffset: { height: 2},
       shadowOpacity: 0.2,
       shadowRadius: 4,
       
    },
    cardImageStyle:{
        display:'flex',
        height:hp('20%'),
    },
    cardContent:{
        display:'flex',
        paddingTop:10,
        // paddingBottom:10,
        backgroundColor:colors.white
    },
    titleWrapper:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
    },
    nameStyle:{
        color:colors.black01,
        fontSize:hp('2.2%'),
        fontWeight:'600'
    },
    locationStyle:{
        color:colors.black01,
        fontSize:hp('1.9%'),
        fontWeight:'400'
    },
    lineBreak:{
        display:'flex',
        borderBottomWidth:0.8,
        borderBottomColor:colors.gray03,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        marginRight:10,
        marginLeft:10
    },
    cardMeta:{
        display:'flex',
        backgroundColor:colors.white,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    ratingTextStyle:{
        color:colors.gray,
        fontSize:hp('2%'),
        fontWeight:'400'
    }
})