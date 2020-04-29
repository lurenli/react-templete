import React, { Component } from 'react';
import PropTypes from 'prop-types'
import store from '../store/index'
import MainTree from '@/pages/MainTree.js'
import './main.scss'
import ReactReduxTemplete from './react-redux-templete'

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

var timer
const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
// component 和 function

// // ES5
// var MyComponent = React.createClass({
//   render: function() {
//       return
//           <h3>Hello Edureka!</h3>;
//   }
// });

// // ES6
// class MyComponent extends React.Component {
//   render() {
//       return
//           <h3>Hello Edureka!</h3>;
//   }

// }

// es6 component 
class Main extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.onClickFirst = this.onClickFirst.bind(this) //第一种点击
    this.state = {
      themeColor: '', time: '',
      headerArr: [
        '点击我单独有样式变化1',
        '点击我单独有样式变化2',
        '点击我单独有样式变化3',
      ],
      activeIndex: 0
    }
  }

  componentWillMount() {
    this.defaultcolor()
    // 监听 store 里面的值的变化
    store.subscribe(() => {
      this.defaultcolor()
    })
  }
  componentDidMount() {
    timer = setInterval(() => {
      this.setState({
        time: this.TimeFunction()
      })
    }, 1000)
    let Time = this.$moment('2020/02/15').format('YYYY-MM-DD HH:mm:ss')
    console.log(Time)
  }

  componentDidUpdate(prevProps,prevState, snapshot) {
    // 典型用法（不要忘记比较 props）：
    // if (this.props.userID !== prevProps.userID) {
    // }
  }

  componentWillUnMount = () => {
    clearInterval(timer)
  }
  TimeFunction() {
    let now = new Date()
    let Year = now.getFullYear()
    let Month = now.getMonth()
    let day = now.getDate()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let nowTime = Year + '/' + this.Filter(Month) + '/' + this.Filter(day) + ' ' + this.Filter(hour) + ':' + this.Filter(minute) + ':' + this.Filter(second)
    return nowTime
  }
  Filter(value) {
    return value < 10 ? '0' + value : value
  }
  defaultcolor() {
    const state = store.getState()
    this.setState({ themeColor: state.cartReducer.color })
  }
  onClickFirst() { //  第一种点击写法 
    console.log('第一种我被点了')
  }
  onClickList(value,event) {  //  第二种点击写法 第四种点击写法 
    console.log(value)
    console.log(event)

    // event.target.style.background = 'red'
    console.log('第二种我被点了 或者 第四种我被点了')
  }
  onClick = () => { // 第三种点击箭头函数
    console.log('第三种我被点了')
  }
  onChildSend = () => {
    this.props.onSend('谢谢你的父极祝福！')
  }
  activeClicK(index,event) {
    console.log(event)
    this.setState({
      activeIndex:index
    })
  }
  render() {
    let { headerArr } = this.state
    return (
      <div className="main">
        <h1>{this.state.time}</h1>
        {
          headerArr.map((item, index) => {
            return <div key={index}  onClick={this.activeClicK.bind(this, index)} className={`${this.state.activeIndex === index ? 'activeIndex' : ''}`}>
              <span className="changeItem">{item}</span>
            </div>
          })
        }

        <div onClick={this.onClickFirst} style={{ marginTop: 20 }}>第一种点我点我点我</div> {/*  第一种  里面的写法 */}
        <div onClick={this.onClickList.bind(this,1)} style={{ marginTop: 20 }}>第二种点我点我点我</div> {/*  第二种  里面的写法  //  可传参数*/}
        <div onClick={this.onClick} style={{ marginTop: 20, marginBottom: 20 }}>第三种点我点我点我</div> {/*  第三种  里面的写法 */}

        <div onClick={(event) => this.onClickList("params",event)} style={{ marginTop: 20, marginBottom: 20 }}>第四种点我点我点我</div> {/*  第四种  里面的写法 */}
        <div style={{ color: this.state.themeColor }}>中间内容{users.map((item, index) => {
          return (
            <div key={index}>
              <div>姓名：{item.username}</div>
              <div>年龄：{item.age}</div>
              <div>性别：{item.gender}</div>
              <hr />
            </div>
          )
        })}
        </div>
        <MainTree />
        <ReactReduxTemplete />
        <h2 onClick={this.onChildSend} style={{ marginTop: 25 }}>{this.props.fathValue}</h2>
      </div>
    )
  }
}
export default Main;
