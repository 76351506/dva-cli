import React from 'react';
import RouterMap from '@/router/map';
import Routes from '@/router/routes';

function RouterView(props) {
    const routes = props.routes ? props.routes : Routes;
    return <RouterMap routes={routes} {...props}></RouterMap>
}

export default RouterView;