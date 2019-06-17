import Vue from 'vue'
import Vuex from 'vuex'
import { getDeck } from '@/services/Deck'

Vue.use(Vuex)

export const state = {
  cards: [],
  loadingCards: false
}

export const mutations = {
  fillCards (state, cards) {
    state.cards = cards
  },
  changeLoadingCards (state, value) {
    state.loadingCards = value
  }
}

export const actions = {
  async fetchCards ({ commit }) {
    commit('changeLoadingCards', true)
    commit('fillCards', await getDeck(21))
    commit('changeLoadingCards', false)
  },
  changeCards ({ commit }, cards) {
    commit('fillCards', cards)
  }
}

export const getters = {
  cards: state => {
    return state.cards
  },
  loadingCards: state => {
    return state.loadingCards
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
