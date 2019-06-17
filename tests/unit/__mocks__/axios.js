export default {
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({ data: {
      cards: []
    }
    }))
  }))
}
