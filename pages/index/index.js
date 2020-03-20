//index.js
//获取应用实例
const app = getApp()
const name = app.globalData.name;
const age = app.globalData.age;
Page({
  data: {
    motto: '汪洁',
    students: [
      { id: 1, name: 'lily', age: 18 },
      { id: 2, name: 'amy', age: 19 }
    ],
    counter:0
  },
  handleBtnClick(){
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleBtnClicks() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  }

})
