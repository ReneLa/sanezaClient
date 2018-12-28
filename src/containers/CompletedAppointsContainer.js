import React from 'react';

import {connect} from "react-redux";
import {getCompletedAppointments} from "../redux/actions"

import {View,ScrollView,Text,StyleSheet,Platform} from 'react-native';
import AppointCard from '../components/appoints/AppointCard'
import colors from '../styles/colors'


 class CompletedAppointsContainer extends React.Component{
    

    componentDidMount(){
        const id= 1
        this.props.getCompletedAppointments(id)
    }
    renderShops(){
        const {completedAppoints} = this.props
        if(completedAppoints)
        return(
            completedAppoints.map((appoint,index) =>{
                return(
                    <AppointCard key={index}
                            name={appoint.shopName}
                            location={appoint.locationName}
                            listing={appoint.appoitements}
                            total={appoint.total}
                    />
                )
            })
        )
    }
    render(){
        // console.log(this.props.completedAppoints)
       const {wrapperStyle,scrollViewStyle}= styles
        return(
           <View style={wrapperStyle}>
             <ScrollView 
                 showsVerticalScrollIndicator={false}
                 contentContainerStyle={scrollViewStyle}>
               <View>
                   {this.renderShops()}

               </View>
            </ScrollView>
           </View>
        )
    }
}


function mapStateToProps({appoints}){
    const {error,loading,completedAppoints}=appoints
    return {
       error,loading, completedAppoints
    }
}

export default connect(mapStateToProps,{getCompletedAppointments})(CompletedAppointsContainer)

const styles=StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        paddingTop:Platform.OS === 'ios' ? 15 : 10,
        paddingLeft:Platform.OS === 'ios' ? 15: 15,
        paddingRight: Platform.OS === 'ios' ? 15 : 10
    },
    scrollViewStyles:{
        display:'flex',
        flex:1
    }
})