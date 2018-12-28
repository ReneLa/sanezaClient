import React from 'react'
import {FontAwesome,MaterialCommunityIcons,Ionicons,EvilIcons} from '@expo/vector-icons';
import {View,Text,StyleSheet,TouchableOpacity,Platform} from 'react-native'
import colors from '../styles/colors'
import RoundedButton from '../components/buttons/RoundedButton'


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
              <View style={headerContainer}>
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
              </View>
              <View style={searchFieldWrapper}>
                 <TouchableOpacity onPress={this.openSearch.bind(this)} style={searchField}>
                   <Ionicons name="ios-search" size={25} color={colors.blue01} style={{fontWeight:'500'}}/>
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
        backgroundColor:colors.white,
        height: 120,
        
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        paddingTop:25,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        height:Platform.OS === 'ios' ? 65 :60,
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
        fontSize:Platform.OS === 'ios' ? 20 : 16
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
        height:40,
        borderRadius:3,
        borderColor:colors.gray01,
        borderWidth:0.7,
        backgroundColor:colors.gray02,
        paddingTop:10,
        
        
    },
    searchTextStyle:{
        color:colors.blue01,
        fontSize:Platform.OS === 'ios' ? 18 : 14,
        marginLeft:15
    }
})
