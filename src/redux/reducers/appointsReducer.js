import { ADD_TO_APPOINTMENTS, REMOVE_FROM_APPOINTMENTS, CHANGE_DATE, 
         FETCH_COMPLETED_APPOINTMENTS, FETCH_COMPLETED_APPOINTMENTS_FAILED,
         FETCH_PENDING_APPOINTMENTS,FETCH_PENDING_APPOINTMENTS_FAILED,
         DELETE_PENDING_APPOINTMENT,DELETE_PENDING_APPOINTMENT_FAILED
        } from '../actions/types';


const INITIAL_STATE= {
    appointments:[],
    // dateSelected:new Date().toDateString(),
    pendingAppoints:[],
    completedAppoints:[]
}

export default (state=INITIAL_STATE, action)=>{

    switch(action.type){
        // case CHANGE_DATE:
        //     return {...state, dateSelected:action.payload}

        case ADD_TO_APPOINTMENTS:
        console.log(action.payload)
           return {...state, appointments:[action.payload]}

        case REMOVE_FROM_APPOINTMENTS:
           console.log(action.payload)

           const newAppoints = state.appointments.filter((appoint) => appoint.serviceId!== action.payload.id);          
           return {...state, appointments: newAppoints }
        //    let index = items.findIndex((item) => item.serviceId === action.payload.); 
        //    return [
        //      ...items.slice(0, index),
        //      ...item.slice(index + 1)
        //    ]
           

        
         //fetch pending orders
        case FETCH_COMPLETED_APPOINTMENTS :
             return{...state,completedAppoints:action.payload} 
       
        case FETCH_COMPLETED_APPOINTMENTS_FAILED :
             return {...state, error:'cant fetch completed appointment'}

      //fetch pending orders
        case FETCH_PENDING_APPOINTMENTS :
            return{...state,pendingAppoints:action.payload} 
          
        case FETCH_PENDING_APPOINTMENTS_FAILED :
         return {...state, error:'cant fetch pending appointment'}

      //delete pending order
        case DELETE_PENDING_APPOINTMENT:
          return{...state} 
      
        case DELETE_PENDING_APPOINTMENT_FAILED :
          return {...state, error:'cant delete this pending appointment'}

        default:
        return  state
    }
    

}