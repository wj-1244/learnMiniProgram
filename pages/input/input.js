// pages/input/input.js
Page({
  data: {

  },
  handleBlur(event){
    console.log('失去焦点', event)
  },
  handleFocus(event) {
    console.log('获取焦点', event)
  },
  handleInput(event) {
    console.log('输入内容', event)
  }
})