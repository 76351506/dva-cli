/*
 * @Author: heinan 
 * @Date: 2019-12-06 13:42:17 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-06 13:42:17 
 */
const defaultOpt = {
    callbackName: "jsonpCallback"
}
const formateParams = function (params) {
    let str = "";
    for (let key in params) {
        str += `${key}=${params[key]}&`
    }
    return str;
}
const jsonp = function (url, params, opt = defaultOpt) {
    return new Promise((resolve, reject) => {
        //带有src属性的标签不受同源策略的影响
        const script = document.createElement('script');
        const callback = `callback=${opt.callbackName}`;
        url = url.includes('?') ? url + formateParams(params) + callback : url + '?' + formateParams(params) + callback
        script.src = url;
        script.onerror = function (error) {
            reject(error)
        }
        window[opt.callbackName] = function (data) {
            resolve(data)
        }
        document.body.appendChild(script)
    })
}
export default jsonp;