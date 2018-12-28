import React from 'react';
import { StyleSheet,ScrollView,View } from 'react-native';
import CompletedOrdersContainer from '../../../containers/CompletedOrdersContainer';


export default class CompletedOrdersScreen extends React.Component{
    
    render(){
       const {wrapperStyle}= styles
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
    }
})