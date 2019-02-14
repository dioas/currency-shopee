import Vue from 'vue'
import Vuex from 'vuex'
// var _ = require('lodash')
const axios = require('axios')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalCurrency: 0,
    dataCurrency: {},
    getListCurrency: [],
    parentValue: 100
  },
  mutations: {
    setCurrency (state, Data) {
      this.state.dataCurrency = Data
    },
    pushDataCurrency (state, Data) {
      this.state.getListCurrency.push(Data)
    },
    setParent (state, Data) {
      this.state.parentValue = Data
    },
    deleteData (state, Data) {
      this.state.getListCurrency.splice(Data, 1)
    }
  },
  actions: {
    async getAllCurrency ({ commit }) {
      axios.get('https://api.exchangeratesapi.io/latest')
        .then(function (response) {
          // handle success
          commit('setCurrency', response.data.rates)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    },
    async getNewArray ({ commit }, data) {
      commit('pushDataCurrency', data)
    },
    async setParentNumber ({ commit }, data) {
      commit('setParent', data)
    },
    async removeIndex ({ commit }, data) {
      commit('deleteData', data)
    }
  }
})
