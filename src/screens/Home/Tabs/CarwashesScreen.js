import React from 'react'
import {View,StyleSheet}from 'react-native'
import CarwashContainer from '../../../containers/CarwashContainer';
import colors from '../../../styles/colors'

export default class CarwashesScreen extends React.Component{

    render(){
        const {wrapperStyle} = styles
        return(
            <View style={wrapperStyle}>
                <CarwashContainer navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray03,
        paddingTop:10,
    }
 })