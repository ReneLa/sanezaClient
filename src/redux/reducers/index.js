import {combineReducers} from 'redux'
import authReducers from './authReducers'
import shopReducers from './shopReducers'
import ordersReducers from './ordersReducer'
import searchReducer from './searchReducer' 
import appointsReducer from './appointsReducer'
import userReducers from './userReducers';
import cartReducers from './cartReducers'

export default combineReducers({
    auth:authReducers,
    shop:shopReducers,
    orders:ordersReducers,
    search:searchReducer,
    appoints:appointsReducer,
    user:userReducers,
    cart:cartReducers
})