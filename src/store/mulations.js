export default {
  addCart(state,payload){
    return new Promise((resolve,reject) => {
      state.cartList.push(payload)
    })
  }
}