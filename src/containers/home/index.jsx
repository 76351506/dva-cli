import React, { Component } from 'react';
import { connect } from 'dva';
import Layout from '@/components/layout';

@connect((store) => {
    return store.home
})
class Home extends Component {
    update() {
        this.props.dispatch({ type: 'home/update', payload: 123132 })
    }
    componentDidMount() {
        this.props.dispatch({ type: 'home/getProductList', payload: 1 })
    }
    render() {
        const { productList } = this.props;
        return <Layout>
            this is Home page {this.props.hometitle}
            <button onClick={() => this.update()}>点我</button>
            <ul>
                {
                    productList.map(item => <li> <img src={item.image} alt="" /></li>)
                }
            </ul>
        </Layout>
    }
}
export default Home;