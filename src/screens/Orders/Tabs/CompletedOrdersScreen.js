import React from 'react';
import { StyleSheet,ScrollView,View } from 'react-native';
import CompletedOrdersContainer from '../../../containers/CompletedOrdersContainer';
import colors from '../../../styles/colors';


export default class CompletedOrdersScreen extends React.Component{
    
    render(){
       const {wrapperStyle}= styles
    //    console.log(this.props)
        return(
           <View style={wrapperStyle}>
             <CompletedOrdersContainer/>
           </View>
        )
    }
}


const styles=StyleSheet.create({

    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray
    }
})