import axios from 'axios'

import {
         ADD_TO_APPOINTMENTS,
         REMOVE_FROM_APPOINTMENTS,
        //  CHANGE_DATE,
        //create appointment
        CREATE_APPOINTMENT,CREATE_APPOINTMENT_FAILED,
        
         //get pending appointments   
        FETCH_PENDING_APPOINTMENTS,FETCH_PENDING_APPOINTMENTS_FAILED,
    
        //get completed appointments
        FETCH_COMPLETED_APPOINTMENTS,FETCH_COMPLETED_APPOINTMENTS_FAILED,
        
        //delete pending appointments  
        DELETE_PENDING_APPOINTMENT,DELETE_PENDING_APPOINTMENT_FAILED,
} from './types'



export const addToAppointments=(appointment)=>{
    return({
        type:ADD_TO_APPOINTMENTS,
        payload:appointment
    })
}

export const removeFromAppointments=(id)=>{
  return({
      type:REMOVE_FROM_APPOINTMENTS,
      payload:id
  })
}

//create appointment 
export const createAppointment=(appoint)=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/app/insert',
            data:{
                "clientId":appoint.clientId,
                "serviceId":appoint.id,
                "respondTime":appoint.date,
                'branchId':appoint.branchId
            },
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:CREATE_APPOINTMENT, payload:response});
            
          })
          .catch(function(err){
            dispatch({type:CREATE_APPOINTMENT_FAILED, payload:err})
          })
      }
}

//fetch completed orders
export const getCompletedAppointments=(clientId)=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/app/completed',
            data:{"clientId":clientId},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:FETCH_COMPLETED_APPOINTMENTS, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:FETCH_COMPLETED_APPOINTMENTS_FAILED, payload:err})
          })
      }
}
//fetch pending orders
export const getPendingAppointments=(clientId)=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/app/pend',
            data:{"clientId":clientId},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:FETCH_PENDING_APPOINTMENTS, payload:response.data.RETURN_DATA.data});
            
          })
          .catch(function(err){
            dispatch({type:FETCH_PENDING_APPOINTMENTS_FAILED, payload:err})
          })
      }
}


//delete pending Order

export const deletePendingAppointment=(appointId)=>{
    
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http:139.59.163.209:8080/public/app/status',
            data:{"appNo":appointId},
            config:{header:{"Content-Type": "application/json"}}
          
        })
      
        .then(function(response){
            dispatch({type:DELETE_PENDING_APPOINTMENT});
            // console.log('successfully deleted')
          })
          .catch(function(err){
            dispatch({type:DELETE_PENDING_APPOINTMENT_FAILED, payload:err})
          })
      }
}