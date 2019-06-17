import { createLocalVue, shallowMount } from '@vue/test-utils'
import TrickPage from '@/views/Trick'
import Vuex from 'vuex'
import { cards as cardsMock } from './CardsMock'

const localVue = createLocalVue()

localVue.use(Vuex)

const actions = {
  fetchCards: jest.fn(),
  changeCards: jest.fn()
}

const getters = {
  loadingCards: jest.fn(() => false),
  cards: jest.fn(() => cardsMock)
}

const store = new Vuex.Store({ actions, getters })

const factory = (values) => {
  return shallowMount(TrickPage, {
    store,
    localVue,
    propsData: {
      cards: cardsMock,
      ...values
    }
  })
}

describe('Trick Page Component', () => {
  describe('Initial Component Data', () => {
    const wrapper = factory()
    const { stageType, currentStage, stageInstructions } = wrapper.vm

    it('stageType should be \'selectColumn\'', () => {
      expect(stageType).toBe('selectColumn')
    })

    it('currentStage should be 0', () => {
      expect(currentStage).toBe(0)
    })

    it('stageInstructions length must be 3', () => {
      expect(stageInstructions.length).toBe(3)
    })
  })

  describe('Method: onSelectColumn', () => {
    const wrapper = factory()

    it('After onSelectColumn if param is less than 3 currentStage must be equal to this param', () => {
      wrapper.vm.onSelectColumn(1)
      expect(wrapper.vm.currentStage).toBe(1)
    })

    it('After onSelectColumn if param not is less than 3 stageType must be \'showResult\'', () => {
      wrapper.vm.onSelectColumn(3)
      expect(wrapper.vm.stageType).toBe('showResult')
    })
  })

  describe('Method: resetTrick', () => {
    const wrapper = factory()

    wrapper.setData({ stageType: 'showResult', currentStage: 2 })

    it('Call resetTrick async', async () => {
      await wrapper.vm.resetTrick()
    })

    it('Store Action fetchCards must be called', () => {
      expect(actions.fetchCards).toHaveBeenCalled()
    })

    it('After resetTrick currentStage must be 0', () => {
      expect(wrapper.vm.currentStage).toBe(0)
    })

    it('After resetTrick stageType must be \'selectColumn\'', () => {
      expect(wrapper.vm.stageType).toBe('selectColumn')
    })
  })

  describe('Computed: selectedCard', () => {
    const wrapper = factory()
    const { selectedCard, cards } = wrapper.vm
    it('selectedCard must be equal to 11 item in cards', () => {
      expect(selectedCard).toEqual(cards[10])
    })
  })
})
