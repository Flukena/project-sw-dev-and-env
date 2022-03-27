const response = require('../sum');

it('should works with async', async () => {
  const response = await fetchSomeData()
  expect(response).toEqual('success')
})