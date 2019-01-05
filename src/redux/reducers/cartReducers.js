import {ADD,REMOVE,UPDATE,REFRESH_CART,CHANGE_DATE,SET_TIME} from '../actions/types'

const initialState = {
  byId: [],
  byHash: [],
  dateSelected:null,
  timeSelected:null
}


export default (state=initialState,action)=> {

  switch(action.type){
    case ADD: {
     
      return {
        byId: [ ...state.byId, action.payload.id],
        // byHash:action.payload
        byHash: [
          ...state.byHash,
          // [action.payload.id]: action.payload
           action.payload
        
        ]
        
      }
    }
      
    case UPDATE: {
      state.byHash[action.payload] = {
        ...state.byHash[action.payload],
        ...action.payload
      }
      return {
        ...state
      }
    }  
      
    case REMOVE: {
      const prunedIds = state.byId.filter(item => {
        return item !== action.payload // return all the items not matching the action.id
      })
      // delete state.byHash[action.payload] // delete the hash associated with the action.id
      const prunedProd = state.byHash.filter(item => {
        return item.id !== action.payload // return all the items not matching the action.id
      })
      return {
        byId: prunedIds,
        byHash: prunedProd
      }
    }

    case CHANGE_DATE:
      const date=action.payload.toDateString()
      const time=action.payload.toTimeString()
      return {...state, dateSelected:date,timeSelected:time}

    case SET_TIME:
      return {...state, time:action.payload}
    
    case REFRESH_CART:
         return{
           byHash:[],byId:[],dateSelected:null,timeSelected:null
         }  

    default: {
      return state
    }
  }
}