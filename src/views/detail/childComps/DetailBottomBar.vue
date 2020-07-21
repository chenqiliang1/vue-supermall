<template>
  <div class="bottom-bar" @click="addCart">
      加入購物車
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data () {
    return {
      
    };
  },
  methods: {
    addCart(){
      this.$emit('addCart')
    }
  },
  mounted () {},
  components: {}
}
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  background-color:pink;
  position: relative;
  bottom:  49px;
  z-index: 1000;
  line-height: 49px;
  text-align: center;
}
</style>