// components/tabcontrol/tabcontrol.js
Component({
  properties:{
    titles:{
      type:Array,
      value:[]
    }
  },
  data:{
    currentIndex:0
  },
  methods:{
    handleItemClick(e){
      console.log('---------', index)
      const index = e.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('increment', {index,titles:this.properties.titles[index]}, {})
    }
  }
})