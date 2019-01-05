import React from 'react'
import {FontAwesome,MaterialCommunityIcons,Ionicons,EvilIcons} from '@expo/vector-icons';
import {View,Text,StyleSheet,TouchableOpacity,Platform} from 'react-native'
import colors from '../styles/colors'
import RoundedButton from '../components/buttons/RoundedButton'
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

export default class HeaderSearch extends React.Component{

    openSearch(){
        this.props.navigation.navigate('Search');
    }

    render(){
        const {wrapper,headerContainer,leftButtonWrapper,
            titleWrapper,titleStyle,rightButtonWrapper,
            searchFieldWrapper,searchField,searchTextStyle
        }=styles
        return(
            <View style={wrapper}>
              {/* <View style={headerContainer}>
                 <View style={leftButtonWrapper}>
                     <RoundedButton 
                        // handlePress={this.props.navigation.navigate('ProfileContainer')}
                        icon={
                          <EvilIcons name={"user"} size={Platform.OS === 'ios' ? 35 : 30} color={colors.white}/>}
                                       color={colors.white}
                                       size={30}/>
                 </View>
                 <View style={titleWrapper}>
                     <Text style={titleStyle}>Saneza</Text>
                 </View>
                 <View style={rightButtonWrapper}>
                     <RoundedButton 
                        //  handlePress={this.props.navigation.navigate('Search')}
                        icon={
                        <MaterialCommunityIcons name="map-marker-radius" color='#fff' size={Platform.OS === 'ios' ? 30 : 25}/>}
                     />
                 </View>
              </View> */}
             
             
              <View style={searchFieldWrapper}>
                 <TouchableOpacity onPress={this.openSearch.bind(this)} style={searchField}>
                   <Ionicons name="ios-search" size={hp('2.9%')} color={colors.blue01} style={{fontWeight:'500'}}/>
                   <Text style={searchTextStyle}>Search by name or location </Text>
                 </TouchableOpacity>
              </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        backgroundColor:colors.primary,  //change back to white
        height:hp('10%'),  //change here to 120
        paddingTop:hp('3%'),  //add please remove 
        
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        paddingTop:25,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        height:hp('6.3%'),
        backgroundColor:colors.primary
    },
    leftButtonWrapper:{
        display:'flex',
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    titleWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex:2
    },
    titleStyle:{
        color:colors.white,
        fontWeight:Platform.OS === 'ios' ?'700' :'500',
        fontSize:hp('1.9%')
    },
    rightButtonWrapper:{
        display:'flex',
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },

    searchFieldWrapper:{
        display:'flex',
        padding:10,
        marginBottom:Platform.OS === 'ios' ? 10 : 7
    },
    searchField:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        height:hp('5%'),
        borderRadius:2,
        borderColor:colors.gray02,
        borderWidth:0.7,
        backgroundColor:colors.white,
        paddingTop:10,
        
        
    },
    searchTextStyle:{
        color:colors.blue01,
        fontSize:hp('2.4%'),
        marginLeft:15
    }
})
