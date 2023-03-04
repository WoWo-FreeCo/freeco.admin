import axios from '@/plugins/service/index'
import { GET_ADMIN_ORDERS } from '@/plugins/service/requestURL'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('OrderStore', {
  actions: {
    fetchOrders(params) {
      return axios.get(`/${GET_ADMIN_ORDERS}?take=200`, { params })
    },
  },
})
