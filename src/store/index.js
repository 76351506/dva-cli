/*
 * @Author: heinan 
 * @Date: 2019-12-05 09:17:34 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-05 09:17:34 
 */

const context = require.context('./model', false, /\.js$/);
//通过context.keys()获取model目录下面的文件名
//遍历文件名，获取文件内容，返回个数组
const getModel = context.keys().map(key => context(key));

export const createModel = function (app) {
    //遍历获取到的model数组集合,分别将每一个model绑定到 app.model()
    return getModel.map(model => app.model(model.default))
}