import api from './api'

export const authenticate = async (email, password) => {
  api.post('/auth/login', { email, password })
}
