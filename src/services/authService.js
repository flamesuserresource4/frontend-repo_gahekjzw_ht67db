import axios from 'axios'

export const authService = {
  login: (email, password) => axios.post('/api/auth/login', { email, password }),
  signup: (name, email, password) => axios.post('/api/auth/signup', { name, email, password }),
  forgot: (email) => axios.post('/api/auth/forgot', { email }),
}
