import React from 'react'
import {FontAwesome,MaterialIcons} from '@expo/vector-icons'
import {View, Text,StyleSheet,Platform}from 'react-native'
import RoundedButton from '../../components/buttons/RoundedButton' 
import colors from '../../styles/colors'
import ProfileContainer from '../../containers/ProfileContainer'
import {onSignOut} from '../../auth'


export default class ProfileScreen extends React.Component{
    static navigationOptions=({navigation})=>({
        title:"Saneza",
        headerRight:<RoundedButton customStyle={{marginRight:2,
            width:Platform.OS === 'ios' ? 45: 40,
            height:Platform.OS === 'ios' ? 45: 40}}
                                 handlePress={onSignOut} 
                                 icon={<MaterialIcons name="more-vert"
                                  size={Platform.OS === 'ios' ? 35: 30} color={colors.white}/>}/>,
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
            fontWeight:Platform.OS === 'ios' ? '700': '600',
            fontSize:Platform.OS === 'ios' ? 18: 14,
             color:colors.white
        },
        gesturesEnables:false
    })
    render(){
        const {wrapperStyle}=styles
        return(
            <View style={wrapperStyle}>
               <ProfileContainer navigation={this.props.navigation}/>
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