<template>
  <div class="home">
    <div class="navbar-fixed">
      <nav class="green darken-3">
        <div class="nav-wrapper green darken-3">
          <a href="" v-on:click.prevent class="left brand-logo bold"><i class="material-icons left">store_mall_directory</i>GeneralStore-CMS</a>
          <ul class="right hide-on-med-and-down">
            <li>Welcome back, admin.</li>
            <li><a href="" v-on:click.prevent="logout">Logout</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <br>
    <router-view/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import M from 'materialize-css'
// import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
    }
  },
  methods: {
    logout: function () {
      localStorage.clear()
      this.$router.push({ path: 'login' })
    }
  },
  created () {
    this.$router.push({ path: '/product-list' })
  },
  mounted () {
    M.Autoinit()
  }
}
</script>
