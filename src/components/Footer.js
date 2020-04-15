import React,{Component} from 'react';

class Footer extends Component {
  render () {
    return (
      <div>
        <div>底部</div>
      </div>
    )
  }
}
export default Footer;


// 于是 React.js 就提供了一种机制，让你可以给组件的配置参数加上类型验证，就用上述的评论组件例子，你可以配置 Comment 只能接受对象类型的 comment 参数，你传个数字进来组件就强制报错。我们这里先安装一个 React 提供的第三方库 prop-types：

// npm install --save prop-types
// 它可以帮助我们验证 props 的参数类型，例如：

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// class Comment extends Component {
//   static propTypes = {
//     comment: PropTypes.object
//   }

// PropTypes.array
// PropTypes.bool
// PropTypes.func
// PropTypes.number
// PropTypes.object
// PropTypes.string
// PropTypes.node
// PropTypes.element
//   render () {
//     const { comment } = this.props
//     return (
//       <div className='comment'>
//         <div className='comment-user'>
//           <span>{comment.username} </span>：
//         </div>
//         <p>{comment.content}</p>
//       </div>
//     )
//   }
// }
// 注意我们在文件头部引入了 PropTypes，并且给 Comment 组件类添加了类属性 propTypes，里面的内容的意思就是你传入的 comment 类型必须为 object（对象）。