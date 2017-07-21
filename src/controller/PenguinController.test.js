import PenguinController from './PenguinController'

test('it passes model data to view', () => {
  // Arrange
  class PenguinViewMock {
    constructor() {
      this.calledRenderWith = null
    }

    render(penguinViewModel) {
      this.calledRenderWith = penguinViewModel
    }
  }

  const penguinViewMock = new PenguinViewMock()
  const controller = new PenguinController(penguinViewMock, null)

  const penguinModelData = {
    name: 'Chinstrap',
    imageUrl: 'http://chinstr1.jpg',
    size: '5.0kg (m) 4.8kg (f)',
    favoriteFood: 'krill',
    index: 2,
    count: 5
  }

  // Act
  controller.showPenguin(penguinModelData)

  // Assert
  const renderedData = penguinViewMock.calledRenderWith
  expect(renderedData.name).toBe(penguinModelData.name)
  expect(renderedData.imageUrl).toBe(penguinModelData.imageUrl)
  expect(renderedData.size).toBe(penguinModelData.size)
  expect(renderedData.favoriteFood).toBe(penguinModelData.favoriteFood)
  expect(renderedData.previousIndex).toBe(1)
  expect(renderedData.nextIndex).toBe(3)
})