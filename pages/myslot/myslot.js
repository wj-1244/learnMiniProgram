// pages/myslot/myslot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 页面跳转过程中传递数据
  onLoad: function (options) {
     console.log(options,'+++++++++')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
   const pages = getCurrentPages()
   const home = pages[pages.length - 2]
   home.setData({
     title:'呵呵呵'
   })
  },
  handleBack(){
    wx.navigateBack({
      delta:1
    })
  }
  

})