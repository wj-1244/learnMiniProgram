// program/homes/homes.js
import { request } from "../../programrequest/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList:[],
    // 导航数组
    catesList:[],
    // 楼层数组
    floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  发送异步请求获取轮播图数据
    // wx-wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   method: 'GET',
    //   success: (res) => {
    //     console.log(res)
    //     this.setData({
    //       swiperList:res.data.message
    //     })
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
     this.getSwiperList();
    this.getCateList();
    this.getFloorList()
  },
  getSwiperList(){
    request({ url: "/home/swiperdata" })
     .then(res => {
        this.setData({
          swiperList: res.data.message
        })
     })
  },
  getFloorList() {
    request({ url: "/home/floordata" })
      .then(res => {
        this.setData({
          floorList: res.data.message
        })
      })
  },
  getCateList() {
    request({ url: "/home/catitems" })
      .then(res => {
        this.setData({
          catesList: res.data.message
        })
      })
  },
 
})