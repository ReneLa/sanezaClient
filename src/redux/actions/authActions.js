import axios from 'axios'
// import {onSignIn} from '../../auth'
import { AsyncStorage } from "react-native";

import {
    USERNAME_CHANGED,PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER,SIGNUP_USER_SUCCESS,SIGNUP_USER_FAIL,
    FIRSTNAME_CHANGED,LASTNAME_CHANGED,EMAIL_CHANGED,
    PHONENUMBER_CHANGED,SEX_CHANGED,LOCATION_CHANGED,
    STREETNAME_CHANGED,DATEOFBIRTH_CHANGED,SAVE_USER
} from './types'



//Login Actions
export const usernameChanged=(text)=>{
    return{
        type:USERNAME_CHANGED,
        payload:text
    } 
}

export const passwordChanged =(text) =>{
    return {
        type:PASSWORD_CHANGED,
        payload:text
    }
}


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
                //  let myData= {
                //      userId:response.data.RETURN_DATA.user.clientId,
                //      userKey:response.data.RETURN_DATA.token
                //  }
                const userId=response.data.RETURN_DATA.user.clientId
                const userKey=response.data.RETURN_DATA.token
                AsyncStorage.setItem('auth_key', userKey);
                AsyncStorage.setItem('auth_ID', JSON.stringify(userId));
              }
            // loginUserSuccess(dispatch,response.data.RETURN_DATA.user,response.data.RETURN_DATA.token)
            
            // saveKey(dispatch,response.data.RETURN_DATA.token)
            // console.log(response.data.RETURN_DATA)
        
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
                locationId:location,
                streatName:streetname,
                phoneNumber:phonenumber,
                username:username,
                firstName:firstname,
                lastName:lastname,
                birthdayStr:dateofbirth,
                sex:sex,
                password:password,
                email:email
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


export const firstnameChanged=(text)=>{
    return{
        type:FIRSTNAME_CHANGED,
        payload:text
    } 
}

export const lastnameChanged =(text) =>{
    return {
        type:LASTNAME_CHANGED,
        payload:text
    }
}

export const emailChanged =(text) =>{
    return {
        type:EMAIL_CHANGED,
        payload:text
    }
}

export const phonenumberChanged=(text)=>{
    return{
        type:PHONENUMBER_CHANGED,
        payload:text
    } 
}

export const sexChanged =(text) =>{
    return {
        type:SEX_CHANGED,
        payload:text
    }
}

export const dateofbirthChanged =(text) =>{
    return {
        type:DATEOFBIRTH_CHANGED,
        payload:text
    }
}

export const locationChanged =(text) =>{
    return {
        type:LOCATION_CHANGED,
        payload:text
    }
}

export const streetnameChanged =(text) =>{
    return {
        type:STREETNAME_CHANGED,
        payload:text
    }
}

