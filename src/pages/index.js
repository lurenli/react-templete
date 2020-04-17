import React, { Component } from 'react';
import PropTypes from 'prop-types'
import store from '../store/index'
import './index.css';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from './main.js'
// new Date().toLocaleTimeString()
// props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。
class Index extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
        header:'头部传值',
        fathValue:'父组件传值',
        msg:'',
    };

}
  getChildContext() {
    return { store }
  }
  Todeatil() {
    this.props.history.push({
      pathname: '/detail',
    });
  }
  textInpuf = ()=>{
    console.log(this.refs.button)
  }
  onSend = (msg)=>{
    console.log(msg)
    this.setState({
      msg:msg
    })
  }
  render() {
    return (
      <div>
        <a href='/detail'>去detail</a>
        <button onClick={this.Todeatil.bind(this)} ref="button">通过函数跳转</button>
        <Header a="表头" header={this.state.header} />
        <input onInput={this.textInpuf} />
        <Main fathValue={this.state.fathValue} onSend={this.onSend}/>
         { this.state.msg ?'子组件传过来的' + this.state.msg :''}
          123
        <Footer />
      </div>
    )
  }
}
export default Index;
