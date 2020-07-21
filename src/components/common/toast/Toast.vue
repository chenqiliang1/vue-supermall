<template>
  <div>
    <div class="toast" v-show="isShow">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message:"",
      isShow:false
    };
  },
  methods: {
    show(message,duration=2000){
      this.isShow = true
      this.message = message
      // console.log(this.isShow,this.message)
      setTimeout(() => {
          this.isShow = false
          this.message = ""
      },duration)
    }
  },
  mounted () {},
  components: {}
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%,-50%);
  color: white;
  background-color: rgba(0,0,0,.5);
  z-index: 9999;

}
</style>