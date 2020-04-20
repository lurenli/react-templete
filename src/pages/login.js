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
        this.state = {
            addColor: true,
        }
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
            <div onClick={this.onLogin} style={login_wrap}>
                <p className={`title ${this.state.addColor ? 'color' : null}`}>标题 登录</p>
            </div>
        )
    }
}
export default login