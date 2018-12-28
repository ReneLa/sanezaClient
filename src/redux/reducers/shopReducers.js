import {
    FETCH_ALL_SHOPS,FETCH_SHOPS_FAILED, 
    FETCH_SINGLE_SHOP, FETCH_SHOP_FAILED,

    FETCH_SHOP_SERVICES,FETCH_SHOP_SERVICES_FAILED,

    FETCH_SHOP_PRODUCTS,FETCH_SHOP_PRODUCTS_FAILED,
    FETCH_SERVICE,FETCH_SERVICE_FAILED,

    REFRESH

} from '../actions/types'

const INITIAL_STATE={
    shops:[],
    shopProducts:[],
    shopServices:[],
    service:{},
    singleShop:'',
    error:'',
    loading:false,
    
}

export default (state=INITIAL_STATE,action)=> {

    switch(action.type){
        case REFRESH:
          return {...state,[action.payload.prop]:''}
          
        case FETCH_ALL_SHOPS:
            return{...state, shops:action.payload}

        case FETCH_SHOPS_FAILED:
            return {...state,error:'Cant Get the shops'} 

        case FETCH_SINGLE_SHOP:
            return{...state,singleShop:action.payload}

        case FETCH_SHOP_FAILED:
             return {...state, error:'Cant Get this perticular Shop'} 

          // get shop services  
        case FETCH_SHOP_SERVICES:
             return{...state,shopServices:action.payload} 
             
        case FETCH_SHOP_SERVICES_FAILED:
            return {...state, error:'cant fetch these shop services'}     

        case FETCH_SERVICE:
            return{...state,service:action.payload} 
            
        case FETCH_SERVICE_FAILED:
           return {...state, error:'cant fetch this service'}   

        //shop shop products
        case FETCH_SHOP_PRODUCTS :
            return{...state,shopProducts:action.payload} 
            
        case FETCH_SHOP_PRODUCTS_FAILED :
           return {...state, error:'cant fetch these shopproducts'}

        default:
        
        return state
    }
}