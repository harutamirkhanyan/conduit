import axios  from "axios";
import {getItem} from  '@/helpers/persistanceStorage'

axios.defaults.baseURL='https://api.realworld.io/api'

axios.interceptors.request.use(config=>{
const token =getItem('accesToken')
console.log(token);
const authorizationToken=token ? `Token ${token}` :''
console.log('config', authorizationToken)
config.headers.Authorization=authorizationToken
return config
})

export default axios