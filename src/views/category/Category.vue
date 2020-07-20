<template>
  <div ref="wrapper" class="wrapper">
    <ul class="content">
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
      <li>列表i</li>
    </ul>  
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Category',
  data () {
    return {
      scroll:null
    };
  },
  created() {
   
  },
  mounted(){
     this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:3,
        pullUpLoad:true
    })

    this.scroll.on('scroll',(position) => {
      console.log(position)
    })

   this.scroll.on('pullingUp',() => {
      console.log("上拉加載更多")
    })

  },
  methods: {},
  components: {}
}
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>