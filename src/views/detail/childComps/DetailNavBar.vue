<template>
  <div>
     <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div @click="titleClick(index)" :class="{active:index == currentIndex}" class="title-item" v-for="(item,index) in titles" :key="item.index">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data () {
    return {
      titles:['商品','參數','評論','推薦'],
      currentIndex:0,
    };
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  },
  mounted () {},
  components: {
    NavBar
  }
}
</script>

<style scoped>
.title {
    display: flex;
    font-size: 13px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text)
  }

  .back img {
    margin-top: 12px;
  }
</style>