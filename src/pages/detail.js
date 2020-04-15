import React from 'react';
import Listquest from '../request/Listquest'
import CONFIG from '../config/index'
import './detail.css';
class detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
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
    render() {
        let {list}  = this.state
        
        // <img src={require('./../images/photo.png')} />

        let listshow = list.map((item, index) => {
            return <li key={index} className="info">
                <img className="img" src={ CONFIG.baseImgDev  + item.path + '?imageView2/1/w/54/h/72/format/jpg/q/80'} />
                <span>{item.worksName}</span>
            </li>
        })
        return (
            <div>
                <a href='/' className="toback">回到home</a>
                <ul>
                    {
                        // list.map((item, index) => {
                        //     return <li key={index} className="info">
                        //         <img className="img" src={ CONFIG.baseImgDev  + item.path + '?imageView2/1/w/54/h/72/format/jpg/q/80'} />
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