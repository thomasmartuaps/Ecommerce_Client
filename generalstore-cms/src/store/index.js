import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import M from 'materialize-css'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    heroku: 'https://generalstore-server-90210.herokuapp.com',
    isLoading: false,
    updating: {}
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    },
    SET_UPDATING (state, payload) {
      state.updating = payload
      router.push(`/update/${payload.id}`)
    }
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
    },
    upload: function ({ commit, dispatch }, productData) {
      axios({
        method: 'POST',
        url: 'https://api.imgur.com/3/upload',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          Authorization: 'Client-ID 3c477b668152078',
          'Access-Control-Allow-Origin': '*'
        },
        data: {
          img: productData.image,
          content_type: 0
        }
      }).then(response => {
        console.log(response.data)
        // dispatch(productData.next)
      })
        .catch(err => {
          console.log(err)
        })
    },
    addItem: function ({ commit }, productData) {
      commit('SET_LOADING', true)
      axios({
        method: 'POST',
        url: `${this.state.heroku}/product`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: productData
      }).then(response => {
        M.toast({ html: `${response.data.name} created` })
        router.push('/product-list')
      }).catch(err => {
        M.toast({ html: err.response.data })
      }).finally(_ => {
        commit('SET_LOADING', false)
      })
    },
    fetchProducts: function ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: 'GET',
        url: `${this.state.heroku}/product`,
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(response => {
        commit('SET_PRODUCTS', response.data)
      })
        .catch(err => {
          M.toast({ html: err.response.data })
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    getUpdatePage: function ({ commit }, product) {
      commit('SET_UPDATING', product)
    },
    editItem: function ({ commit }, product) {
      commit('SET_LOADING', true)
      axios({
        method: 'PUT',
        url: `${this.state.heroku}/product/${this.state.updating.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: product.name,
          // image_url: product.image_url,
          price: product.price,
          stock: product.stock,
          category: product.category
        }
      })
        .then(response => {
          M.toast({ html: `Item edited to ${response.data.name}` })
          router.push('/product-list')
        })
        .catch(err => {
          console.log(err.response.data)
          M.toast({ html: err.response.data })
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    deleteItem: function ({ commit, dispatch }, productId) {
      axios({
        method: 'DELETE',
        url: `${this.state.heroku}/product/${productId}`,
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(response => {
        M.toast({ html: response.data.message })
        dispatch('fetchProducts')
      }).catch(err => {
        M.toast({ html: err.response.data })
      })
    }
  },
  modules: {
  }
})
