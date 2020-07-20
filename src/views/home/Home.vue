<template>
  <div id="home">
   <nav-bar class="home-nav">
     <div slot="center">購物街</div>
   </nav-bar>
   <tab-control v-show="isTabFixed" class="tab-control" @tabClick='tabClick' :titles="titles" ref="tabControl_1"/>
   <scroll class="content" ref="scroll" 
   :probe-type="3" 
   @pullingUp="loadMore"
   @scroll="contentScroll"  
   :pull-up-load="true">
      <home-swiper :banners='banners' @swiperImageLoad="swiperImageLoad"/>
      <recomend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control  @tabClick='tabClick' :titles="titles" ref="tabControl_2"/>
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

import {debounce} from 'common/utils'

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
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0,
      homeItemListener:null,
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

          //重要：完成上拉加載更多
          this.$refs.scroll.finishPullUp()
      })
    },
    //事件監聽相關的
    swiperImageLoad(){
      // 獲取tabcontrol的offsetTop
      this.tabOffsetTop = this.$refs.tabControl_2.$el.offsetTop
      
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    contentScroll(position){
      this.isShow = (-position.y) > 500

      // tabcontrol的吸頂
      this.isTabFixed = this.tabOffsetTop < -position.y
      
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
      this.$refs.tabControl_1.currentIndex = index
      this.$refs.tabControl_2.currentIndex = index
    }
  },
  mounted () {
    //監聽圖片加載完成
    const refresh = debounce(this.$refs.scroll.refresh,500)
    
    this.homeItemListener = ()=>{
      refresh()
    }
    this.$bus.$on('itemImageLoad',this.homeItemListener)
    
    
  },
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
  activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
  deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()

      //取消全局事件監聽
      this.$bus.$off('itemImgLoad',this.homeItemListener)
    },
}
</script>

<style scoped>
#home{

  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  
}
.tab-control{
  position: relative;
  z-index: 9;
  background-color: white;
}
.content{
 
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
 
}

</style>