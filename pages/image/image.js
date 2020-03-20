Page({
  data: {
    imagePath:''
  },
  handleImage(){
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath:path
        })
      },
    })
    // console.log(res)
    
  },
  handleImageLoad(){
    console.log('图片加载完成')
  }
})