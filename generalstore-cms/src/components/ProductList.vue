<template>
  <div class="product-list">
    <h2>Product List</h2>
    <Card/>
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  name: 'ProductList',
  props: {
    // msg: String
  },
  components: {
    Card
  },
  body () {
    return {
      product: ''
    }
  }
}
</script>
