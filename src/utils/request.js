/*
 * @Author: heinan 
 * @Date: 2019-12-06 13:42:20 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-06 13:42:20 
 */
import axios from 'axios';

const request = axios.create({})

request.interceptor.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error)
})

request.interceptor.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error)
})


export default request;