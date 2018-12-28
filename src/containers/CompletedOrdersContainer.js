import React from 'react';

import {connect} from "react-redux";
import {getCompletedOrders} from "../redux/actions"

import {View,ScrollView,Text,StyleSheet,Platform} from 'react-native';
import CartCard from '../components/orders/CartCard'
import colors from '../styles/colors'


 class CompletedOrdersContainer extends React.Component{
    

    componentDidMount(){
        const id= 4
        this.props.getCompletedOrders(id)
    }
    renderShops(){
        const {completedOrders} = this.props
        if(completedOrders)
        return(
            completedOrders.map((order,index) =>{
                return(
                    <CartCard key={order.orderNo}
                               name={order.shopName}
                               location={order.locationName}
                               total={order.total}
                               listing={order.products}
                               />
                )
            })
        )
    }
    render(){
       const {wrapperStyle,scrollViewStyle}= styles
    //    console.log(this.props.completedOrders)
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


function mapStateToProps({orders}){
    const {error,loading,completedOrders}=orders
    return {
       error,loading, completedOrders
    }
}

export default connect(mapStateToProps,{getCompletedOrders})(CompletedOrdersContainer)

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