// pages/wxs/wxs.js
Page({
  data: {
    price:'25.6666666',
    titles:['衣服','裤子','鞋子'],
    currentIndex:''
  },
  handleItem(e){
    console.log(e);
    const dataset = e.currentTarget.dataset;
    const item = dataset.item;
    const index = dataset.index;
    console.log(item,index);
    this.setData({
      currentIndex:index
    })
  }
})