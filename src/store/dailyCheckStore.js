import axios from '@/plugins/service/index'
import { GET_DAILY_SEQUENCE } from '@/plugins/service/requestURL'
import { defineStore } from 'pinia'

export const useDailyCheckStore = defineStore('DailyCheckStore', {
  actions: {
    fetchDailyChecks(params) {
      return axios.get(`/${GET_DAILY_SEQUENCE}`, { params })
    },
  },
})
