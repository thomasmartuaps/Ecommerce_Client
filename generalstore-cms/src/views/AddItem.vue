<template>
  <div>
      <h3>Add New Item</h3>
      <br>
      <div class="item-form">
        <form enctype="multipart/form-data">
          <div class="input-field col s3">
            <input type="text" id="item-name" v-model="name" class="validate">
            <label for="item-name">Item Name</label><br>
          </div>
          <div class="input-field col s3">
            <input type="number" id="item-price" v-model="price" class="validate">
            <label for="item-price">Price</label><br>
          </div>
          <div class="input-field col s3">
            <input type="number" id="item-stock" v-model="stock" class="validate">
            <label for="item-stock">Stock</label><br>
          </div>
          <input class="input-field col s3" type="file"
            id="image" name="image" v-on:change="handleFileUpload"
            accept="image/png, image/jpeg">
          <br><br>
          <button class="btn waves-effect waves-light" v-on:click.prevent="submit">Submit</button>
        </form>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image: '',
      price: null,
      stock: null
    }
  },
  methods: {
    handleFileUpload: function () {
      this.image = this.$refs.file.files[0]
      console.log(document.getElementById('fileItem').files[0])
    },
    submit: function () {
      axios.get()
      const item = {
        name: this.name,
        image: this.image,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('createItem', item)
    }
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
