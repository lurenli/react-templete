import React, { Component } from 'react';
import PropTypes from 'prop-types'
import store from '../store/index'
import MainTree from './MainTree.js'
import ReactReduxTemplete from './react-redux-templete'

// 生命周期
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




const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
var timer
class Main extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.onClickFirst = this.onClickFirst.bind(this) //第一种点击
    this.state = { themeColor: '', time: '' }
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
  componentWillUnMount = () => {
    this.setState = (state, callback) => {
      return
    }
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
  onClickList() {  //  第二种点击写法 第四种点击写法 
    console.log('第二种我被点了 或者 第四种我被点了')
  }
  onClick = () => { // 第三种点击箭头函数
    console.log('第三种我被点了')
  }
  onChildSend = () => {
    this.props.onSend('谢谢你的父极祝福！')
  }
  render() {
    return (
      <div className="main">
        <h1>{this.state.time}</h1>
        <div onClick={this.onClickFirst} style={{ marginTop: 20 }}>第一种点我点我点我</div> {/*  第一种  里面的写法 */}
        <div onClick={this.onClickList.bind(this)} style={{ marginTop: 20 }}>第二种点我点我点我</div> {/*  第二种  里面的写法  //  可传参数*/}
        <div onClick={this.onClick} style={{ marginTop: 20, marginBottom: 20 }}>第三种点我点我点我</div> {/*  第三种  里面的写法 */}
        <div onClick={() => this.onClickList()} style={{ marginTop: 20, marginBottom: 20 }}>第四种点我点我点我</div> {/*  第四种  里面的写法 */}
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
