import React from 'react';
import {View,ScrollView,Text,StyleSheet,Platform} from 'react-native';

import {connect} from "react-redux";
import {getPendingAppointments,deletePendingAppointment} from "../redux/actions"

import PendingAppointCard from '../components/appoints/PendingAppointCard'
import colors from '../styles/colors'
import AlertModal from '../components/common/AlertModal'


class PendingAppointsContainer extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            appointId:'',
            isCancel:false
        }
    
    }

    componentDidMount(){
        const id= 1
        this.props.getPendingAppointments(id)
    }
    onOpen(id){
        this.setState({isCancel:true,appointId:id})
    }

    onDelete(id){
        this.props.deletePendingAppointment(id)
        this.closeModal()
        const {navigate}=this.props.navigation
        navigate('Reviews')
    }
   closeModal(){
     this.setState({isCancel:false})
   }

    renderShops(){

        const {pendingAppoints} = this.props

        if(pendingAppoints)
        return(
            pendingAppoints.map((appoint,i) =>{
                return(
                    <PendingAppointCard key={appoint.appNo}
                               name={appoint.shopName}
                               location={appoint.locationName}
                               total={appoint.total}
                               listing={appoint.appoitements}
                               handleCancelPress={this.onOpen.bind(this,appoint.appNo)}
                              
                               />
                )
            })
        )
    }
    render(){
        // console.log(this.props)
       const {wrapperStyle,scrollViewStyle}= styles
       const visible =this.state.isCancel ? true : false
        return(
           <View style={wrapperStyle}>
             <ScrollView 
                 showsVerticalScrollIndicator={false}
                 contentContainerStyle={scrollViewStyle}>
               <View>
                   {this.renderShops()}
               </View>
            </ScrollView>
            <AlertModal  
                 modalVisible={visible}
                 secondLine="You want to Cancel"
                 onConfirm={this.onDelete.bind(this,this.state.appointId)}
                 onClose={this.closeModal.bind(this)}
            />
           </View>
        )
    }
}


function mapStateToProps({appoints}){
    const {error,loading,pendingAppoints}=appoints
    return {
       error,loading, pendingAppoints
    }
}

export default connect(mapStateToProps,{getPendingAppointments,deletePendingAppointment})(PendingAppointsContainer)

const styles=StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        paddingTop:Platform.OS === 'ios' ? 15 : 10,
        paddingLeft:Platform.OS === 'ios' ? 15: 10,
        paddingRight:Platform.OS === 'ios' ? 15 :10
    },
    scrollViewStyles:{
        display:'flex',
        flex:1
    }
})