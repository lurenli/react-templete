import React, { Component } from 'react';
import './index.css';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from './main.js'
// new Date().toLocaleTimeString()
// props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '头部传值',
      fathValue: '父组件传值',
      msg: '',
    };

  }
  componentDidMount() {
    // this.refDom.focus();
    // ref添加到Compoennt上获取的是Compoennt实例，添加到原生HTML上获取的是DOM；
    // ReactDOM.findDOMNode，当参数是DOM，返回值就是该DOM；当参数是Component获取的是该Component render方法中的DOM
    // 二者主要区别在ref绑定在组件上的时候，this.refs获取到的是组件实例，ReactDOM.findDOMNode获取到的是dom节点
  }
  Todeatil(idvalue) {
    this.props.history.push({
      pathname: `/detail/${idvalue}`,
    });
  }
  textInpuf = () => {
    console.log(this.refs.button)
  }
  onSend = (msg) => {
    console.log(msg)
    this.setState({
      msg: msg
    })
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return
    }
  }
  render() {
    return (
      <div>
        <a href='/detail/56'>去detail</a>
        <button onClick={this.Todeatil.bind(this, 12)} ref="button">通过函数跳转</button>
        <Header a="表头" header={this.state.header} />
        {/*我们可以通过一个变量来保存我们想要的组件或者dom元素组件的实例引用*/}
        {/* 新版本的React已经不推荐我们使用ref string转而使用ref callback */}
        <input onInput={this.textInpuf} ref={value => { this.refDom = value; }} />
        <Main fathValue={this.state.fathValue} onSend={this.onSend} />
        {this.state.msg ? '子组件传过来的' + this.state.msg : ''}
        <Footer />
      </div>
    )
  }
}
export default Index;
