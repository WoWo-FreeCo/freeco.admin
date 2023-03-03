import axios from '@/plugins/service/index'
import { GET_ALL_PRODUCT, GET_PRODUCT, GET_PRODUCT_CATEGORY } from '@/plugins/service/requestURL'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('ProductStore', {
  actions: {
    fetchProducts(params) {
      return axios.get(`/${GET_ALL_PRODUCT}?take=200`, { params })
    },
    fetchProductsByCategory(id) {
      return axios.get(`/${GET_PRODUCT(id)}`)
    },
    fetchProductCategory() {
      return axios.get(`/${GET_PRODUCT_CATEGORY}`)
    },
  },
})
