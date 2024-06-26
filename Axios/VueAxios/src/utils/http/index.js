import axios from 'axios'
import { message } from 'ant-design-vue'

//创建Axios实例
const httpUtil = axios.create({
    baseURL: 'http://43.139.239.29',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});



// 添加请求拦截器
httpUtil.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log('请求错误', error)
    message.error("请求错误" + error.message)
    return Promise.reject(error);
});

// 添加响应拦截器
httpUtil.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // return response.data;//返回响应数据
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log('响应错误', error)
    message.error("服务器响应错误" + error.message)
    return Promise.reject(error);
});


export default httpUtil