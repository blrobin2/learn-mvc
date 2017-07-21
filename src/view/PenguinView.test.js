import PenguinView from './PenguinView'

test('it can render data to the screen', () => {
  class ElementMock {
    constructor() {
      this.innerHTML = null
    }

    // Stubbed methods
    querySelector() {
      return {
        addEventListener() {},
        focus() {}
      }
    }
  }

  const elementMock = new ElementMock()
  const view = new PenguinView(elementMock)

  const viewModel = {
    name: 'Chinstrap',
    imageUrl: 'http://chinstr1.jpg',
    size: '5.0kg (m) 4.8kg (f)',
    favoriteFood: 'krill',
    previousIndex: 1,
    nextIndex: 3
  }

  view.render(viewModel)
  const html = elementMock.innerHTML
  expect(html.includes(viewModel.name)).toBeTruthy()
  expect(html.includes(viewModel.imageUrl)).toBeTruthy()
  expect(html.includes(viewModel.size)).toBeTruthy()
  expect(html.includes(viewModel.favoriteFood)).toBeTruthy()
  expect(html.includes(viewModel.previousIndex)).toBeTruthy()
  expect(html.includes(viewModel.nextIndex)).toBeTruthy()
})