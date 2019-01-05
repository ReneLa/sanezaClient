import {
     USERNAME_CHANGED,PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,
    LOGIN_USER,VALUE_CHANGE,
    SIGNUP_USER,SIGNUP_USER_SUCCESS,SIGNUP_USER_FAIL,
    SAVE_USER
} from '../actions/types'

const INITIAL_STATE = {
            username:'',
            password:'',
            firstname:'',
            lastname:'',
            email:'',
            phonenumber:'',
            sex:'',
            dateofbirth:'',
            location:'',
            streetname:'',

            user:null,
            error:'',
            loading:false,
            isLogin:false
        }


export default (state=INITIAL_STATE,action)=>{
    switch(action.type){

        case VALUE_CHANGE:
           return{...state, [action.payload.prop]:action.payload.value}

        case USERNAME_CHANGED:
             return {...state, username:action.payload}
        
        case PASSWORD_CHANGED:
             return {...state, password:action.payload}

        case SAVE_USER:
             return {...state, user:action.payload}
             
        case LOGIN_USER:
             return {...state,loading:true, error:''}
             
        case LOGIN_USER_SUCCESS:
             return {...state, isLogin:true, user:action.payload,loading:false,error:''} 
          
        case LOGIN_USER_FAIL:    
             return {...state, error:'Authetication failed',isLogin:false,loading:false} 

        case SIGNUP_USER:
             return {...state,loading:true,error:''}

        case SIGNUP_USER_SUCCESS:
             return {...state, user:action.payload}  

        case SIGNUP_USER_FAIL:    
             return {...state, error:'Authetication failed',loading:false}       
        default:



        return state
    }
}