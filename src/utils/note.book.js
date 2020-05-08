
vue  react  区别点
1.vue 数据劫持监听数据 react diff算法
2.vue 双向数据流 react 单向数据流
3.渲染形式不同 Vue是通过一种拓展的HTML语法进行渲染  React是通过JSX渲染模板 
4.一些写法也不一样 形式不一样 内部原理思想周期性不一样

纯函数

一个函数的返回结果只依赖其参数，并且执行过程中没有副作用。

虚拟DOM

虚拟 DOM 最大的优势是 diff 算法 但不是全部
虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种GUI。
一个普通的 JavaScript 对象，包含了 tag、props、children 三个属性。


// 生命周期 顺序
// constructor() //坑死洽死特
// componentWillMount()
// render()
// componentDidMount()
// componentWillReceiveProps() //属性props  改变
// shouldComponentUpdate()
// componentWillUpdate()
// componentDidUpdate()
// componentWillUnmount()


// jsx优点:

// 执行更快，因为它在编译为 JavaScript 代码后进行了优化
// 它是类型安全的，在编译过程中就能发现错误
// 编写模板更加简单快速
// 更加直观，可读性高


// 高阶组件其实是一个函数，接收一个组件作为参数，
// const EnhancedComponent = higherOrderComponent(WrappedComponent);
// 返回一个包装组件作为返回值
