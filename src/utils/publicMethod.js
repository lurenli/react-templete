/*取整数或者小数点后一位四舍五入*/
export function ToFixedNum(num) {
    if (num) {
        var orzero = num % 1;
        var length = num.toString().length;
        if (orzero === 0) {
            if (length < 5) {
                return num
            } else if (5 <= length && length < 9) {
                return parseInt(num / 1000) / 10 + '万'
            } else {
                return parseInt(num / 10000000) / 10 + '亿'
            }
        } else {
            let newnum = num.toFixed(1)
            let IntNum = newnum.split('.')[0]
            let xiaoshuNum = newnum.split('.')[1]
            if (IntNum.length < 5) {
                return newnum
            } else if (5 <= IntNum.length && IntNum.length < 9) {
                return parseInt(IntNum / 1000) / 10 + xiaoshuNum + '万'
            } else {
                return parseInt(IntNum / 10000000) / 10 + xiaoshuNum + '亿'
            }
        }
    } else {
        return 0
    }
}

// www.baidu.com + "/getlist?name=" + this.name + "&sex=" + this.sex + "&adress=" + this.adress
// 封装拼接太长情况下
function test(url, params) {
    let flag = 0;
    let data = url;
    Object.keys(params).forEach((key) => {
        if (flag) {
            data = `${data}&${key}=${params[key]}`
        } else {
            data = `${data}?${key}=${params[key]}`
        }
        flag++;
    });
    console.log(data);
}

//调用方法
// this.test('www.baidu.com', { 'id': 6, 'value': 'test', 'test': 'abc' });


/** [通过参数名获取url中的参数值]
    示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
    @param  {[string]} queryName [参数名]
    @return {[string]}           [参数值]
**/
function GetQueryValue(queryName) {
    let query = decodeURI(window.location.search.substring(1));
    let arr = query.split("&");
    for (let i = 0; i < arr.length; i++) {
        let pair = arr[i].split("=");
        if (pair[0] == queryName) { return pair[1]; }
    }
    return null;
}
// 例如: let queryVal=GetQueryValue('name');

// 过滤对象数组相同的值
export function FiltersObjArr(arr) {
    // 过滤相同对象
    //   1.利用新数组和对象
    let result = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i].id]) {
            result.push(arr[i]);
            obj[arr[i].id] = true;
        }
    }
    return arr
    //   2.利用filter
    // let newarr =arr.filter((item, index) => {
    //     let arrids = []
    //     arr.forEach(item => {
    //         arrids.push(item.id)
    //     })
    //     return arrids.indexOf(item.id) === index
    // })
    // return newarr
}
// 去重两个数组
export function FiltersTwoArr(arr1, arr2) {
    let arr = arr1.concat();
    //或者使用slice()let arr = arr1.slice(0)
    for (let i = 0; i < arr2.length; i++) {
        arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0;
    }
    return arr;
}
// 去重多个数组
export function FiltersMoreArr(arr1, arr2, arr3) {
    if (arguments.length <= 1) {
        return false;
    }
    let concat_ = function (arr1, arr2) {
        let arr = arr1.concat();
        for (let i = 0; i < arr2.length; i++) {
            arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0;
        }
        return arr;
    }
    let result = concat_(arr1, arr2);
    for (let i = 2; i < arguments.length; i++) {
        result = concat_(result, arguments[i]);
    }
    return result;
}
// 获取一个随机数字加字母的可控（16/32）长度的的字符串
export function randomString() {
    var len = 32; //32长度
    var radix = 16; //16进制
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) {
            uuid[i] = chars[0 | Math.random() * radix];
        }
    } else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
};

//导出数据
export function downFile(data, fileName) {
    const a = document.createElement('a');
    const blob = new Blob([data], { type: data.type });
    console.log('bolb', blob, data)
    const blobUrl = window.URL.createObjectURL(blob);
    a.style.display = 'none';
    a.download = fileName
    a.href = blobUrl;
    document.body.appendChild(a);
    a.click()
    document.body.removeChild(a)
}

/* 获取当前第几周(result+1) 上一周(result) /一年无论是平年还是闰年都是52周 平年有52周余1天 闰年有52周余2天*/
//(可传一个时间,获得一个周数)
export function getWeekOfYear(value) {
    let now = new Date();
    let NowzhouyiDay = now.getDay()
    now.setDate(now.getDate() - (NowzhouyiDay + 6)); // 获取上周周一 (当天周几-1) + 六天
    let tYear = now.getFullYear()
    let tMonth = now.getMonth() + 1;
    let tDay = now.getDate();
    let Nowzhouyi = new Date(tYear + '/' + (tMonth < 10 ? ('0' + tMonth) : tMonth) + '/' + (tDay < 10 ? ('0' + tDay) : tDay))
    let lastWeekZhouyi = new Date(Nowzhouyi).getTime()
    let lastweekTime = formatDataByTimeStamp(lastWeekZhouyi, 'yyyy-MM-dd')

    let lastWeekYear = lastweekTime.split('-')[0]
    let lastWeekMonth = lastweekTime.split('-')[1]
    let lastWeekDay = lastweekTime.split('-')[2]
    let WhichWeek = getWeekNumber(lastWeekYear, lastWeekMonth, lastWeekDay)

    let result = WhichWeek.split('年第')[1].split('周')[0]
    return result;
};

// 获取某个日期第几周
export function getWeekNumber(y, m, d) {
    var targetDay = new Date(y, m - 1, d);
    var year = targetDay.getFullYear();
    var month = targetDay.getMonth();
    var days = targetDay.getDate();
    // 那一天是那一年中的第多少天
    for (var i = 1; i < m; i++) {
        days += getMonthDays(year, i);
    }
    // 那一年第一天是星期几
    var yearFirstDay = new Date(year, 0, 1).getDay();
    // 计算是第几周
    days += yearFirstDay;
    if (week == 53) { //一年无论是平年还是闰年都是52周 平年有52周余1天 闰年有52周余2天
        return year+1 + '年' + '第' + 1 + '周';
    } else {
        return year + '年' + '第' + week + '周';
    }
}

/**判断年份是否为润年*/
export function isLeapYear(year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}

/***获取某年某月的天数*/
export function getMonthDays(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

// 防止多次点击
export function _debounce(fn, delay, immediate) {
    var timer = null;
    return function (...args) {
        if (!timer && immediate) {
            fn.apply(this, args);
        }
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            !immediate && fn.apply(this, args);
            timer = null
        }, delay);
    }
}

// 图片压缩
export function picReduce(picObj, callback) {
    let img = new Image();
    img.src = picObj;
    img.onload = () => {
        const w = img.width;
        const h = img.height;
        const scale = w / h;
        const max_w = w > 1080 ? 1080 : w;
        const max_h = (h * max_w) / w;
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        canvas.width = max_w;
        canvas.height = max_h;
        ctx.drawImage(img, 0, 0, max_w, max_h);
        var base64 = canvas.toDataURL("image/jpeg", 0.7);
        callback(base64);
    };
}

// 判断是否为PC端
export function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


// 上N周开始时间
export function LastweekTime(n, value) { //可传一个值，先获取这个时间点对应的周一时间
    var now = new Date();

    // let now = new Date(value);
    // let weekday = now.getDay() || 7
    // let tMonth = now.getMonth() + 1;
    // let zhouyihaoMiao = now - (weekday - 1) * 24 * 60 * 60 * 1000
    // let zhouyi = new Date(zhouyihaoMiao)
    // let year = now.getFullYear();

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var day = now.getDay();
    // console.log(date);
    //判断是否为周日,如果不是的话,就让今天的day-1(例如星期二就是2-1)
    // var newdate = day-(day-1)
    if (day !== 0) {
        n = n + (day - 1);
    } else {
        n = n + day;
    }
    // console.log(n)
    if (day) {
        //这个判断是为了解决跨年的问题
        if (month > 1) {
            month = month;
        } //这个判断是为了解决跨年的问题,月份是从0开始的
        else {
            year = year - 1;
            month = 12;
        }
    }
    // now.setDate(now.getDate() + n);	//下几周
    now.setDate(now.getDate() - n); //上几周
    year = now.getFullYear();
    month = now.getMonth() + 1;
    date = now.getDate();

    // zhouyi.setDate(parseInt(zhouyi.getDate()) + n);	//下几周
    // year = zhouyi.getFullYear();
    // month = zhouyi.getMonth() + 1;
    // date = zhouyi.getDate();

    let s = year + "." + (month < 10 ? ('0' + month) : month) + "." + (date < 10 ? ('0' + date) : date);
    return s;
}

var arr = new Array()

//上N周结束时间(数组总和开始时间和结束时间)
export function WeekStarEndTime() {
    arr = []
    let starttime = new Date('2019/06/10').getTime(); //得到毫秒数
    let nowdata = formatDataByTimeStamp(getWeekStr()[0], 'yyyy/MM/dd')
    let nowzhouyihaomiao = (new Date(nowdata)).getTime();
    var whichday = (nowzhouyihaomiao - starttime) / 86400000 / 7
    // console.log(whichday) //多少期

    for (let i = 1; i < whichday; i++) {
        let newStarTime = LastweekTime(7 * i)
        let newTime = newStarTime.replace(/\./g, "/")
        let haomiao = (new Date(newTime)).getTime(); //得到毫秒数
        let biaozhuntime = new Date(haomiao - 24 * 60 * 60 * 1000); //前一天
        let NewDate = new Date(biaozhuntime);
        let year = NewDate.getFullYear();
        let month = NewDate.getMonth() + 1;
        let date = NewDate.getDate();
        let endtime = year + "." + (month < 10 ? ('0' + month) : month) + "." + (date < 10 ? ('0' + date) : date);
        arr.push({
            week: getWeekNumber(LastweekTime(7 * (i + 1)).split('.')[0], LastweekTime(7 * (i + 1)).split('.')[1], LastweekTime(7 * (i + 1)).split('.')[2]),
            whichTime: LastweekTime(7 * (i + 1)) + '~' + endtime
        })
    }
    arr.unshift({
        week: getWeekNumber(LastweekTime(7).split('.')[0], LastweekTime(7).split('.')[1], LastweekTime(7).split('.')[2]),
        whichTime: LastweekTime(7) + '~' + LastweekTime(1)
    })
    let newarr = arr.splice(0, arr.length - 7)
    return newarr.slice(0, 12)
}
// 获取一个一个时间的周一或者周日毫秒数
export function getWeekStr() {
    var now = new Date();
    var nowTime = now.getTime();
    var day = now.getDay();
    var oneDayTime = 24 * 60 * 60 * 1000;

    //显示周一
    var MondayTime = nowTime - (day - 1) * oneDayTime;
    //显示周日

    var SundayTime = nowTime + (7 - day) * oneDayTime;
    // //初始化日期时间
    // var monday = new Date(MondayTime);
    // var sunday = new Date(SundayTime);
    let startendtime = []
    startendtime.push(MondayTime)
    startendtime.push(SundayTime)
    return startendtime
}
// 把时间戳转成本地时间格式
Date.prototype.toLocaleString = function () {
    return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate() + "/ " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
};
// 把时间 格式化
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

/** 把毫秒时间戳转换成 指定格式**/
// 也可以直接使用new Date(time).format(format);  
// 比如
// item.updateTime = item.updateTime ? new Date(item.updateTime).Format("yyyy-MM-dd hh:mm") : "";
export function formatDataByTimeStamp(timestamp, format) {
    var time = new Date(timestamp).toLocaleString();
    var curTime = new Date(time).format(format);
    return curTime;
}

//月份三个月(具体，前几数字可控) 
export function getPrevMonth() {
    let now = new Date();
    let year = now.getFullYear();
    //因为月份是从0开始的,所以获取这个月的月份数要加1才行
    let month = now.getMonth() + 1;
    let date = now.getDate();

    let defaultTime = '2019-6-10'
    let initDate = new Date(defaultTime);
    let resultarr = [];
    let whcihyear = year - 2019
    let newmonth = 0
    if (year > 2019) {
        newmonth = 6 + (whcihyear - 1) + month
    } else {
        newmonth = 6
    }
    for (let i = 1; i < newmonth; i++) {
        resultarr.unshift({ whichTime: addMonth(initDate, i) });
    }
    resultarr.push({ whichTime: '2019年06月' })
    let newMontharr = resultarr.splice(0, resultarr.length - 2)
    return newMontharr.slice(0, 3);
}
//追加月份
export function addMonth(date, months) {
    let d = new Date(date);
    let yuefeng = d.getMonth() + months
    d.setMonth(d.getMonth() + months); //设置几月份，月份从零开始 0->一月份
    let month = ''
    if (yuefeng == 1) {
        month = d.getMonth()
    } else {
        month = d.getMonth() + 1;
    }
    let day = d.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    let val = d.getFullYear() + "年" + month + "月";
    return val;
}


// 知道一个时间 先获取对应的下个月时间
export async function nextMonth() {
    //  如果没有周产出返回数据 前端自定义算时间 把数据设置为0
    let { datas } = await this.API.gm.GetCycleinfo()
    let lastMonth
    let myDate = new Date();
    let tYear = myDate.getFullYear();
    let tMonth = myDate.getMonth() + 1;
    let tday = myDate.getDate()
    let starttime, newEndDate, NowDate, NowTime, DefaultTime
    if (datas.beginDate > datas.endDate) {
        // 上月-当月
        lastMonth = tMonth - 1 > 0 ? tMonth : 12
        // newEndDate = datas.endDate > 9 ? parseInt(datas.endDate) + 1 : ('0' + ParseInt(datas.endDate) + 1)
        let newYear
        // 比如 12-27- 1-26
        // 1-27 - 2-26
        if (tday < datas.endDate && tMonth == 1) {
            newYear = tYear - 1
        } else {
            newYear = tYear
        }

        starttime = (new Date(newYear + '/' + (lastMonth < 10 ? ('0' + lastMonth) : lastMonth) + '/' + (datas.endDate < 10 ? ('0' + ddatas.endDateate) : datas.endDate)).getTime()) + 1000 * 60 * 60 * 24
        NowDate = new Date(newYear + '/' + lastMonth + '/' + (datas.endDate < 10 ? ('0' + ddatas.endDateate) : datas.endDate))
        NowTime = new Date(newYear + '/' + lastMonth + '/' + (datas.endDate < 10 ? ('0' + ddatas.endDateate) : datas.endDate))

        DefaultTime = new Date(newYear + '/' + lastMonth + '/' + (datas.endDate < 10 ? ('0' + ddatas.endDateate) : datas.endDate))
        NowTime.setDate(NowTime.getDate() + 1)
        DefaultTime.setDate(DefaultTime.getDate() + 1)
    } else {
        // 当月-当月
        starttime = new Date(tYear + '/' + tMonth + '/' + (datas.endDate < 10 ? ('0' + ddatas.endDateate) : datas.endDate)) + 1000 * 60 * 60 * 24
        // newEndDate = datas.endDate > 9 ? parseInt(datas.endDate) + 1 : ('0' + ParseInt(datas.endDate) + 1)
        NowDate = new Date(tYear + '/' + tMonth + '/' + (datas.endDate < 10 ? ('0' + ddatas.endDateate) : datas.endDate))
        NowTime = new Date(tYear + '/' + tMonth + '/' + (datas.endDate < 10 ? ('0' + ddatas.endDateate) : datas.endDate))
        NowTime.setDate(NowTime.getDate() + 1)
    }
    let nextMonthHaomaio = JSON.parse(JSON.stringify(NowDate.setMonth(NowDate.getMonth() + 1)));  //时间加1个月 //根据计薪周期显示
    let whichday = (nextMonthHaomaio - starttime) / 86400000 / 7
    console.log(whichday)
    let arr = []
    // if (tYear + 1 == planMonth.split('-')[0] && planMonth.split('-')[1] == '01') {
    for (let weekIndex = 1; weekIndex < whichday; weekIndex++) {
        let newStarTime = this.LastweekTime(7 * weekIndex, NowTime)
        let haomiao = (new Date(newStarTime)).getTime(); //得到毫秒数
        let lineTime = new Date(haomiao)
        let NextSundayTime = haomiao + (7 - lineTime.getDay()) * 24 * 60 * 60 * 1000;;//显示周日
        // let biaozhuntime = new Date(NextSundayTime); //每周周日
        let NewDate = new Date(NextSundayTime);
        let year = NewDate.getFullYear();
        let month = NewDate.getMonth() + 1;
        let date = NewDate.getDate();

        let endtime = year + "-" + (month < 10 ? ('0' + month) : month) + "-" + (date < 10 ? ('0' + date) : date)

        if (new Date(endtime).getTime() >= nextMonthHaomaio || new Date(this.LastweekTime(7 * weekIndex, NowTime)).getTime() >= nextMonthHaomaio) {
            endtime = new Date(nextMonthHaomaio).Format("yyyy-MM-dd") //根据计薪周期显示
            // endtime = new Date(nextMonthHaomaio).Format("yyyy-MM-dd") // 根据当前时间显示
        }
        let newWhichStarTime, newWhichEndTime
        if (new Date(this.LastweekTime(7 * weekIndex, NowTime)).getTime() >= nextMonthHaomaio) {
            newWhichStarTime = new Date(nextMonthHaomaio).Format("yyyy-MM-dd")
        } else {
            newWhichStarTime = this.LastweekTime(7 * weekIndex, NowTime)
        }

        if (new Date(endtime).getTime() >= nextMonthHaomaio) {
            newWhichEndTime = new Date(nextMonthHaomaio).Format("yyyy-MM-dd")
        } else {
            newWhichEndTime = endtime
        }
        arr.push({
            whcichWeek: getWeekNumber(this.LastweekTime(7 * weekIndex, NowTime).split('-')[0], this.LastweekTime(7 * weekIndex, NowTime).split('-')[1], this.LastweekTime(7 * weekIndex, NowTime).split('-')[2]),
            whichTime: newWhichStarTime + '~' + newWhichEndTime,
        })
    }

    let beginTime = new Date(DefaultTime.getTime()).Format("yyyy-MM-dd")
    let whcihcweekDay = new Date(beginTime).getDay()
    if (whcihcweekDay == 0) {
        whcihcweekDay = 7
    }
    let otherTime = new Date(beginTime)
    let otherhaomiao = otherTime.getTime()
    let SundayTime = otherhaomiao + (7 - whcihcweekDay) * 24 * 60 * 60 * 1000;;//显示周日
    let endTime2 = new Date(SundayTime).Format("yyyy-MM-dd")
    let time2 = endTime2
    arr.unshift({
        whcichWeek: getWeekNumber(beginTime.split('-')[0], beginTime.split('-')[1], beginTime.split('-')[2]),
        whichTime: beginTime + '~' + time2
    })
    this.weekyieldList = []
    this.nowmonthAllData = []
    arr.forEach(item => {
        this.weekyieldList.push({
            week: item.whcichWeek.split('+')[1],
            weekTime: item.whichTime,
            storyboard: 0,
            drawing: 0,
            figure: 0,
            background: 0,
            draft: 0,
        })
    })
    this.nowmonthAllData.push({
        storyboardCount: 0,
        drawingCount: 0,
        figureCount: 0,
        backgroundCount: 0,
        draftCount: 0
    })
}

// 可指定时间 月数传值 (获取下几个月 或者上几个月)
export function AddMouth(date, num) {
    //date为格式化后的日期字符yyyy-MM-dd,num为增加的月份
    var monthnum = parseInt(num);
    var year = parseInt(date.substring(0, 4));
    var month = parseInt(date.substring(5, 7));
    var day = parseInt(date.substring(8, 10));
    if (month + monthnum > 12) {
        var newyear = year + 1;
        var newmonth = month + monthnum - 12;
        var newday = day;
    } else {
        var newyear = year
        var newmonth = month + monthnum;
        var newday = day;
    }
    var newdate = newyear + "-" + FilterValue(newmonth) + "-" + FilterValue(newday);
    return newdate;
}

// 月份和天小于10的时候 拼接一个0
export function FilterValue(value) {
    return value < 10?'0' + value:value
}

 //  字符串中替换指定关键词 可全局/可一个
 export function FilterName(value){
    let strReg = new RegExp(keyWords, 'g') // 第二个参数 以设定检索 g//全局
    return value.replace(strReg,`<span style="color:red;font-weight: bold">${this.keyWords}</span>`)
}