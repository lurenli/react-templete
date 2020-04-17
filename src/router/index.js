// import React from 'react';
// import { Router, Route,Redirect,Switch } from 'react-router';
// import { Switch } from 'react-router-dom';
import asyncComponent from '../components/AsyncComponent';
// import createHistory from 'history/createBrowserHistory';
// const createBrowserHistory =  require("history").createBrowserHistory

const Index = asyncComponent(() => import("../pages/index"));
const Detail = asyncComponent(() => import("../pages/detail"));
const Login = asyncComponent(() => import("../pages/login"));
// const history = createBrowserHistory();
// react-router4中不支持直接从react-router中引用hashHistory等history对象。

const Routers = [
    { path: "/", name: "index", component: Index },
    { path: "/login", name: "login", component: Login},
    { path: "/detail/:id", name: "detail", component: Detail, auth:true },
]
export default Routers



// 没有用到全局路由拦截的时候
// const RouteConfig = (
//     <Router path="/" history = {history}>
//         {/* <div>
//             <Route path="/"  exact component={Index} />
//             <Route path="/detail/:id" component={Detail} />
//         </div> */}
//     </Router>
// );

// export default RouteConfig; 