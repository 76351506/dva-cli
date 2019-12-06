/*
 * @Author: heinan 
 * @Date: 2019-12-06 13:59:43 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-06 13:59:43 
 */
import { getcarouselList } from '@/api/home';

export default {
    //命名空间
    namespace: 'home',
    //仓库初始化状态
    state: {
        hometitle: "homepage",
        productList: []
    },
    reducers: {
        update(state, { type, payload }) {
            return {
                ...state,
                hometitle: payload
            }
        },
        updateProdutList(state, { type, payload }) {
            return {
                ...state,
                productList: payload
            }
        }
    },
    effects: {
        *getProductList(action, { call, put }) {
            const result = yield call(getcarouselList)
            yield put({ type: 'updateProdutList', payload: result.data.currentUser })
        }
    }
}