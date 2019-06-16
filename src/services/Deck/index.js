import axios from 'axios'

const baseURL = 'https://deckofcardsapi.com/api/deck'

const deckAPI = axios.create({
  baseURL
})

const getDeck = async (count) => {
  const deckId = window.localStorage.getItem('deckId')

  if (deckId) {
    await deckAPI.get(`${deckId}/shuffle/`)
  }

  const { data } = await deckAPI.get(`/${deckId || 'new'}/draw/?count=${count}`)
  const { deck_id: returnedDeckId, cards: returnedCards } = data

  window.localStorage.setItem('deckId', returnedDeckId)

  return returnedCards
}

export {
  getDeck
}
