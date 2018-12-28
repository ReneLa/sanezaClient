import {ADD,REMOVE,UPDATE,CHANGE_DATE} from '../actions/types'

const initialState = {
  byId: [],
  byHash: [],
  dateSelected:null
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

        return {...state, dateSelected:action.payload}
    
    default: {
      return state
    }
  }
}