import React from 'react'
import {View,Text,StyleSheet}from 'react-native'
import PendingOrdersContainer from '../../../containers/PendingOrdersContainer'
import colors from '../../../styles/colors';

export default class PendingOrdersScreen extends React.Component{

    render(){
        const {wrapperStyle}= styles
        // console.log(this.props)
         return(
            <View style={wrapperStyle}>
        
               <PendingOrdersContainer navigation={this.props.navigation}/>
            </View>
         )
     }
}const styles=StyleSheet.create({

    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray
    }
})