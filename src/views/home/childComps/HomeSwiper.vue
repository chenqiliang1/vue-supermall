<template>
  <div>
    <swiper>
     <swiper-item v-for="item in banners" :key="item.index">
       <a :href="item.link">
         <img :src="item.image"/>
       </a>
     </swiper-item>
   </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      
    };
  },
  props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
  },
  methods: {},
  mounted () {},
  components: {
    Swiper,
    SwiperItem
    }
}
</script>

<style scoped>
</style>