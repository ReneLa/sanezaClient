import {
    //make an order
    MAKE_ORDER,MAKE_ORDER_FAILED,

    FETCH_PENDING_ORDERS,FETCH_PENDING_ORDERS_FAILED,

    DELETE_PENDING_ORDER,DELETE_PENDING_ORDER_FAILED,

    FETCH_COMPLETED_ORDERS,FETCH_COMPLETED_ORDERS_FAILED,
} from '../actions/types'

const INITIAL_STATE={
    pendingOrders:[],
    completedOrders:[],
    error:'',
    loading:false,
    newOrder:{}
    
}

export default (state=INITIAL_STATE,action)=> {

    switch(action.type){   

        case MAKE_ORDER:
           return{...state,newOrder:action.payload} 
         
        case MAKE_ORDER_FAILED :
            return {...state, error:'cant make order'}
            
         //fetch pending orders
        case FETCH_COMPLETED_ORDERS :
           return{...state,completedOrders:action.payload} 
         
         case FETCH_COMPLETED_ORDERS_FAILED :
            return {...state, error:'cant fetch completed orders'}

        //fetch pending orders
        case FETCH_PENDING_ORDERS :
            return{...state,pendingOrders:action.payload} 
            
        case FETCH_PENDING_ORDERS_FAILED :
           return {...state, error:'cant fetch pending orders'}

        //delete pending order
        case DELETE_PENDING_ORDER :
            return{...state,pendingOrders:[]} 
        
        case DELETE_PENDING_ORDER_FAILED :
            return {...state, error:'cant delete this pending order'}

        default:
        
        return state
    }
}