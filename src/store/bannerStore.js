import axios from '@/plugins/service/index'
import { GET_HOME_BANNER } from '@/plugins/service/requestURL'
import { defineStore } from 'pinia'

export const useBannerStore = defineStore('BannerStore', {
  actions: {
    fetchBanners(params) {
      return axios.get(`/${GET_HOME_BANNER}`, { params })
    },
  },
})
