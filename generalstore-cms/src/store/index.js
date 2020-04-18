import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import M from 'materialize-css'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    heroku: 'https://generalstore-server-90210.herokuapp.com'
  },
  mutations: {
  },
  actions: {
    login: function ({ commit }, loginData) {
      axios({
        method: 'POST',
        url: `${this.state.heroku}/login`,
        data: {
          email: loginData.email,
          password: loginData.password
        }
      })
        .then(response => {
          // console.log(response)
          localStorage.setItem('email', response.data.email)
          localStorage.setItem('token', response.data.token)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
          M.toast({ html: err.response.data })
        })
        .finally(_ => {
        })
    }
  },
  modules: {
  }
})
