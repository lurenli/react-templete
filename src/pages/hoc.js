

// import React, { Component } from 'react';
// import simpleHoc from './simple-hoc';

// class Usual extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 Usual
//                 <div name="name">{this.props.name}</div>
//             </div>
//         )
//     }
// }

// // console.log(simpleHoc)
// export default simpleHoc(Usual, 'aa');


// import simpleHoc from './simple-hoc'; // 装饰器语法书写
// @simpleHoc
// class Usual extends Component{
//   ...          
// }
// export default Usual



import React from 'react'
// import HOCList from '../components/HOCList';
import CommentList from '../components/CommentList';
import BlogPost from '../components/BlogPost';
import withSubscription from '../components/WithSubscription/index'

const CommentListWithSubscription = withSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
);
export default class Usual extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        const style = {
            width:'100%',
            'textAlign': 'center',
            title:{
                color:'red'
            }
        }
        return (
            <div style={style}>
                <h1 style={style.title}>hello hoc</h1>

                {/* 通过高阶组件的相同的值传过来 显示不同的效果  每项组件都可以利用高阶组件的东西*/}
                <CommentListWithSubscription />
                <BlogPostWithSubscription />
            </div>
        );
    }
}