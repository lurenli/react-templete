import React, { Component } from 'react';
import store from '../store/index'

const login_wrap = {
    width: '100%',
    textAlign: 'center',
    background: '#eee',
    color: 'red',
    fontSize: '18px',
    height: '300px',
    lineHeight: '300px'
}
class login extends Component {
    constructor(props) {
        super(props);
    }
    onLogin = () => {
        let token = '1344444445456454'
        store.dispatch({
            type: 'loginToken',
            token,
        })
        const state = store.getState()
        if (state.loginToken.token) {
            this.props.history.push('/')
        } else {
            alert('请登录后再试')
        }
    }
    render() {
        return (
            <div onClick={this.onLogin} style={login_wrap}>登录</div>
        )
    }
}
export default login