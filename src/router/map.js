/*
 * @Author: heinan 
 * @Date: 2019-12-06 13:37:54 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-06 13:37:54 
 */
import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

class RouterMap extends Component {
    render() {
        const { routes, history } = this.props;
        const defaultRoute = <Redirect from="/" to="/home" key={'default'} exact ></Redirect>;
        return <Router history={history}>
            <Switch>
                {
                    routes.map((item, index) => {
                        const children = item.children === undefined ? [] : item.children;
                        const Comp = item.component;
                        return <Route key={item.name} path={item.path} component={() => {
                            return <Comp routes={children} history={history}></Comp>
                        }} />
                    }).concat([defaultRoute])
                }

            </Switch>
        </Router>
    }
}
export default RouterMap;