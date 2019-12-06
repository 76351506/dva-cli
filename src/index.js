/*
 * @Author: heinan 
 * @Date: 2019-12-06 13:42:23 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-06 13:42:23 
 */
import dva from 'dva'
import router from '@/router'
import history from '@/utils/history'
import { createModel } from '@/store'

const app = dva({
    history: history,
});
createModel(app)
app.router(router)
app.start('#root')

