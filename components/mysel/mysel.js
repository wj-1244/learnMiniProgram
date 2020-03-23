// components/mysel/mysel.js
Component({
  properties:{

  },
  data:{
    counter:0
  },
  methods:{
    incrementCounter(num){
      this.setData({
        counter:this.data.counter + num
      })
    }
  }
  
})