<template>
  <div>
      <h3>Add New Item</h3>
      <br>
      <Loading v-if="isLoading"/>
      <div v-else class="item-form">
        <form enctype="multipart/form-data">
          <div class="input-field col s2">
            <input type="text" id="item-name" v-model="name" class="validate">
            <label for="item-name">Item Name</label><br>
          </div>
          <div class="input-field col s2">
            <input type="number" id="item-price" v-model="price" class="validate">
            <label for="item-price">Price</label><br>
          </div>
          <div class="input-field col s2">
            <input type="number" id="item-stock" v-model="stock" class="validate">
            <label for="item-stock">Stock</label><br>
          </div>
          <div class="input-field col s2">
            <label for="cat">Category</label><br><br>
            <select id="cat" class="browser-default" v-model="category">
              <option value="General" disabled selected>Choose your option</option>
              <option value="Toys">Toys</option>
              <option value="Techs">Techs</option>
              <option value="General">General</option>
            </select>
          </div>
          <!-- <input class="input-field col s2" type="file"
            id="image" name="image" refs="image" v-on:change="handleFileUpload"
            accept="image/png, image/jpeg">
          <br><br> -->
          <button class="btn waves-effect waves-light" v-on:click.prevent="submit">Submit <i class="material-icons right">local_mall</i></button><br><br>
          <button class="btn waves-effect waves-light" v-on:click.prevent="goBack">Back</button>
        </form>
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import M from 'materialize-css'
import Loading from '../components/Loading.vue'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image: '',
      category: '',
      price: null,
      stock: null
    }
  },
  components: {
    Loading
  },
  methods: {
    // handleFileUpload: function () {
    //   this.image = document.getElementById('image').files[0]
    // },
    submit: function () {
      // const productData = new FormData()
      // productData.append('image', this.image)
      // productData.append('name', this.name)
      // productData.append('category', this.category)
      // productData.append('price', this.price)
      // productData.append('stock', this.stock)
      // productData.append('next', 'addItem')
      // this.$store.dispatch('upload', productData)
      this.$store.dispatch('addItem', {
        name: this.name,
        category: this.category,
        price: this.price,
        stock: this.stock
      })
    },
    goBack: function () {
      this.$router.push('/product-list')
    }
  },
  computed: {
    isLoading: function () {
      return this.$store.state.isLoading
    }
  },
  created () {
    // document.addEventListener('DOMContentLoaded', function () {
    //   var elems = document.querySelectorAll('select')
    //   var instances = M.FormSelect.init(elems, options)
    // })
  }
}
</script>

<style>
  .item-form{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
