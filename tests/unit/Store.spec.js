import { state as mockState, mutations, actions, getters } from '@/store'
import { cards } from './CardsMock'

describe('Store', () => {
  describe('Mutations', () => {
    const { fillCards, changeLoadingCards } = mutations
    let state = null

    beforeEach(() => {
      state = mockState
    })

    it('fillCards', () => {
      fillCards(state, cards)
      expect(state.cards).toEqual(cards)
    })

    it('changeLoadingCards', () => {
      changeLoadingCards(state, false)
      expect(state.loadingCards).toEqual(false)
      changeLoadingCards(state, true)
      expect(state.loadingCards).toEqual(true)
    })
  })

  describe('Actions', () => {
    it('fetchCards', async () => {
      const commit = jest.fn()

      await actions.fetchCards({ commit })

      expect(commit).toHaveBeenCalledWith('changeLoadingCards', true)
      expect(commit).toHaveBeenCalledWith('fillCards', [])
      expect(commit).toHaveBeenCalledWith('changeLoadingCards', false)
    })

    it('changeCards', () => {
      const commit = jest.fn()

      actions.changeCards({ commit }, [])

      expect(commit).toHaveBeenCalledWith('fillCards', [])
    })
  })

  describe('Getters', () => {
    const state = { cards, loadingCards: false }

    it('cards', () => {
      const result = getters.cards(state)
      expect(result).toEqual(cards)
    })

    it('loadingCards', () => {
      const result = getters.loadingCards(state)
      expect(result).toBeFalsy()
    })
  })
})
