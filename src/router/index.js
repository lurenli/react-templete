import React from 'react';
import { Router, Route } from 'react-router';
// import { Switch } from 'react-router-dom';
import asyncComponent from '../components/AsyncComponent';
// import createHistory from 'history/createBrowserHistory';
const createBrowserHistory =  require("history").createBrowserHistory

const Index = asyncComponent(() => import("../pages/index"));
const Detail = asyncComponent(() => import("../pages/detail"));
const history = createBrowserHistory();
// react-router4中不支持直接从react-router中引用hashHistory等history对象。

const RouteConfig = (
    <Router path="/" history = {history}>
        <div>
            <Route path="/"  exact component={Index} />
            <Route path="/detail" component={Detail} />
        </div>
    </Router>
);

export default RouteConfig;