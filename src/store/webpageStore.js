import axios from '@/plugins/service/index'
import { GET_WEB_PAGES } from '@/plugins/service/requestURL'
import { defineStore } from 'pinia'

export const useWebpageStore = defineStore('WebpageStore', {
  actions: {
    fetchWebpages(params) {
      return axios.get(`/${GET_WEB_PAGES}`, { params })
    },
  },
})
