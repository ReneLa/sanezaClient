import axios from 'axios'
import { AsyncStorage } from "react-native";


import {
    LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER,SIGNUP_USER_SUCCESS,SIGNUP_USER_FAIL,
    VALUE_CHANGE
} from './types'



//Login Actions

export const loginUser =({username,password})=>{
    return dispatch => {

        dispatch({type:LOGIN_USER})
        
        axios({
            method: 'post',
            url: 'http://139.59.163.209:8080/public/client/login',
            data:{
                "username":username,
                "password":password
            },
            config:{header:{"Content-Type": "application/json"}}
        })
        .then((response) => {
            if (response.status == 200){
                loginUserSuccess(dispatch,response.data.RETURN_DATA.user)
              
                const userId=response.data.RETURN_DATA.user.clientId
                const userKey=response.data.RETURN_DATA.token
                AsyncStorage.setItem('auth_key', userKey);
                AsyncStorage.setItem('auth_ID', JSON.stringify(userId));
              }
            // loginUserSuccess(dispatch,response.data.RETURN_DATA.user,response.data.RETURN_DATA.token)
        
        }
            
)
        
        .catch((error)=> {console.log(error)})
        .catch(()=>loginUserFail(dispatch))
    };
}

const loginUserSuccess=(dispatch,user,key)=>{
    dispatch({
        type:LOGIN_USER_SUCCESS,
         payload:{user,key}
    }
  )
    
}


const loginUserFail = (dispatch)=>{
     dispatch({ type:LOGIN_USER_FAIL})
}


//Signup Actions


export const signupUser =({
    location,streetname,phonenumber,username,
    firstname,lastname,dateofbirth,sex,password,email})=>{
    return dispatch => {
        dispatch({type:SIGNUP_USER})
        
        axios({
            method: 'post',
            url:"http://139.59.163.209:8080/public/client/register",
            data:{
                "locationId":"321",
                "streetName":streetname,
                "phoneNumber":phonenumber,
                "username":username,
                "firstName":firstname,
                "lastName":lastname,
                "birthdayStr":dateofbirth,
                "sex":sex,
                "password":password,
                "email":email,
                // "profileImage":"yooooo"
            }
            
        })
        .then(response => signupUserSuccess(dispatch,response.data),
                //   console.log(response.data)
        )
        .catch((error)=> {console.log(error)})
        .catch(()=>signupUserFail(dispatch))
    };
}


const signupUserSuccess=(dispatch,user)=>{
    dispatch({
        type:SIGNUP_USER_SUCCESS,
         payload:user
    })
}


const signupUserFail = (dispatch)=>{
     dispatch({ type:SIGNUP_USER_FAIL})
}


export const onValueChange=({prop,value})=>{
    return{
      type:VALUE_CHANGE,
      payload:{
          prop,value
      }
    }
}

