import {ADD,REMOVE,UPDATE,CHANGE_DATE} from './types'


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


export const dateChanged=(value)=>{
    return{
        type:CHANGE_DATE,
        payload: value
     
    }
  }
// export const dateChanged=({prop,value})=>{
//   return{
//       type:CHANGE_DATE,
//       payload:{
//         prop,
//         value
//       }
//   }
// }

