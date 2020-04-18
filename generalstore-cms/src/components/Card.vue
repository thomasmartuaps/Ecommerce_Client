<template>
  <div>
    <div class="col s2">
      <div class="card">
        <div class="card-image">
          <img height="250px" width="250px" :src="product.image_url">
          <span class="card-title">{{ product.name }}</span>
        </div>
        <div class="card-content">
          <p><b>{{ product.name }}</b></p>
          <p>Price: ${{ product.price }} Stock: {{ product.stock }}</p>
          <br>
          <a class="waves-effect waves-light btn-small">{{ product.category }}
            <i v-if="product.category === 'Toys'" class="material-icons right">motorcycle</i>
            <i v-if="product.category === 'Techs'" class="material-icons right">computer</i>
            <i v-if="product.category === 'General'" class="material-icons right">local_mall</i></a>
        </div>
        <div class="card-action">
          <a href="#" v-on:click.prevent="goToUpdate">Edit</a>
          <a href="#" v-on:click.prevent="deleteItem">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    product: Object
  },
  methods: {
    goToUpdate: function () {
      this.$store.dispatch('getUpdatePage', this.product)
    },
    deleteItem: function () {
      this.$store.dispatch('deleteItem', this.product.id)
    }
  }
}
</script>

<style>

</style>
