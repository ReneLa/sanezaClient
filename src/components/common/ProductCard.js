import React from 'react'
import {View,Image, Text,StyleSheet,TouchableOpacity,ImageBackground,Platform} from 'react-native'
import colors from '../../styles/colors'
import CustomCheckBox from '../forms/CustomCheckBox'

export default ShopCard =({handlePress,image,name,price,item,id})=>{
    const {wrappeStyle,cardImageStyle,cardContent,priceStyle,nameStyle,
        cardMeta,titleWrapper,lineBreak,priceTextStyle
    } = styles
    return(
        <TouchableOpacity style={wrappeStyle} onPress={handlePress}>
           <View style={cardImageStyle}>
              <ImageBackground source={image} style={{width:'100%',height:'100%'}}>
                  <CustomCheckBox id={id} item={item}
                     customStyle={{left:-50}}
                   />   
              </ImageBackground>
               
           </View>
           <View style={cardContent}>
              <View style={titleWrapper}>
                  <Text style={nameStyle}>{name}</Text>
              </View>
           </View>
           <View style={lineBreak}/>
           <View style={cardMeta}>
                <Text style={priceTextStyle}>{"Price:"}</Text>
                <Text style={priceStyle}>{price}</Text>
           </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    wrappeStyle:{
      display:'flex',
      minHeight:Platform.OS === 'ios' ? 150 : 100,
      width:Platform.OS === 'ios' ? 180 :140,
      backgroundColor:colors.white,
      borderColor:colors.gray01,
      borderWidth:0.5,
      borderRadius:2,
      elevation:5,
      margin:5,
      shadowColor: colors.gray02,
       shadowOffset: { height: 2},
       shadowOpacity: 0.2,
       shadowRadius: 4,
       marginBottom:Platform.OS === 'ios' ? 20:15
    },
    cardImageStyle:{
        display:'flex',
        height:Platform.OS === 'ios' ? 130 : 100,
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
        fontSize:Platform.OS === 'ios' ? 22 : 17,
        fontWeight:Platform.OS === 'ios' ? '600' : '500'
    },
    lineBreak:{
        display:'flex',
        borderBottomWidth:Platform.OS === 'ios' ? 0.8 : 0.5,
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
    priceTextStyle:{
        color:colors.gray,
        fontSize:Platform.OS === 'ios' ? 16: 12,
        fontWeight:Platform.OS === 'ios' ? '400' : '300'
    },
    priceStyle:{
        color:colors.black01,
        fontSize:Platform.OS === 'ios' ? 18 :14,
        fontWeight:Platform.OS === 'ios' ? '400': '300'
    },
})