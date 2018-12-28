import axios from 'axios'
import{
    GET_CLIENT,GET_CLIENT_FAILED
} from './types'


export const getClientById=(clientId)=>{
    return function(dispatch){
        axios({
            method: 'post',
            url: 'http://139.59.163.209:8080/public/clients/getInfo',
            data:{"clientId":clientId},
            config:{header:{"Content-Type": "application/json"}}
          
        })
        .then(function(response){
            dispatch({type:GET_CLIENT, payload:response.data.RETURN_DATA});
            // console.log(response.data.RETURN_DATA)
          })
          .catch(function(err){
            dispatch({type:GET_CLIENT_FAILED, payload:err})
          })
      }
}