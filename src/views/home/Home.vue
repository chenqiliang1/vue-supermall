<template>
  <div id="home">
   <nav-bar class="home-nav">
     <div slot="center">購物街</div>
   </nav-bar>
   <scroll class="content" ref="scroll" 
   :probe-type="3" 
   @pullingUp="loadMore"
   @scroll="contentScroll"  
   :pull-up-load="true">
      <home-swiper :banners='banners'/>
      <recomend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control" @tabClick='tabClick' :titles="titles"/>
      <goods-list :goods="showGoods"/>
   </scroll>
   <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'


import HomeSwiper from './childComps/HomeSwiper'
import RecomendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import {getHomeMultidata,getHomeGoods,pop,news,sell} from 'network/home.js'

export default {
  name: 'Home',
  data () {
    return {
      banners:[],
      recommends:[],
      titles:["流行","新款","精選"],
      goods:{
        "pop":{page:0,list:[]},
        "news":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      currentType:"pop",
      isShow:false,
      network:{
        pop,
        news,
        sell
      }
    };
  },
  created() {
    // 請求輪播圖之類的資源
    this.getHomeMultidata()
    // 請求商品數據
    this.getHomeGoods('pop')
    this.getHomeGoods('news')
    this.getHomeGoods('sell')

    //監聽圖片加載完成
    this.$bus.$on('itemImageLoad',()=>{
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    //網絡請求相關的
    getHomeMultidata(){
        getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...this.network[type].list)
          this.goods[type].page++;

          this.$refs.scroll.finishPullUp()
      })
    },
    //事件監聽相關的
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    contentScroll(position){
      this.isShow = (-position.y) > 500
      
    },
    backClick(){
       this.$refs.scroll.scrollTo(0,0,500)
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'news'
          break
        case 2:
          this.currentType = 'sell'
          break
      }

    }
  },
  mounted () {},
  components: {
    NavBar,
    HomeSwiper,
    RecomendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.content{
  /* height: calc(100% - 93px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* margin-top: 44px; */
}
</style>