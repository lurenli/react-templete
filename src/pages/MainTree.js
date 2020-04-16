import React, { Component } from 'react';
import PropTypes from 'prop-types'
import store from '../store/index'
import { addToCart } from '../store/actions/cart-action';

class MainTree extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount() {
    this.defaultcolor()

    //  随时监听 store  的 state
    store.subscribe(() => {
      this.defaultcolor()
    })
  }
  defaultcolor() {
    const state = store.getState()
    console.log(state)
    this.setState({ themeColor: state.cartReducer.color })
  }
  // dispatch action 去改变颜色
  handleSwitchColor(color) {
    console.log(store)
    //dispath  分发 action
    store.dispatch(addToCart(color));
    // console.log(store)
    // store.dispatch({
    //   type: 'CHANGE_COLOR',
    //   themeColor: color
    // })
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