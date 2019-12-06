/*
 * @Author: heinan 
 * @Date: 2019-12-06 13:41:06 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-06 13:41:06 
 */
import request from '@/utils/request';

export function getcarouselList() {
    const url = 'http://39.105.98.45/api/v1/banners/bannerList';
    return fetch(url).then(res => {
        return res.json();
    })
}