const cards = [
  {
    'code': 'KD',
    'suit': 'DIAMONDS',
    'value': 'KING',
    'image': 'https://deckofcardsapi.com/static/img/KD.png'
  },
  {
    'code': '9H',
    'suit': 'HEARTS',
    'value': '9',
    'image': 'https://deckofcardsapi.com/static/img/9H.png'
  },
  {
    'code': '2D',
    'suit': 'DIAMONDS',
    'value': '2',
    'image': 'https://deckofcardsapi.com/static/img/2D.png'
  },
  {
    'code': '4H',
    'suit': 'HEARTS',
    'value': '4',
    'image': 'https://deckofcardsapi.com/static/img/4H.png'
  },
  {
    'code': '7D',
    'suit': 'DIAMONDS',
    'value': '7',
    'image': 'https://deckofcardsapi.com/static/img/7D.png'
  },
  {
    'code': '8H',
    'suit': 'HEARTS',
    'value': '8',
    'image': 'https://deckofcardsapi.com/static/img/8H.png'
  },
  {
    'code': 'AH',
    'suit': 'HEARTS',
    'value': 'ACE',
    'image': 'https://deckofcardsapi.com/static/img/AH.png'
  },
  {
    'code': '0S',
    'suit': 'SPADES',
    'value': '10',
    'image': 'https://deckofcardsapi.com/static/img/0S.png'
  },
  {
    'code': '3D',
    'suit': 'DIAMONDS',
    'value': '3',
    'image': 'https://deckofcardsapi.com/static/img/3D.png'
  },
  {
    'code': '0C',
    'suit': 'CLUBS',
    'value': '10',
    'image': 'https://deckofcardsapi.com/static/img/0C.png'
  },
  {
    'code': '3C',
    'suit': 'CLUBS',
    'value': '3',
    'image': 'https://deckofcardsapi.com/static/img/3C.png'
  },
  {
    'code': '9C',
    'suit': 'CLUBS',
    'value': '9',
    'image': 'https://deckofcardsapi.com/static/img/9C.png'
  },
  {
    'code': '3S',
    'suit': 'SPADES',
    'value': '3',
    'image': 'https://deckofcardsapi.com/static/img/3S.png'
  },
  {
    'code': '3H',
    'suit': 'HEARTS',
    'value': '3',
    'image': 'https://deckofcardsapi.com/static/img/3H.png'
  },
  {
    'code': 'AC',
    'suit': 'CLUBS',
    'value': 'ACE',
    'image': 'https://deckofcardsapi.com/static/img/AC.png'
  },
  {
    'code': '8C',
    'suit': 'CLUBS',
    'value': '8',
    'image': 'https://deckofcardsapi.com/static/img/8C.png'
  },
  {
    'code': '6S',
    'suit': 'SPADES',
    'value': '6',
    'image': 'https://deckofcardsapi.com/static/img/6S.png'
  },
  {
    'code': 'JH',
    'suit': 'HEARTS',
    'value': 'JACK',
    'image': 'https://deckofcardsapi.com/static/img/JH.png'
  },
  {
    'code': 'QH',
    'suit': 'HEARTS',
    'value': 'QUEEN',
    'image': 'https://deckofcardsapi.com/static/img/QH.png'
  },
  {
    'code': '4S',
    'suit': 'SPADES',
    'value': '4',
    'image': 'https://deckofcardsapi.com/static/img/4S.png'
  },
  {
    'code': 'JD',
    'suit': 'DIAMONDS',
    'value': 'JACK',
    'image': 'https://deckofcardsapi.com/static/img/JD.png'
  }
]

const columns = [
  [
    { code: 'KD',
      suit: 'DIAMONDS',
      value: 'KING',
      image: 'https://deckofcardsapi.com/static/img/KD.png' },
    { code: '4H',
      suit: 'HEARTS',
      value: '4',
      image: 'https://deckofcardsapi.com/static/img/4H.png' },
    { code: 'AH',
      suit: 'HEARTS',
      value: 'ACE',
      image: 'https://deckofcardsapi.com/static/img/AH.png' },
    { code: '0C',
      suit: 'CLUBS',
      value: '10',
      image: 'https://deckofcardsapi.com/static/img/0C.png' },
    { code: '3S',
      suit: 'SPADES',
      value: '3',
      image: 'https://deckofcardsapi.com/static/img/3S.png' },
    { code: '8C',
      suit: 'CLUBS',
      value: '8',
      image: 'https://deckofcardsapi.com/static/img/8C.png' },
    { code: 'QH',
      suit: 'HEARTS',
      value: 'QUEEN',
      image: 'https://deckofcardsapi.com/static/img/QH.png' } ],
  [
    { code: '9H',
      suit: 'HEARTS',
      value: '9',
      image: 'https://deckofcardsapi.com/static/img/9H.png' },
    { code: '7D',
      suit: 'DIAMONDS',
      value: '7',
      image: 'https://deckofcardsapi.com/static/img/7D.png' },
    { code: '0S',
      suit: 'SPADES',
      value: '10',
      image: 'https://deckofcardsapi.com/static/img/0S.png' },
    { code: '3C',
      suit: 'CLUBS',
      value: '3',
      image: 'https://deckofcardsapi.com/static/img/3C.png' },
    { code: '3H',
      suit: 'HEARTS',
      value: '3',
      image: 'https://deckofcardsapi.com/static/img/3H.png' },
    { code: '6S',
      suit: 'SPADES',
      value: '6',
      image: 'https://deckofcardsapi.com/static/img/6S.png' },
    { code: '4S',
      suit: 'SPADES',
      value: '4',
      image: 'https://deckofcardsapi.com/static/img/4S.png' } ],
  [
    { code: '2D',
      suit: 'DIAMONDS',
      value: '2',
      image: 'https://deckofcardsapi.com/static/img/2D.png' },
    { code: '8H',
      suit: 'HEARTS',
      value: '8',
      image: 'https://deckofcardsapi.com/static/img/8H.png' },
    { code: '3D',
      suit: 'DIAMONDS',
      value: '3',
      image: 'https://deckofcardsapi.com/static/img/3D.png' },
    { code: '9C',
      suit: 'CLUBS',
      value: '9',
      image: 'https://deckofcardsapi.com/static/img/9C.png' },
    { code: 'AC',
      suit: 'CLUBS',
      value: 'ACE',
      image: 'https://deckofcardsapi.com/static/img/AC.png' },
    { code: 'JH',
      suit: 'HEARTS',
      value: 'JACK',
      image: 'https://deckofcardsapi.com/static/img/JH.png' },
    { code: 'JD',
      suit: 'DIAMONDS',
      value: 'JACK',
      image: 'https://deckofcardsapi.com/static/img/JD.png' } ]
]

export {
  cards,
  columns
}
