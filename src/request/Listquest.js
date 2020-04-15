import request from '../fetch/index'

export default {
  GetList: params =>  request({url:'/sqaDayDataStatistics/selectWeekWorks',method: 'get', data: params}),
  test: params =>  request({url:'/sqaDayDataStatistics/selectWeekWorks',method: 'post', data: params})
}