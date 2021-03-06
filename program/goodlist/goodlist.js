// program/goodlist/goodlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     tabs:[
       {
         id:0,
         value:"综合",
         isActive:true
       },
       {
         id: 1,
         value: "销售",
         isActive: false
       },
       {
         id: 2,
         value: "价格",
         isActive: false
       }
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  // 标题点击事件  从子组件传递过来
  handleItemChange(e){
    console.log(e)
    const {index} = e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  }
})