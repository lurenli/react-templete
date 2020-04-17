import React from 'react';
import Listquest from '../request/Listquest'
import CONFIG from '../config/index'
import './detail.css';


//导入本地图片
// import image from "../assets/images/t01c38ff1a84f652273.webp.jpg"
// <img src={require("../assets/images/t01c38ff1a84f652273.webp.jpg")} alt=""></img>

class detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            show: false,
        };

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
    databtn=(e)=>{
        let target =e.srcElement||e.target;
        let  res=target.getAttribute("data-id");
        console.log(res);
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