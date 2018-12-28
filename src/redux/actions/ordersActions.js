import axios from 'axios'


import {
    //get pending orders    
        FETCH_PENDING_ORDERS,FETCH_PENDING_ORDERS_FAILED,
    
    //get completed orders
        FETCH_COMPLETED_ORDERS,FETCH_COMPLETED_ORDERS_FAILED,
    
    //delete pending order    
        DELETE_PENDING_ORDER,DELETE_PENDING_ORDER_FAILED,
} from './types'


//fetch completed orders
export const getCompletedOrders=(clientId)=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/order/completed',
            data:{"clientId":clientId},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:FETCH_COMPLETED_ORDERS, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:FETCH_COMPLETED_ORDERS_FAILED, payload:err})
          })
      }
}
//fetch pending orders
export const getPendingOrders=(clientId)=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/order/pend',
            data:{"clientId":clientId},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:FETCH_PENDING_ORDERS, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:FETCH_PENDING_ORDERS_FAILED, payload:err})
          })
      }
}


//delete pending Order

export const deletePendingOrder=(orderId)=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/app/status',
            data:{"appNo":orderId},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        // axios.delete('http://139.59.163.209:8080/public/order/cancel',{"orderId":orderId},{headers:{"Content-Type": "application/json"}})
        .then(function(response){
            dispatch({type:DELETE_PENDING_ORDER});
            // console.log('successfully deleted')
          })
          .catch(function(err){
            dispatch({type:DELETE_PENDING_ORDER_FAILED, payload:err})
          })
      }
}