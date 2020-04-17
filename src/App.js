import React, { Component } from 'react';
// import { Router, Route, Redirect, Switch } from 'react-router';
import {
    Router,
    // BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';
import { Provider } from 'react-redux';
import store from './store/index';
import { connect } from 'react-redux'
// 引入react-redux配置
// 引入react-router配置
import Routers from './router/index';
// 引入react-store配置

const NouFound = asyncComponent(() => import("./pages/notfound"));
const createBrowserHistory = require("history").createBrowserHistory
const history = createBrowserHistory();
// 引入公共样式
// import '@/css/common.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let token = this.props.token
        return (
            <div>
                <Provider store={store}>
                    <Router  history={history}>
                        {/* <Router path="/" history={history}> */}
                        <Switch>
                            {Routers.map((item, index) => {
                                return <Route key={index} path={item.path} exact render={props =>
                                    (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                                        pathname: '/login',
                                        state: { from: props.location }
                                    }} />)
                                    )} />
                            })}
                            {/*  所有错误路由跳转页面 */}
                            <Route component={NouFound} />
                        </Switch>
                    </Router>
                    {/* {router} */} {/* 没有用到全局路由拦截的时候*/}
                </Provider>
            </div >
        );
    }
}

// redux拿到token并挂载到App的props上面
const mapStateToProps = (state, ownProps) => {
    let token  = JSON.parse(localStorage.getItem('token'))
    return {token}
    // return { token: state.loginToken.token }
}

export default connect(mapStateToProps)(App)
