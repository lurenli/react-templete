import React from 'react';
import Listquest from '../request/Listquest'
import CONFIG from '../config/index'
import './detail.css';

// import detail  from '@/pages/detail.css'

// import styles from './Button.module.css'; // 使用 CSS Modules 的方式引入
//在 css 文件后面加 .module 后缀
// import './another-stylesheet.css'; // 普通引入


// key  唯一性 减少diff算法对比 最好用数据的id 具有唯一性
//导入本地图片
// import image from "../assets/images/t01c38ff1a84f652273.webp.jpg"
// <img src={require("../assets/images/t01c38ff1a84f652273.webp.jpg")} alt=""></img>


// React的自定义组件名为什么要首字母大写
// 如果传递的是一个字符串，那么在创建虚拟DOM对象时，React会认为这是一个简单的HTML标签，但是这显然不是一个简单的HTML标签，因此去创建一个不存在的标签肯定是会报错的。
// 如果首字母大写，那么就会当成一个变量传递进去，这个时候React会知道这是一个自定义组件，因此他就不会报错了


// getDerivedStateFromProps 传入的props映射到state上面
class detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            show: false,
        };

    }
    // 在getDerivedStateFromProps中进行state的改变
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.type !== prevState.type) {
            return {
                type: nextProps.type,
            };
        }
        return null;
    }

    async componentDidMount() {
        let params = {
            currentPage: 1,
            pageSize: 20,
            year: 2019,
            week: 39,
            appId: '',
            chapter: false,
            sortType: 0
        }
        let data = await Listquest.GetList(params)
        this.setState({
            list: data.records
        })
        console.log(this.state.list)
    }
    databtn = (e) => {
        let target = e.srcElement || e.target;
        let res = target.getAttribute("data-id");
        console.log(res);

        // 去除字符串内所有的空格：str = str.replace(/\s*/g, "");
        // 去除字符串内两头的空格：str = str.replace(/^\s*|\s*$/g, "");
        // 去除字符串内左侧的空格：str = str.replace(/^\s*/, "");
        // 去除字符串内右侧的空格：str = str.replace(/(\s*$)/g, "");
    }
    render() {
        let { list, show } = this.state

        // <img src={require('./../images/photo.png')} />

        let listshow = list.map((item, index) => {
            return <li key={index} className="info">
                <img className="img" alt="" src={CONFIG.baseImgDev + item.path + '?imageView2/1/w/54/h/72/format/jpg/q/80'} />
                <span>{item.worksName}</span>
            </li>
        })
        return (
            <div>
                <a href='/' className="toback" >回到home</a>
                {
                    show ? <h3 style={{ fontSize: 25 }} className="show_wrap">显示</h3> : <h3 style={{ fontSize: 25 }} className="show_wrap">隐藏</h3>
                }

                <button data-id="123" onClick={this.databtn}>获取自定义属性</button>
                <ul>
                    {
                        // list.map((item, index) => {
                        //     return <li key={index} className="info">
                        //         <img alt="" className="img" src={ CONFIG.baseImgDev  + item.path + '?imageView2/1/w/54/h/72/format/jpg/q/80'} />
                        //         <span>{item.worksName}</span>
                        //     </li>
                        // })

                        listshow
                    }
                </ul>
            </div>
        )
    }
}

export default detail