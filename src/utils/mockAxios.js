import axios from 'axios'

// Simple mock adapter using interceptors to return dummy data
const mock = axios.create()

mock.interceptors.request.use((config) => {
  return new Promise((resolve) => setTimeout(() => resolve(config), 300))
})

mock.interceptors.response.use(undefined, (error) => Promise.reject(error))

export default mock
