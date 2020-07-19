<template>
  <div id="home">
   <nav-bar class="home-nav">
     <div slot="center">購物街</div>
   </nav-bar>
   <home-swiper :banners='banners'/>
   <recomend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import HomeSwiper from './childComps/HomeSwiper'
import RecomendView from './childComps/RecommendView'

import {getHomeMultidata} from 'network/home.js'

export default {
  name: 'Home',
  data () {
    return {
      banners:[],
      recommends:[]
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
  methods: {},
  mounted () {},
  components: {
    NavBar,
    HomeSwiper,
    RecomendView
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>