// components/mycpn/mycpn.js
Page({
  data: {
    title:'我是标题'
  },
  
}),
Component({
  name:{
    type: String,
    value: '111'   
  },
  methods:{
    handleIncrement() {
      // console.log('---------------')
      this.triggerEvent('increment',{name:'why',age:18},{})
    }
  }  
})