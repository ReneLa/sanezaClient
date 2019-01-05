import React from 'react'
import {View, Text,StyleSheet,Platform}from 'react-native'
import ShopsContainer from '../../../containers/ShopsContainer';
import colors from '../../../styles/colors'

export default class AllShopsScreen extends React.Component{

    
    render(){
        const {wrapperStyle} = styles
        return(

            <View style={wrapperStyle}>
                <ShopsContainer navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles =StyleSheet.create({
   wrapperStyle:{
       display:'flex',
       flex:1,
       backgroundColor:colors.gray03,
       
        // paddingTop:Platform.OS === 'ios' ? 10 :7,
   }
})