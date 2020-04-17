import React, { Component } from 'react';
import store from '../store/index'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
       headerShow: false, 
       themeColor: '' ,
       header:props.header
    }
    
  }

  handleClickOnTitle(value, e) {
    console.log('头部')
    this.setState({
      headerShow: !this.state.headerShow
    })
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return
    }
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
        <div style={{ color: this.state.themeColor }} onClick={this.handleClickOnTitle.bind(this, '头部')}>头部 {this.state.headerShow ? '很好' : '不好'} {this.state.header}</div>
      </div>
    )
  }
}
export default Header;
