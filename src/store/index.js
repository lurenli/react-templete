// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom'
// // import Header from './Header'
// // import Content from './Content'
// // import './index.css'

// function createStore (reducer) {
//   let state = null
//   const listeners = []
//   // 传入监听函数
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach((listener) =>{
//       listener()
//     })
//   }
//   dispatch({}) // 初始化 state
//   return { getState, dispatch, subscribe }
// }

// const themeReducer = (state, action) => {
//   if (!state) return {
//     themeColor: 'red'
//   }
//   switch (action.type) {
//     case 'CHANGE_COLOR':
//       return { ...state, themeColor: action.themeColor }
//     default:
//       return state
//   }
// }

// const store = createStore(themeReducer)
// import React, { Component } from 'react'
import { createStore } from 'redux' // 第三方的
// import { Provider } from 'react-redux'

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}
const store = createStore(themeReducer)

export default store








//原始 redux

// function createStore(reducer, initialState) {
//   // currentState就是那个数据
//   let currentState = initialState;
//   let listener = () => {};
  
//   function getState() {
//   return currentState;
//   }
//   function dispatch(action) {
//   currentState = reducer(currentState, action); // 更新数据
//   listener(); // 执行订阅函数
//   return action;
//   }
//   function subscribe(newListener) {
//   listener = newListener;
//   // 取消订阅函数
//   return function unsubscribe() {
//    listener = () => {};
//   };
//   }
//   return {
//   getState,
//   dispatch,
//   subscribe
//   };
//  }
  
//  const store = createStore(reducer);
//  store.getState(); // 获取数据
//  store.dispatch({type: 'ADD_TODO'}); // 更新数据
//  store.subscribe(() => {/* update UI */}); // 注册订阅函数