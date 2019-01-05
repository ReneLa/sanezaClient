import {ADD,REMOVE,UPDATE,CHANGE_DATE, SET_TIME,REFRESH_CART} from './types'


export const addToCart=(item)=>{
  return{
    type:ADD,
    payload:item
  }  
}

export const removeFromCart=(id)=>{
  return{
    type:REMOVE,
    payload:id
  }
}

export const updateCart=(item)=>{
  return{
    type:UPDATE,
    payload:item
  }
}

export const refreshCart=()=>{
  return{
    type:REFRESH_CART
  }
}
export const dateChanged=(value)=>{
    return{
        type:CHANGE_DATE,
        payload: value
     
    }
  }
export const setTime=(value)=>{
  return{
      type:SET_TIME,
      payload:value
  }
}

