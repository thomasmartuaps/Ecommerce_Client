<template>
  <div class="product-list">
    <a class="btn-floating btn-large waves-effect waves-light red" v-on:click.prevent="goToAdd"><i class="material-icons">add</i></a>
    <h2>Product List</h2>
    <Card/>
  </div>
</template>
<script>
import Card from '../components/Card.vue'
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
  },
  methods: {
    goToAdd: function () {
      this.$router.push({ path: '/add-item' })
    }
  }
}
</script>
