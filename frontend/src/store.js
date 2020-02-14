import Vue from 'vue'
import Vuex from 'vuex'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: !!localStorage.getItem('token')
  },
  mutations: {
    [LOGIN_SUCCESS] (state) {
      state.isAuthenticated = true
      state.pending = false
    },
    [LOGOUT] (state) {
      state.isAuthenticated = false
    }
  },
  actions: {
    login ({ commit }, creds) {
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem('token', 'jwt')
          commit(LOGIN_SUCCESS)
          resolve()
        }, 1000)
      })
    },
    logout ({ commit }) {
      localStorage.removeItem('token')
      commit(LOGOUT)
    }
  },
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated
    }
  }
})
