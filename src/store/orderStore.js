import axios from '@/plugins/service/index'
import { GET_ADMIN_ORDERS, GET_ADMIN_ORDERS_DETAIL } from '@/plugins/service/requestURL'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('OrderStore', {
  actions: {
    fetchOrders(params) {
      return axios.get(`/${GET_ADMIN_ORDERS}`, { params })
    },
    fetchOrderByIds(_id) {
      return axios.get(`/${GET_ADMIN_ORDERS_DETAIL(_id)}`)
    },
  },
})
