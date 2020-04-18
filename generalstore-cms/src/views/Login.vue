<template>
  <div class="login-register">
    <h2><b>GeneralStore-CMS</b></h2>
    <div id="login-div">
      <form id="login">
        <p> <b>Enter admin credentials to continue:</b> </p>
        <br>
        <div class="input-field col s3">
          <input type="text" id="email" v-model="email" class="validate">
          <label for="email">E-mail</label><br>
        </div>
        <div class="input-field col s3">
          <input type="password" id="password" v-model="password" class="validate">
          <label for="password">Password</label><br><br><br>
        </div>
        <button class="btn waves-effect waves-light" name="login" v-on:click.prevent="login">Login
          <i class="material-icons right">subdirectory_arrow_right</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
      // .then(() => {
      //   this.$router.push({ path: '/' })
      // })
    }
  }
}
</script>

<style>
  #login-div {
    /* text-justify: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 25vw; */
  }
</style>
