import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


 // react-redux 写法模板例子
class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }
  
    constructor () {
      super()
      this.state = { themeColor: '' }
    }
  
    // dispatch action 去改变颜色
    handleSwitchColor (color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }
    render () {
      return (
        <div>
          <button 
            style={{ color: this.props.themeColor }}
            onClick={this.handleSwitchColor.bind(this,'blue')}>react-redux-one</button>
          <button 
            style={{ color: this.props.themeColor }}
            onClick={this.handleSwitchColor.bind(this,'red')}>react-redux-two</button>
        </div>
      )
    }
}

// 
const mapStateToProps = (state) => {
    return {
      themeColor: state.reactReducer.themeColor
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)


export default ThemeSwitch