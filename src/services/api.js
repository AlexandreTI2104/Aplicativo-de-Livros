import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const fetcher = (url) => api.get(url).then((res) => res.data)

async function authenticationInterceptor(config) {
  const newConfig = config
  const token = await AsyncStorage.getItem('token')
  if (token) {
    newConfig.headers.Authorization = token
  }
  return newConfig
}

api.interceptors.request.use(authenticationInterceptor, null, {
  synchronous: true,
})

export default api
