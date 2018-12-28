import React from 'react';
import { StyleSheet,ScrollView,View } from 'react-native';
import CompletedAppointsContainer from '../../../containers/CompletedAppointsContainer';


export default class CompletedAppointsScreen extends React.Component{
    
    render(){
       const {wrapperStyle}= styles
        return(
           <View style={wrapperStyle}>
             <CompletedAppointsContainer/>
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