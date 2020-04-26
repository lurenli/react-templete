// import React from 'react';
// import { Router, Route,Redirect,Switch } from 'react-router';
// import { Switch } from 'react-router-dom';
import asyncComponent from '../components/AsyncComponent';
// import createHistory from 'history/createBrowserHistory';
// const createBrowserHistory =  require("history").createBrowserHistory

const Index = asyncComponent(() => import("../pages/index"));
const Detail = asyncComponent(() => import("../pages/detail"));
const Login = asyncComponent(() => import("../pages/login"));
const Notfound = asyncComponent(() => import("../pages/notfound"));
// const history = createBrowserHistory();
// react-router4中不支持直接从react-router中引用hashHistory等history对象。

const Routers = [
    { path: "/", name: "index", component: Index ,auth:false},
    { path: "/login", name: "login", component: Login,auth:true},
    { path: "/404", name: "notfound", component: Notfound,auth:true},
    { path: "/detail/:id", name: "detail", component: Detail,auth:false },
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

// React-router 底层实现原理是什么？
// 顶层Router订阅history，history变化时，Router调用setState将location向下传递，并设置到RouterContext。
// Route组件匹配context中的location决定是否显示。
// switch选择最先匹配到的显示，利用props children。
// Link组件阻止a标签默认事件，并调用history.push。
// NavLink通过匹配context中的location决定是否为active状态。
// Redirect组件匹配context里的location决定是否调用history.push(to)，
// Switch组件会匹配location和from决定是否发起Redirect


// 监听url变化或者重写push.history，在重写的函数里增加回调。
// 这样你就能在url变化的时候获取url，解析url，匹配路径所对应的组件，展示他