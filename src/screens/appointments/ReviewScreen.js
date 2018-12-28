import React from 'react'
import {FontAwesome,MaterialIcons} from '@expo/vector-icons'
import {View, Text,StyleSheet,Platform}from 'react-native'
import RoundedButton from '../../components/buttons/RoundedButton' 
import colors from '../../styles/colors'
import ReviewsContainer from '../../containers/ReviewsContainer'



export default class ReviewsScreen extends React.Component{
    static navigationOptions=({navigation})=>({
        title:"Saneza",
        headerLeft:<RoundedButton customStyle={{marginRight:2,
                                     width:Platform.OS === 'ios' ? 45 :40,
                                     height:Platform.OS === 'ios' ? 45 :40}}
                                 handlePress={()=>{navigation.goBack()}} 
                                 icon={<FontAwesome  name="angle-left" size={Platform.OS === 'ios' ?35 :30} color={colors.white}/>}/>,
        headerStyle:{
            backgroundColor:colors.primary,
            elevation:4,
            borderBottomWidth:0,
            shadowColor: colors.gray02,
            shadowOffset: { height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 5,

        },
        headerTitleStyle:{
            fontWeight:Platform.OS === 'ios' ?'700' :'600',
            fontSize:Platform.OS === 'ios' ? 23 :18,
             color:colors.white
        },
        gesturesEnables:false
    })
    render(){
        const {wrapperStyle}=styles
        return(
            <View style={wrapperStyle}>
               <ReviewsContainer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray01
    }
})