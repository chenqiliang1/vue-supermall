import vues from 'vuex'
import Vue from 'vue'
import mulations from './mulations'

Vue.use(vues)

const store = new vues.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCart(state,payload){
      return new Promise((resolve,reject) => {
        state.cartList.push(payload)
        resolve("")
      })
    }
  }
})

export default store