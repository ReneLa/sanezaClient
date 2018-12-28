import {
     USERNAME_CHANGED,PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER,SIGNUP_USER_SUCCESS,SIGNUP_USER_FAIL,
    FIRSTNAME_CHANGED,LASTNAME_CHANGED,EMAIL_CHANGED,
    PHONENUMBER_CHANGED,SEX_CHANGED,LOCATION_CHANGED,
    STREETNAME_CHANGED,DATEOFBIRTH_CHANGED, SAVE_USER
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

        case USERNAME_CHANGED:
             return {...state, username:action.payload}
        
        case PASSWORD_CHANGED:
             return {...state, password:action.payload}

        case SAVE_USER:
             return {...state, user:action.payload}
             
        case LOGIN_USER:
             return {...state,loading:true, error:''}
             
        case LOGIN_USER_SUCCESS:
          //    return {...state, isLoggedIn:true, user:action.payload.user, USER_KEY:action.payload.user_key}   
             return {...state, isLogin:true, user:action.payload,loading:false,error:''} 
          
        case LOGIN_USER_FAIL:    
             return {...state, error:'Authetication failed',isLogin:false,loading:false} 



        case FIRSTNAME_CHANGED:
             return {...state, firstname:action.payload}
        
        case LASTNAME_CHANGED:
             return {...state, lastname:action.payload}

        case EMAIL_CHANGED:
             return {...state, email:action.payload}
        
        case PHONENUMBER_CHANGED:
             return {...state, phonenumber:action.payload}

        case SEX_CHANGED:
             return {...state, sex:action.payload}

        case DATEOFBIRTH_CHANGED:
             return {...state, dateofbirth:action.payload}

        case LOCATION_CHANGED:
             return {...state, location:action.payload}

        case STREETNAME_CHANGED:
             return {...state, streetname:action.payload}

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