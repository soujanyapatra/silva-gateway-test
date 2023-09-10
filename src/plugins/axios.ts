import axios from 'axios'
import { useToast } from 'vue-toastification'

let $toast = useToast()

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: import.meta.env.VITE_APP_API_URL
  // timeout: 1000,
})

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use(config => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('authToken')
 
  // If token is found
  if (token) {

    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers['x-auth'] = token
  }
  // Return modified config
  return config
})

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(response => {
  return response
}, error => {
  if (
    error.response.status === 403
  ) {
    $toast.error('Token expired')
    let pInfo = localStorage.getItem("payment-info")
    let paymentInfo = JSON.parse(pInfo)
    // clear localStorage
    localStorage.clear()
    // move user to origin
    window.location = paymentInfo.redirectURL
  }
  return Promise.reject(error)

})

export default axiosIns