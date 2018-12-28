import React from 'react';
import {PropTypes}from 'prop-types'
import {Entypo,FontAwesome} from '@expo/vector-icons'
import { View, Text, StyleSheet,TouchableOpacity,Image,Platform } from 'react-native';
import colors from '../../styles/colors';


const FlatList= ({image,title,location, handlePress})=>{
    const {wrapperStyle, containerStyle, imageAvatorStyle,imageStyle}=styles
    return(
        <TouchableOpacity style={[wrapperStyle]}
             onPress={handlePress}>

              <View >
                 <Entypo name='menu' color={colors.gray} size={45}/>
             </View>
             
             <View style={[imageAvatorStyle]}>
               <Image source={image} style={[{},imageStyle]}/>
             </View>

          <View style={styles.nameWrapper}>
              <Text style={styles.nameText}>{title}</Text>
              <Text style={styles.locationText}>{location}</Text>
           </View>

          <View style={styles.nameWrapper}>
             {/* <Text style={styles.nameText}>Kigali City</Text>
             <Text style={styles.locationText}>Sector</Text> */}
          </View>

           <View style={styles.iconWrapper}>
               <FontAwesome name="angle-right" color={colors.black01} size={35}/>
            </View>
            
            </TouchableOpacity>
        )
}


export default FlatList

const styles = StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:colors.white,
        borderColor:'#D5D8DC',
        borderWidth:0.5,
        padding:10,
        height:Platform.OS === 'ios' ? 70 : 50
    },
    imageStyle:{
        resizeMode:'contain',
        width:'100%',
        height:'100%'
    },
    // containerStyle:{
    //     display:'flex',
    //     flexDirection:'row',
    //     alignItems:'center',
    //     justifyContent:'space-between',
    //     backgroundColor:colors.white,
    //     borderColor:'#D5D8DC',
    //     borderWidth:0.5,
    //     borderRadius:5,
    //     paddingLeft:10,
    //     paddingRight:10
    // },

   
    imageAvatorStyle:{

        width:Platform.OS === 'ios' ? 60 : 50,
        height:Platform.OS === 'ios' ? 60 : 50,
        backgroundColor:colors.white, 
    },

    nameWrapper:{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center'
    },
    nameText:{
        fontSize:Platform.OS === 'ios' ? 18 : 16,
        fontWeight:Platform.OS === 'ios' ? '400' : '300',
        color:colors.black01
    },
    locationText:{
        fontSize:Platform.OS === 'ios' ? 16 :14,
        fontWeight:Platform.OS === 'ios' ?  '300' : '200',
        color:colors.black01
    },
    iconWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white
    }
})