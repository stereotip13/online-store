import axios from 'axios'
//создаем два инстанса
const $host = axios.create({ baseURL: process.env.REACT_APP_API_URL })
const $authHost = axios.create({ baseURL: process.env.REACT_APP_API_URL })

//Интерцептор - функция, которая параметром принимает конфигeh
const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}
$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
