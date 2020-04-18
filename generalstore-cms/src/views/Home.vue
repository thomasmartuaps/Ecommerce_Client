<template>
  <div class="home">    
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Logo</a>
          <ul class="right hide-on-med-and-down">
            <li><a href=""></a></li>
            <li><a href="">Logout</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import M from 'materialize-css'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
    }
  },
  mounted () {
    M.Autoinit()
  }
}
</script>
