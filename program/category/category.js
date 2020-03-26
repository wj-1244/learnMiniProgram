// program/category/category.js
import { request } from "../../programrequest/request.js";
// import {regeneratorRuntime} from "../../lib/runtime/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList:[],
    // 右侧的商品数据
    rightContent:[],
    // 被点击的左侧的菜单
    currentIndex:0,
    // 右侧内容的滚动条距离顶部的距离
    scrolltop:0
  },
  // 接口的返回数据
  Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.获取本地存储的数据
    const Cates = wx.getStorageSync("cates");
    //  2. 判断是否存在
    if(!Cates) {
      this.getCates()
    }else{
      // 有旧的数据，定义过期时间 5分钟
      if(Date.now()*Cates.time>1000*10*6){
        this.getCates()
      }else{
        this.Cates = Cates.data;
        let leftMenuList = this.Cates.map(v => v.cat_name)
        let rightContent = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent,        
        })
      }
    }
    
  },

  // 获取分类数据
  getCates(){
     request({
       url: '/categories',
     })
     .then(res=>{
      //  console.log(res);
       this.Cates=res.data.message;
      //  把接口的数据存入到本地存储中
       wx.setStorageSync("cates", { time: Date.now(), data: this.Cates})
       let leftMenuList = this.Cates.map(v=>v.cat_name)
       let rightContent = this.Cates[0].children;
       this.setData({
         leftMenuList,
         rightContent
       })
     })
  },
  handleItem(e){
    console.log(e)
    const { index } = e.currentTarget.dataset;
    let rightContent = this.Cates[index].children;
    this.setData({
      currentIndex:index,
      rightContent,
      // 重新设置右侧内容的距离顶部的距离
      scrolltop: 0
    })
  }
})