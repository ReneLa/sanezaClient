import React from 'react'
import {View,StyleSheet,Platform}from 'react-native'
import SalonContainer from '../../../containers/SalonContainer';
import colors from '../../../styles/colors'

export default class SalonsScreen extends React.Component{

    render(){
        const {wrapperStyle} = styles
        return(
            <View style={wrapperStyle}>
                <SalonContainer navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray03,
        paddingTop:Platform.OS === 'ios' ? 10 : 7,
    }
 })