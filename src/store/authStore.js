import { defineStore } from 'pinia'

const initialState = {
  status: {
    loggedIn: false,
  },
  user: {
  },
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => initialState,
  getters: {
    userName: state => state.user?.username,
  },
  actions: {
    updateUser(data) {
      this.user = data
    },
    loginSuccess(_token = '') {
      this.status.loggedIn = true
      localStorage.setItem('at', _token)
    },
    logout() {
      this.status.loggedIn = false
      this.user = {}
      localStorage.removeItem('at')
    },
  },
})
