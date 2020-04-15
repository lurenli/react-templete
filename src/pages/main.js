import React, { Component } from 'react';
import PropTypes from 'prop-types'
import store from '../store/index'
import MainTree from  './MainTree.js'

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class Main extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount () {
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor () {
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }
  render() {
    return (
      <div className="main">
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
        <MainTree/>
      </div>
    )
  }
}
export default Main;
