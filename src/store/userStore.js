import axios from '@/plugins/service/index'
import { GET_ADMIN_USERS } from '@/plugins/service/requestURL'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  actions: {
    fetchUsers(params) {
      return axios.get(`/${GET_ADMIN_USERS}?take=200`, { params })
    },
  },
})
