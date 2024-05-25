import axios from 'axios'


//创建Axios实例
const httpUtil = axios.create({
    baseURL: 'http://43.139.239.29',
    timeout: 1000 * 10,
    headers: { 'X-Custom-Header': 'foobar' }
});


export default httpUtil