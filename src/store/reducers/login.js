//  redux  react-redux  reducers写法模板例子一样
const loginToken = (state, action) => {
    if (!state) return {
      token: ''
    }
    switch (action.type) {
      case "loginToken":
        localStorage.setItem('token',JSON.stringify(action.token))
        return { ...state, token: action.token }
      default:
        return state
    }
}
export default loginToken