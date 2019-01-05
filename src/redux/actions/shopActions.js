import axios from 'axios'


import {
    //get allshop
        FETCH_ALL_SHOPS,FETCH_SHOPS_FAILED,
        FETCH_SINGLE_SHOP,FETCH_SHOP_FAILED,
    
    //get shop services    
        FETCH_SHOP_SERVICES,FETCH_SHOP_SERVICES_FAILED,
        FETCH_SERVICE,FETCH_SERVICE_FAILED,
    
    //single shop products
        FETCH_SHOP_PRODUCTS,FETCH_SHOP_PRODUCTS_FAILED,
        FETCH_PRODUCT,FETCH_PRODUCT_FAILED,
    //order product  
    
    
        REFRESH_SHOP
    
} from './types'

//shop actions 

export const refreshShop =()=>{
    return{
        type:REFRESH_SHOP
    }
}

export const getAllShops=()=>{
    return function(dispatch){
        axios.post('http://139.59.163.209:8080/public/branche/branches',{headers:{"Content-Type": "application/json"}})
          .then(function(response){
            dispatch({type:FETCH_ALL_SHOPS, payload:response.data.RETURN_DATA.data});
          })
          .catch(function(err){
            dispatch({type:FETCH_SHOPS_FAILED, payload:err})
          })
      }
}



export const getSingleShop=(id)=>{
     
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/branche/get',
            data:{"branchId":id},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        
        .then(function(response){
            dispatch({type:FETCH_SINGLE_SHOP, payload:response.data.RETURN_DATA.this});
            
          })
          .catch(function(err){
            dispatch({type:FETCH_SHOP_FAILED, payload:err})
          })
      }
}

// services actions
export const getShopServices=(id)=>{
    
    return function(dispatch){
        
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/service/branch',
            data:{"branchId":id},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:FETCH_SHOP_SERVICES, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:FETCH_SHOP_SERVICES_FAILED, payload:err})
          })
      }
}

export const getService=(id)=>{
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http://139.59.163.209:8080/public/service/service',
            data:{"serviceId":id},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:FETCH_SERVICE, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:FETCH_SERVICE_FAILED, payload:err})
          })
      }
}


//get shop products
export const getShopProducts=(id)=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http://139.59.163.209:8080/public/products/branch',
            data:{"branchId":id},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:FETCH_SHOP_PRODUCTS, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:FETCH_SHOP_PRODUCTS_FAILED, payload:err})
          })
      }
}

export const getProduct=(id)=>{
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http://139.59.163.209:8080/public/products/getinfo',
            data:{"productId":id},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:FETCH_PRODUCT, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:FETCH_PRODUCT_FAILED, payload:err})
          })
      }
}

