import axios from 'axios'


import {

//search related type
    SEARCH_UPDATE,

    GET_ALL_DISTRICTS,GET_ALL_DISTRICTS_FAILED,GET_ALL_PROVINCES,
    GET_ALL_PROVINCES_FAILED,GET_ALL_SECTORS_FAILED,GET_ALL_SERVICES,
    GET_ALL_SERVICES_FAILED,GET_ALL_SECTORS,
    SEARCH_TEXT_CHANGED,SEARCH_FAILED,
    SEARCH_BRANCH_BY_LOCATIONNAME,SEARCH_BRANCH_BY_SHOPNAME,

    GET_SERVICES_LOCATION_AND_CATEGORY,GET_SERVICES_LOCATION_AND_CATEGORY_FAILED
        
} from './types'


//search related actions
export const searchUpdate=({prop,value})=>{
    return{
        type:SEARCH_UPDATE,
        payload:{
            prop,
            value,
           
        }
    }
}

export const searchTextChanged=(text)=>{
    return{
        type:SEARCH_TEXT_CHANGED,
        payload:text
    } 
}




export const getAllServices=()=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/service/services',
            data:{"serviceId":""},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:GET_ALL_SERVICES, payload:response.data.RETURN_DATA.data})  
          })
          .catch(function(err){
            dispatch({type:GET_ALL_SERVICES_FAILED, payload:err})
          })
      }
}


export const getAllProvinces=()=>{
    
    return function(dispatch){
        axios.post('http://139.59.163.209:8080/public/location/province')
        .then(function(response){
            dispatch({type:GET_ALL_PROVINCES, payload:response.data.RETURN_DATA.data});
            //   console.log(response.data)
          })
          .catch(function(err){
            dispatch({type:GET_ALL_PROVINCES_FAILED, payload:err})
          })
      }
}

export const getDistrictsInProvince=(id)=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/location/districts/'+ id,
            // data:{"provinceId":id},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:GET_ALL_DISTRICTS, payload:response.data.RETURN_DATA.data});
            // console.log(response.data.RETURN_DATA.data)
          })
          .catch(function(err){
            dispatch({type:GET_ALL_DISTRICTS_FAILED, payload:err})
          })
      }
}

export const getSectorsInDistrict=(id)=>{
    
    return function(dispatch){
        axios.post('http://139.59.163.209:8080/public/location/sectors/'+ id)
        .then(function(response){
            dispatch({type:GET_ALL_SECTORS, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:GET_ALL_SECTORS_FAILED, payload:err})
          })
      }
}

export  const getBranchByLocationName=(text)=>{
    return function(dispatch){
        axios({ method: 'post',
        url: 'http:139.59.163.209:8080/public/branche/them',
        data:{"locationName":text},
        config:{header:{"Content-Type": "application/json"}}
      })
        .then(function(response){
            dispatch({type:SEARCH_BRANCH_BY_LOCATIONNAME, payload:response.data});
            
          })
          .catch(function(err){
            dispatch({type:SEARCH_FAILED, payload:err})
          })
      }
}

export  const getBranchByShopName=(text)=>{
    return function(dispatch){
        axios({ method: 'post',
        url: 'http:139.59.163.209:8080/public/shop/branches',
        data:{"shopName":text},
        config:{header:{"Content-Type": "application/json"}}
      })
        .then(function(response){
            dispatch({type:SEARCH_BRANCH_BY_SHOPNAME, payload:response.data.RETURN_DATA.data});
            // console.log(response.data.RETURN_DATA.data)
          })
          .catch(function(err){
            dispatch({type:SEARCH_FAILED, payload:err})
          })
      }
}



export const getAllServicesByLocationIdAndCatId=(locId, catId)=>{
    return function(dispatch){
        axios({ method: 'post',
        url: 'http://139.59.163.209:8080/public/branche/location',
        data:{
            "locationId":locId,
            "categoryId":catId
    },
        config:{header:{"Content-Type": "application/json"}}
      })
        .then(function(response){
            dispatch({type:GET_SERVICES_LOCATION_AND_CATEGORY, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:GET_SERVICES_LOCATION_AND_CATEGORY_FAILED, payload:err})
          })
      }
}