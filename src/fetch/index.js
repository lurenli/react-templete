
import  qs from 'qs';

let commonUrl 


// console.log(process.env.NODE_ENV ) 环境变量
// process（进程）其实就是存在nodejs中的一个全局变量

if(process.env.NODE_ENV === 'production'){
    commonUrl = 'https://www.guomanbang.com/spss'
}else{
    commonUrl = 'http://192.168.8.7:8081/spss'
}

function formatUrl(url, params) {
    let flag = 0;
    let NewUrl = url;
    Object.keys(params).forEach((key) => {
        if (flag) {
            NewUrl = `${NewUrl}&${key}=${params[key]}`
        } else {
            NewUrl = `${NewUrl}?${key}=${params[key]}`
        }
        flag++;
    });
    return NewUrl
}

// // //解析json
function parseJSON(response) {
    return response.json()
}
//检查请求状态
function checkStatus(response) {
    console.log(response)
    if (response.code !== 200 && response.code !== 101) {
        return response.data
    }
    if (response.code === 200 && response.data && !response.data.code) {
        return response.data;
    }
}

export default function request(options = {}) {
    let { data, url, method } = options

    options = { ...options }
    options.mode = 'cors'//跨域

    if (method === 'get') {
        if (data) {
            url = formatUrl(url,data)
        }
    }

    // 对非get类请求头和请求体做处理
    if (method === 'post' || method === 'put' || method === 'delete') {
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json'
        options.body = qs.stringify(data)
    }
    delete options.data

    // options.headers['X-Token'] = getToken();
    // options.headers['requestTime'] = new Date().getTime();
    // options.headers['Authorization'] = Cookies.get('access-token');
    // options.headers = {
    //     'Content-Type': 'application/json'
    // }
    // { credentials: 'include' }

    console.log(options)
    return fetch(commonUrl + url, options)
        .then(parseJSON)
        .then(checkStatus)
        .catch(err => ({ err }))
}