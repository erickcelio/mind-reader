import Vue from 'vue'
import Vuex from 'vuex'
import { getDeck } from '@/services/Deck'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    loadingCards: false
  },
  mutations: {
    fillCards (state, cards) {
      state.cards = cards
    },
    changeLoadingCards (state, value) {
      state.loadingCards = value
    }
  },
  actions: {
    async fetchCards (context) {
      context.commit('changeLoadingCards', true)
      context.commit('fillCards', await getDeck(21))
      context.commit('changeLoadingCards', false)
    },
    changeCards (context, cards) {
      context.commit('fillCards', cards)
    }
  },
  getters: {
    cards: state => {
      return state.cards
    },
    loadingCards: state => {
      return state.loadingCards
    }
  }
})
