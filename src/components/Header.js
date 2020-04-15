import React, { Component } from 'react';
import PropTypes from 'prop-types'
import store from '../store/index'
class Header extends Component {
  constructor() {
    super()
    this.state = { headerShow: false, themeColor: '' }
  }

  handleClickOnTitle(value, e) {
    console.log('头部')
    this.setState({
      headerShow: !this.state.headerShow
    })

    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
  }

  static contextTypes = {
    store: PropTypes.object
  }

  componentWillMount() {
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor() {
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  render() {
    return (
      <div>
        <div style={{ color: this.state.themeColor }} onClick={this.handleClickOnTitle.bind(this, '头部')}>头部 {this.state.headerShow ? '很好' : '不好'}</div>
      </div>
    )
  }
}
export default Header;
