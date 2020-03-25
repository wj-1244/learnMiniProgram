// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     title:'哈哈哈'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送网络请求
     wx.request({
       url: 'https://github.com/wj-1244/learnMiniProgram/commits/master',
       success:function(res){
        //  console.log(res)
       }
     })
  },
  //弹窗
  handleShowToast(){
    wx.showToast({
      title: '加载中',
      duration:3000,
      icon:'loading',
      mask:true,
      success:function(){
        console.log('展示弹窗成功')
      },
      fail:function(){
        console.log('展示弹窗失败')
      },
      complete:function(){
        console.log('完成函数的调用')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '标题',
      content: '内容',
      // cancelColor:'red',
      success:function(res){
         console.log(res)
         if(res.cancel){
           console.log('用户点击了取消按钮')
         }
         if(res.confirm){
           console.log('用户点击了确定按钮')
         }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: 'loading',
      mask:true
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  handleshowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      success:function(res){
        console.log(res)
      }
    })
  },
  // 转发
  onShareAppMessage:function(options){
    return{
      title:'转发内容',
      path:'/pages/index/index',
      imageUrl:'/assets/images/xz.jpeg'
    }
  },
  handlePush(){
    wx.navigateTo({
      url: '/pages/myslot/myslot?title=你好啊',
    })
  
  }
})