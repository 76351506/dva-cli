/*
 * @Author: heinan 
 * @Date: 2019-12-06 13:38:44 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-06 13:38:44 
 */
import React, { Component } from 'react'

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/iconfont.css";
import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/style.css";

class Layout extends Component {
    render() {
        return (
            <div className="wraper">
                <header className="header">12313</header>
                <section>{this.props.children}</section>
            </div>
        )
    }
}
export default Layout;