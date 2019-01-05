//LOGIN ACTION TYPES

export const LOGIN_USER_SUCCESS = 'login_user_success'
export const LOGIN_USER_FAIL='login_user_fail'
export const LOGIN_USER = 'login_user'
export default SAVE_USER='save_user'

//Signup action types
export const SIGNUP_USER_SUCCESS = 'signup_user_success'
export const SIGNUP_USER_FAIL='signup_user_fail'
export const VALUE_CHANGE='value_change'

//client related types

export const GET_CLIENT= 'get_client'
export const GET_CLIENT_FAILED='get_client_failed'

//Shops action types

export const FETCH_ALL_SHOPS='fetch_all_shops'
export const FETCH_SHOPS_FAILED='fetch_shops_failed'
export const FETCH_SINGLE_SHOP='fetch_single_shop'
export const FETCH_SHOP_FAILED='fetch_shop_failed'

//Get shops services types

export const FETCH_SHOP_SERVICES = 'fetch_shop_services'
export const FETCH_SHOP_SERVICES_FAILED ='fetch_shop_services_failed'
export const FETCH_SERVICE = 'fetch_service'
export const FETCH_SERVICE_FAILED ='fetch_service_failed'

//get products of shop

export const FETCH_SHOP_PRODUCTS ='fetch_shop_products'
export const FETCH_SHOP_PRODUCTS_FAILED = 'fetch_shop_products_failed'
export const FETCH_PRODUCT ='fetch_product'
export const FETCH_PRODUCT_FAILED = 'fetch_product_failed'
export const REFRESH_SHOP='refresh_shop'
//get pending order
export const FETCH_PENDING_ORDERS='fetch_pending_orders'
export const FETCH_PENDING_ORDERS_FAILED = 'fetch_pending_orders_failed'

//get completed order
export const FETCH_COMPLETED_ORDERS='fetch_completed_orders'
export const FETCH_COMPLETED_ORDERS_FAILED = 'fetch_completed_orders_failed'

export const MAKE_ORDER='make_order'
export const MAKE_ORDER_FAILED='make_order_failed'

//delete order 
export const DELETE_PENDING_ORDER= 'delete_pending_order'
export const DELETE_PENDING_ORDER_FAILED='delete_pending_order_failed'


//appointment Types
export const FETCH_PENDING_APPOINTMENTS='fetch_pending_appointments'
export const FETCH_PENDING_APPOINTMENTS_FAILED = 'fetch_pending_appointments_failed'

export const CREATE_APPOINTMENT='create_appointment'
export const CREATE_APPOINTMENT_FAILED='create_appointment_failed'

//get completed order
export const FETCH_COMPLETED_APPOINTMENTS='fetch_completed_appointments'
export const FETCH_COMPLETED_APPOINTMENTS_FAILED = 'fetch_completed_appointments_failed'

//delete order 
export const DELETE_PENDING_APPOINTMENT= 'delete_pending_appointment'
export const DELETE_PENDING_APPOINTMENT_FAILED='delete_pending_appointment_failed'


//fetch for searches
export const GET_SERVICES_LOCATION_AND_CATEGORY = 'get_services_location_and_category'
export const GET_SERVICES_LOCATION_AND_CATEGORY_FAILED = 'get_services_location_and category_failed'
export const SEARCH_UPDATE = 'search_update'
export const SEARCH__TEXT_CHANGED='search_text_changed'
export const SEARCH_BRANCH_BY_LOCATIONNAME= 'search_branch_by_locationname'
export const SEARCH_BRANCH_BY_SHOPNAME='search_branch-by_shopname'
export const SEARCH_FAILED ='search_failed'
export const GET_ALL_SERVICES = 'get_all_services'
export const GET_ALL_SERVICES_FAILED = 'get_all_services_failed'
export const GET_ALL_PROVINCES='get_all_provinces'
export const GET_ALL_PROVINCES_FAILED = 'get_all_provinces_failed'
export const GET_ALL_DISTRICTS= 'get_all_districts'
export const GET_ALL_DISTRICTS_FAILED = 'get_all_districts_failed'
export const GET_ALL_SECTORS =_SECTORS='get_all_sectors'
export const GET_ALL_SECTORS_FAILED = 'get_all_sectors_failed'
export const SERVICE_CHANGED='service-changed'
export const PROVINCE_CHANGED='province_changed'
export const DISTRICT_CHANGED='district_changed'
export const SECTOR_CHANGED='sector_changed'


//CART types
export const ADD = 'add'
export const REMOVE= 'remove'
export const CHANGE_DATE='change_date'
export const UPDATE='update'
export const SET_TIME='set_time'
export const REFRESH_CART='refresh_cart'