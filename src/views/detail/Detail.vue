<template>
  <div id="detail">
    <deatil-nav-bar @titleClick='titleClick' class="detail-nav" ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <!-- <toast :message="加入購物車成功" :show="false"/> -->
  </div>
</template>

<script>
import DeatilNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'
// import Toast from 'components/common/toast/Toast'

import {getDetail, Goods, Shop, GoodsParam,res} from "network/detail";

import {debounce} from 'common/utils'

export default {
  name: 'Detail',
  data () {
    return {
      iid:null,
      topImages:[],
      res,
      goods:{},
      shop:{},
      detailImage:[],
      detailInfo:{},
      paramInfo: {},
      commentInfo:{},
      themeTopYs:[0,100,500,1000],
      getThemeTopY:null,
      currentIndex:0
    };
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(re => {
      const result = this.res.result
      // 輪播圖數據
      this.topImages = result.itemInfo.topImages

      // 商品信息
      this.goods = new Goods(result.itemInfo,result.colums,result.showInfo.services)

      // 店鋪信息
      this.shop = new Shop(result.shopInfo)

        // 4.保存商品的详情数据
      this.detailInfo = result.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(result.itemParams.info, result.itemParams.rule)

      if(result.rate.cRate !== 0){
          this.commentInfo = result.rate.list[0]
      }
      this.getThemeTopY = debounce(() => {
           this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop+200)  
      },100)
      // this.$nextTick(() => {
        // this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop+200)  
      // })
      
    })
  },
  methods: {
    addCart(){
      const produce = {}
      produce.image = this.topImages[0]
      produce.title = this.goodstitle
      produce.desc = this.goods.desc
      produce.price = this.goods.newPrice
      produce.iid = this.iid

      
      this.$store.commit('addCart',produce)
      this.$toast.methods.show("加入購物車成功",2000)
    },
    imageLoad() {
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){
          const y = position.y
          const length = this.themeTopYs.length
          for(let i = 0 ; i<length; i++){
            if(this.currentIndex != i && ((i < length -1 && y > this.themeTopYs[i] && this.themeTopYs[i+1] > y) || (i==length -1 && y > this.themeTopYs[i])) ){
              this.currentIndex = i
              this.$refs.nav.currentIndex = this.currentIndex
            }
          }
      }
  },
  updated() {
    
  },
  mounted () {},
  components: {
    DeatilNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    // Toast
  }
}
</script>

<style scoped>
 #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>