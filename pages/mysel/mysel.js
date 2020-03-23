// pages/mysel/mysel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleIncrement(){
    //1.获取组件对象
    const mysel = this.selectComponent('.sel-class')
    console.log(mysel)
    // 2.通过setData修改组建中的数据
    // mysel.setData({
    //   counter:mysel.data.counter + 20
    // })
    // 3.通过方法对数据修改
    mysel.incrementCounter(10)
  }
})