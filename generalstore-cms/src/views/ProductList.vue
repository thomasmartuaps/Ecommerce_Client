<template>
  <div class="product-list">
    <a class="waves-effect waves-light btn" v-on:click.prevent="goToAdd">Add New Product <i class="material-icons right">add</i></a>
    <h2>Product List</h2>
    <Loading v-if="isLoading"/>
    <div v-else class="row">
      <Card class="item hoverable" v-for="product in products" :key="product.id" :product="product"/>
      <br>
    </div>
  </div>
</template>
<script>
import Card from '../components/Card.vue'
import Loading from '../components/Loading.vue'

export default {
  name: 'ProductList',
  props: {
    // msg: String
  },
  components: {
    Card,
    Loading
  },
  body () {
    return {
      product: ''
    }
  },
  computed: {
    products: function () {
      return this.$store.state.products
    },
    isLoading: function () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    goToAdd: function () {
      this.$router.push({ path: '/add-item' })
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
  .items {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  }
  .item {
    margin: 25px;
  }
</style>
