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
      try {
        const res = await fetch(`${baseURL}/api/v1/admin/user/refresh`, {
          method: 'post',
          headers: new Headers({
            authorization: `Bearer ${localStorage.getItem('at')}`,
          }),
        })

        const { accessToken } = await res.json()

        localStorage.setItem('at', accessToken)

        if (!error.config || !accessToken) {
          reloadPage()
        }

        if (error.config?.headers) {
          error.config.headers.Authorization = `Bearer ${accessToken}`
        }
        
        return axios(error.config)
      } catch (error) {
        // 
      }
      reloadPage()
    }

    return Promise.reject(error)
  },
)

function reloadPage() {
  localStorage.removeItem('at')
  setTimeout(() => {
    location.reload()
  }, 500)
}
export default axiosIns
