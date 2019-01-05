import React from 'react';
import {View,ScrollView,Text,StyleSheet,Platform,AsyncStorage} from 'react-native';

import {connect} from "react-redux";
import {getPendingOrders,deletePendingOrder} from "../redux/actions"
import AlertModal from '../components/common/AlertModal'
import PendingCard from '../components/orders/PendingCard'


class PendingOrdersContainer extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            orderId:'',
            isCancel:false,
            ordersOrError:null,
            client:''
        }
    
    }

    componentDidMount = async()=>{
        const retrievedItem =  await AsyncStorage.getItem("client");
        const item = JSON.parse(retrievedItem);
        this.setState({client:item.clientId})
        this.props.getPendingOrders(item.clientId)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // Store prevUserId in state so we can compare when props change.
        // Clear out any previously-loaded user data (so we don't render stale stuff).
        if (nextProps.pendingOrders !== prevState.pendingOrders) {
          return {
            pendingOrders: nextProps.pendingOrders,
            ordersOrError: null,
          };
        }
    
        // No state update necessary
        return null;
      }
    
    //   componentDidMount() {
    //     // It's preferable in most cases to wait until after mounting to load data.
    //     // See below for a bit more context...
    //     this._loadUserData();
    //   }
    
    // componentDidUpdate = (prevProps, prevState)=> {
    //     if (this.state.ordersOrError === null) {
    //       // At this point, we're in the "commit" phase, so it's safe to load the new data.
    //       this.props.getPendingOrders(this.state.client)
    //     }
       
        
    //   }


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
               <View style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
               }}>
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
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
})