const prefix = 'api/v1'

export const GET_PROFILE = `${prefix}/user/profile`
export const GET_USER_ORDERS = `${prefix}/order`
export const GET_USER_ORDERS_DETAIL = _id => `${prefix}/order/${_id}/detail`
export const GET_USER_ORDERS_LOG_DETAIL = _id => `${prefix}/order/${_id}/logistics/detail`
export const GET_USER_DAILY_SEQUENCE = `${prefix}/user/activity/daily-check/record`
export const GET_ADMIN_PROFILE = `${prefix}/admin/user/profile`
export const GET_ADMIN_ORDERS = `${prefix}/admin/order/details`
export const GET_ADMIN_USERS = `${prefix}/admin/normal-user/profile`
export const GET_ADMIN_ORDERS_DETAIL = _id => `${prefix}/admin/order/${_id}/detail`
export const GET_ADMIN_ORDERS_LOG_DETAIL = _id => `${prefix}/admin/order/${_id}/logistics/detail`
export const GET_PRODUCT = _categoryId => `${prefix}/product?categoryId=${_categoryId}`
export const GET_ALL_PRODUCT = `${prefix}/product`
export const GET_WEB_PAGES = `${prefix}/web-page`
export const GET_PRODUCT_CATEGORY = `${prefix}/product-category`
export const GET_PRODUCT_DETAIL = _id => `${prefix}/product/${_id}/detail`
export const GET_DAILY_SEQUENCE = `${prefix}/check-content/sequence`
export const GET_HOME_BANNER = `${prefix}/home-banner`

export const USER_REGISTER = `${prefix}/user/register`
export const USER_LOGIN = `${prefix}/user/login`
export const ADMIN_LOGIN = `${prefix}/admin/user/login`

export const POST_HOME_BANNER = `${prefix}/admin/home-banner`
export const POST_PRODUCT = `${prefix}/admin/product`
export const POST_PRODUCT_IMAGE = `${prefix}/image`
export const POST_PRODUCT_INVENTORY = _id => `${prefix}/admin/product/${_id}/inventory/add`
export const POST_PRODUCT_CATEGORY = `${prefix}/admin/product-category`
export const POST_USER_ACTIVATATION = `${prefix}/user/activity/activate`
export const POST_USER_DAILY_CHECK = _id => `${prefix}/user/activity/daily-check/${_id}`
export const POST_PAYMENT_PRE = `${prefix}/payment/pre-settlement`
export const POST_PAYMENT = `${prefix}/payment`
export const POST_CANCEL_ORDER = _id => `${prefix}/order/${_id}/cancel`
export const POST_ADMIN_REFRESH_TOKEN = `${prefix}/admin/user/refresh`

export const UPDATE_HOME_BANNER = _id => `${prefix}/admin/home-banner/${_id}`
export const UPDATE_PRODUCT = _id => `${prefix}/admin/product/${_id}`
export const UPDATE_PRODUCT_CATEGORY = _id => `${prefix}/admin/product-category/${_id}`
export const UPDATE_WEB_PAGES = _id => `${prefix}/admin/web-page/${_id}`
export const UPDATE_USER_PROFILE = `${prefix}/user/basic`
export const UPDATE_PRODUCT_MARKDOWNINFO = _id => `${prefix}/admin/product/${_id}/markdownInfos`
export const UPDATE_PRODUCT_IMAGES = _id => `${prefix}/admin/product/${_id}/images`
export const UPDATE_ORDER_STATUS = _id => `${prefix}/admin/order/${_id}/order-status`
export const UPDATE_DAILY_CHECK = _id => `${prefix}/admin/check-content/sequence/${_id}`

export const DELETE_HOME_BANNER = _id => `${prefix}/admin/home-banner/${_id}`
export const DELETE_PRODUCT = _id => `${prefix}/admin/product/${_id}`
export const DELETE_PRODUCT_CATEGORY = _id => `${prefix}/admin/product-category/${_id}`
