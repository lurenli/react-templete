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

  getChildContext() {
    return { store }
  }
  Todeatil() {
    this.props.history.push({
      pathname: '/detail',
    });
  }
  render() {
    return (
      <div>
        <a href='/detail'>去detail</a>
        <button onClick={this.Todeatil.bind(this)}>通过函数跳转</button>
        <Header a="表头" />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default Index;
