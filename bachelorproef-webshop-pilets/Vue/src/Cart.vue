<template>
  <div class="container">
      <div class="row">
        <div class="col-md">
            <h3>Cart</h3>
        </div>
        <div class="col-md">
            <h3>{{cart.length}} Item</h3>
        </div>
      </div>
      <hr />
      <div v-if="cart.length == 0">
        <h3>I'm empty.. Maybe you can add some products?</h3>
      </div>
      <div v-if="cart.length > 0">
        <div 
            class="row" 
            v-for="item in cart" 
            :key="item.product_id">
            <div class="col-md-4">
                <img :src="item.image" alt="image" width="300px" />
            </div>
            <div class="col-md-3">
                <b>Name:</b> {{item.name}}
            </div>
            <div class="col-md-3">
                <b>€{{item.price}}</b>
            </div>
            <div>
                <button class="btn btn-danger">Remove</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Cart',
    props: ['cart'],
    data: function() {
      return {
        cartMock: this.cart
      }
    },
    mounted () {
        console.log("THIS IS THE LENGTH:",this.cartMock.length > 0)
    }

    //remove item from cart
    
}
</script>

<style>
</style>