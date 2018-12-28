import {
    GET_CLIENT,GET_CLIENT_FAILED
 
} from '../actions/types'

const INITIAL_STATE = {
           currentUser:null,
           error:'',
           loading:false
       }


export default (state=INITIAL_STATE,action)=>{
   switch(action.type){
       case GET_CLIENT:
           return {...state,currentUser:action.payload}

       case GET_CLIENT_FAILED:
           return {...state,error:'cant get Client'} 
            
       default:



       return state
   }
}