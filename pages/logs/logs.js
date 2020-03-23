//logs.js
const util = require('../../utils/util.js')
//注册页面
Page({
  //------------2.初始化数据---------
  data: {
    logs: [],
    counter:0
  },
  //---------------1.监听页面的生命周期函数-------------
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  //------------3.监听事件--------------
  click(){
     console.log('被点击了')
  },
  // --------------4.其他事件---------------
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //下拉刷新事件
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  },
  handleIncrements(e){
    console.log('---------------',e)
    this.setData({
      counter:this.data.counter + 1,
      name:e.detail.name,
      age:e.detail.age
    })
  }
  
})
