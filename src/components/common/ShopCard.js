import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity,Platform} from 'react-native'
import colors from '../../styles/colors'

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
      maxHeight:Platform.OS === 'ios' ? 250 : 200,
      width:Platform.OS === 'ios' ? 200 :180,
      backgroundColor:colors.white,
      borderColor:colors.gray01,
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
        height:Platform.OS === 'ios' ? 100 : 90,
    },
    cardContent:{
        display:'flex',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:colors.white
    },
    titleWrapper:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
    },
    nameStyle:{
        color:colors.black01,
        fontSize:22,
        fontWeight:'600'
    },
    locationStyle:{
        color:colors.black01,
        fontSize:18,
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
        fontSize:16,
        fontWeight:'400'
    }
})