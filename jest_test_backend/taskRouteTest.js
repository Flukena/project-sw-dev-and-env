const app = require('./app')


it('should get A', () => {
  const result = getScore()

  // Assertion
  expect(result).toEqual('A')
})