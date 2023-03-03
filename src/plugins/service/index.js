import axios from 'axios'

const baseURL =
  import.meta.env.VITE_API_BASE

const axiosIns = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosIns.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('at')
    if (config?.headers) {
      config.headers['Access-Control-Allow-Origin'] = '*'
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  },
)


axiosIns.interceptors.response.use(
  response => response,
  async error => {
    const at = localStorage.getItem('at')
    if (error.response && error.response.status === 401 && at) {
      // TODO: refreshToken
      localStorage.removeItem('at')
      setTimeout(() => {
        location.reload()
      }, 500)
    }

    return Promise.reject(error)
  },
)

export default axiosIns
