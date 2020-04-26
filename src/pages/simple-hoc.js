import React, { Component } from 'react';

// 比如这个 高级组件
//高级组件

// 高阶组件其实是一个函数，接收一个组件作为参数，
// const EnhancedComponent = higherOrderComponent(WrappedComponent);
// 返回一个包装组件作为返回值

// HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用
// import {Component} from 'react'

// WrappedComponent(被包装的组件)。

const simpleHoc = (WrappedComponent, aa) => {
    console.log(WrappedComponent);
    //   console.log(this.props);
    console.log(aa);
    return class extends Component {
        render() {
            const newProps = {
                name:'我的'
            }
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}
export default simpleHoc;