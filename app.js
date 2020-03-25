//app.js
App({
  // 对象：小程序关闭消失
  globalData:{
    token:''
  },
  onLaunch: function () {
    console.log('初始化完成')
    //1.先从缓存中取出token
    const token = wx.getStorageSync('token')
    // 2.判断token是否有值
    if(token && token.length !== 0){
      this.check_token(token)
    }else{
      this.login()
    }   
  },
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res) => {
        // console.log(res,'=======')
        if ( !res.data.errcode){
          this.globalData.token = token;
        }else{
          this.login()
        }
      },
      fail:function(res){
        console.log(res)
      }
    })
  },
  login(){
     // 登录操作
    wx.login({
      success: (res) => {
        console.log(res)
        // 1.获取code
        const code = res.code
        // 2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res,'-----------')
            const token = res.data.token;
            this.globalData.token = token;
            //进行本地存储
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  },
  // onShow:function () {
  //   console.log('界面吗显示出来')
  // },
  // onHide:function(){
  //   console.log('界面吗隐藏出来')
  // },
  globalData: {
    name:'汪洁',
    age:18
  }

})