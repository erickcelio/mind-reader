import { createLocalVue, shallowMount } from '@vue/test-utils'
import Cards from '@/components/Trick/Cards'
import Vuex from 'vuex'
import { cards as cardsMock, columns as columnsMock } from './CardsMock'

const localVue = createLocalVue()

localVue.use(Vuex)

const actions = {
  fetchCards: jest.fn(),
  changeCards: jest.fn()
}

const store = new Vuex.Store({ actions })

const factory = (values) => {
  return shallowMount(Cards, {
    store,
    localVue,
    propsData: {
      cards: cardsMock,
      ...values
    }
  })
}

describe('Cards Component', () => {
  describe('Initial Component Data', () => {
    const wrapper = factory()
    const { enterAnimation, flipCardsAnimation, stage, hover } = wrapper.vm

    test('Stage should be 0', () => {
      expect(stage).toBe(0)
    })

    test('Hover should be null', () => {
      expect(hover).toBeNull()
    })

    test('enterAnimation should be true', () => {
      expect(enterAnimation).toBeTruthy()
    })

    test('flipCardsAnimation should be false', () => {
      expect(flipCardsAnimation).toBeFalsy()
    })
  })

  describe('Method: resetAnimations', () => {
    const wrapper = factory()

    wrapper.setData({ enterAnimation: true, flipCardsAnimation: true })
    wrapper.vm.resetAnimations()

    const { enterAnimation, flipCardsAnimation } = wrapper.vm

    test('After resetAnimations enterAnimation should be false', () => {
      expect(enterAnimation).toBeFalsy()
    })

    test('After resetAnimations flipCardsAnimation should be false', () => {
      expect(flipCardsAnimation).toBeFalsy()
    })
  })

  describe('Method: putCardsOnColumns', () => {
    const wrapper = factory()

    test('cardsMock length must be 21', () => {
      expect(cardsMock.length).toBe(21)
    })

    const response = wrapper.vm.putCardsOnColumns(cardsMock)

    test('response of putCardsOnColumns must have the size of 3', () => {
      expect(response.length).toBe(3)
    })

    test('Each response item length must be 7', () => {
      response.map((res) => expect(res.length).toBe(7))
    })
  })

  describe('Method: selectColumn', () => {
    let onSelectFunctionReturn = null
    const wrapper = factory({
      onSelect: stage => (onSelectFunctionReturn = stage)
    })

    wrapper.vm.selectColumn(0)

    test('Action changeCards on store have been called', () => {
      expect(actions.changeCards).toHaveBeenCalled()
    })

    test('After selectColumn onSelect function as been called with value 1', () => {
      expect(onSelectFunctionReturn).toBe(1)
    })

    test('After selectColumn hover should be null', () => {
      expect(wrapper.vm.hover).toBeNull()
    })

    test('After selectColumn flipCardsAnimation be true', () => {
      expect(wrapper.vm.flipCardsAnimation).toBe(true)
    })

    test('After selectColumn stage should be 1', () => {
      expect(wrapper.vm.stage).toBe(1)
    })
  })

  describe('Computed: columns', () => {
    test('Computed columns return must be equal to columnsMock', () => {
      const wrapper = factory({ cards: cardsMock })
      expect(wrapper.vm.columns).toEqual(columnsMock)
    })
  })
})
