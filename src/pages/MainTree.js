import React, { Component } from 'react';
import PropTypes from 'prop-types'
import store from '../store/index'
class MainTree extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount() {
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor() {
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  // dispatch action 去改变颜色
  handleSwitchColor(color) {
    // console.log(store)
    // const { store } = this.context
    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }

  render() {
    return (
      <div>
        <button style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'red')}>红色</button>
        <button style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'blue')}>蓝色</button>
      </div>
    )
  }
}
export default MainTree;