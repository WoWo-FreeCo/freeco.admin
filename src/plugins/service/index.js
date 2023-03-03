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
    console.error('error:', error) // for debug
    localStorage.removeItem('at')
    Promise.reject(error)
  },
)


export default axiosIns
