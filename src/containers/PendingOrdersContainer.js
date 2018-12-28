import React from 'react';
import {View,ScrollView,Text,StyleSheet,Platform} from 'react-native';

import {connect} from "react-redux";
import {getPendingOrders,deletePendingOrder} from "../redux/actions"
import AlertModal from '../components/common/AlertModal'
import PendingCard from '../components/orders/PendingCard'


class PendingOrdersContainer extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            orderId:'',
            isCancel:false
        }
    
    }

    componentDidMount(){
        const id= 4
        this.props.getPendingOrders(id)
    }
    onOpen(id){
        this.setState({isCancel:true})
    }

    onDelete(id){
        this.props.deletePendingOrder(id)
        this.closeModal()
        const {navigate}=this.props.navigation
        navigate('Reviews')
    }
   closeModal(){
     this.setState({isCancel:false})
   }

    renderShops(){

        const {pendingOrders} = this.props

        if(pendingOrders)
        return(
            pendingOrders.map((order,index) =>{
                return(
                    <PendingCard key={index}
                                 name={order.shopName}
                                 location={order.locationName}
                                 listing={order.products}
                                 total={order.total}
                                 handleCancelPress={this.onOpen.bind(this,order.orderNo)}
                               />
                )
            })
        )
    }
    render(){
        
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
                 onConfirm={this.onDelete.bind(this,this.state.orderId)}
                 onClose={this.closeModal.bind(this)}
            />
           </View>
        )
    }
}


function mapStateToProps({orders}){
    const {error,loading,pendingOrders}=orders
    return {
       error,loading, pendingOrders
    }
}

export default connect(mapStateToProps,{getPendingOrders,deletePendingOrder})(PendingOrdersContainer)

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