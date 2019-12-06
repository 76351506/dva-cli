import React, { Component } from 'react';
import { connect } from 'dva';
import Layout from '@/components/layout';

@connect((store) => {
    return store.home
})
class Home extends Component {
    render() {
        return <Layout>
            this is home page
        </Layout>
    }
}
export default Home;