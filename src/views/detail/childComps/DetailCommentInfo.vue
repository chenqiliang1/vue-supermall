<template>
  <div>
    <div class="img-wrapper">
      <img :src="commentInfo.user.avatar" alt="">
      <div class="username">
        <span>{{commentInfo.user.name}}</span>
      </div>
      <div class="comment">
        <p class="content">{{commentInfo.content}}</p>
        <div class="imgs">
          <ul>
            <li v-for="item in commentInfo.images" :key="item.index">
              <img :src="item" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailCommentInfo',
  data () {
    return {
      
    };
  },
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {},
  mounted () {},
  components: {}
}
</script>

<style scoped>
.img-wrapper{
  position: relative;
}
.img-wrapper > img{
  border-radius: 50%;
  width: 46px;
  height: 46px;
}
.username{
  display: inline-block;
  position: absolute;
  font-size: 13px;
  top: 10px;
  left: 53px;
}
.comment{
  padding-top: 10px;
}
.content{
  font-size: 13px;
  text-indent: 2em;
  line-height: 15px;
}
.imgs{
  margin-top: 5px;
  padding-left: 10px;
}
.imgs img{
  width: 43%;
}
</style>