/*
 * @Author: heinan 
 * @Date: 2019-12-06 13:42:11 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-06 13:42:11 
 */
import crossJsonp from 'jsonp'

const defaultOption = {
    //配置callback的key
    param: "jsonpCallback",
    //生成callback的名字
    prefix: "callback"
}
const formate = function (params) {
    let str = "";
    for (let key in params) {
        str += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`
    }
    return str;
}
const jsonp = function (url, params) {
    url = url.includes('?') ? url + formate(params) : url + '?' + formate(params);
    console.log(url)
    return new Promise((resovel, reject) => {
        crossJsonp(url, defaultOption, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resovel(data)
            }
        })
    })
}
export default jsonp;