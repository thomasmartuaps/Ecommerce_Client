<template>
  <div class="login-register">
    <h2><b>GeneralStore-CMS</b></h2>
    <div id="login-form">
      <form class="form-group" id="login">
        <p> <b>Login:</b> </p>
        <input type="text" id="email" v-model="email" placeholder="E-mail"><br>
        <input type="password" id="password" v-model="password" placeholder="Password"><br><br>
        <button v-on:click.prevent="login">Login</button>
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
  }
}
</script>

<style>

</style>
