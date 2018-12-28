import {
    SEARCH_UPDATE,

    SERVICE_CHANGED,PROVINCE_CHANGED,
    DISTRICT_CHANGED,SECTOR_CHANGED,
    GET_ALL_SERVICES,GET_ALL_PROVINCES,
    GET_ALL_DISTRICTS,GET_ALL_SECTORS,
    GET_ALL_SERVICES_FAILED, GET_ALL_PROVINCES_FAILED, 
    GET_ALL_DISTRICTS_FAILED, GET_ALL_SECTORS_FAILED,
    GET_SERVICES_LOCATION_AND_CATEGORY,GET_SERVICES_LOCATION_AND_CATEGORY_FAILED,

     SEARCH_TEXT_CHANGED,SEARCH_FAILED,
     SEARCH_BRANCH_BY_LOCATIONNAME,
     SEARCH_BRANCH_BY_SHOPNAME
} from '../actions/types'

const INITIAL_STATE = {
           service:'',        
           province:'',        
           district:'',    
           sector:'',
           allServices:[],
           allProvinces:[],
           districtsInProvince:[],
           sectorsInDistrict:[],
           searchText:'',
           resultSearch:[],
           error:'',
           loading:false
       }


export default (state=INITIAL_STATE,action)=>{
   switch(action.type){
       case SEARCH_UPDATE:
           return{...state,
               [action.payload.prop]:action.payload.value
                  }

       case SEARCH_TEXT_CHANGED:
           return {...state, searchText:action.payload}

       case SEARCH_FAILED:
            return{...state, error:'Cant get these shop'}    

       case SEARCH_BRANCH_BY_LOCATIONNAME:
            return {...state,resultSearch:action.payload}

       case SEARCH_BRANCH_BY_SHOPNAME:
            return{...state, resultSearch:action.payload}    
           
       case GET_ALL_SERVICES:
            return {...state, allServices:action.payload}
       case GET_ALL_SERVICES_FAILED:
            return {...state, error:'cant fetch all services'}

       case GET_ALL_PROVINCES:
            return {...state, allProvinces:action.payload}

       case GET_ALL_PROVINCES_FAILED:
            return {...state, error:'Cant get all provinces'}
       case GET_ALL_DISTRICTS:
            return {...state, districtsInProvince:action.payload}
            
       case GET_ALL_DISTRICTS_FAILED:
            return {...state, error:'cant get all districts'}
       case GET_ALL_SECTORS:
            return {...state, sectorsInDistrict:action.payload}
        case GET_ALL_SECTORS_FAILED:
            return {...state, error:'cant get all sectors'}

        case GET_SERVICES_LOCATION_AND_CATEGORY:
            return {...state,resultSearch:action.payload}   

        case GET_SERVICES_LOCATION_AND_CATEGORY_FAILED:   
            return {...state, error:'cant get these services'}  
      
       default:



       return state
   }
}