<template>
  <div id="detail">
    <deatil-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :commentInfo="commentInfo"/>
    </scroll>
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

import Scroll from 'components/common/scroll/Scroll'

import {getDetail, Goods, Shop, GoodsParam,res} from "network/detail";

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
      commentInfo:{}
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
      
    })
  },
  methods: {
    imageLoad() {
        this.$refs.scroll.refresh()
      }
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
    Scroll
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