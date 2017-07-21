import PenguinModel from './PenguinModel'

test('it should get back a list of penguins', () => {
  function RequestMock(url) {
    const listOfPenguins = {
      json() {
        return [{"name":"Emperor","imageUrl":"http://imageUrl","size":"36.7kg (m), 28.4kg (f)","favoriteFood":"fish and squid"}];
      }
    }
    return new Promise((resolve, reject) => resolve(listOfPenguins))
  }

  const penguinModel = new PenguinModel(RequestMock)
  expect.assertions(6)
  return penguinModel
    .getPenguin(0)
    .then((penguin) => {
      expect(penguin.name).toBe('Emperor')
      expect(penguin.imageUrl).toBe('http://imageUrl')
      expect(penguin.size).toBe('36.7kg (m), 28.4kg (f)')
      expect(penguin.favoriteFood).toBe('fish and squid')
      expect(penguin.index).toBe(0)
      expect(penguin.count).toBe(1)
    })
})