export default class PenguinController {
  constructor(penguinView, penguinModel) {
    this.penguinView = penguinView
    this.penguinModel = penguinModel

    this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this)
  }

  onClickGetPenguin(e) {
    const target = e.currentTarget
    const index = parseInt(target.dataset.penguinIndex, 10)

    this.penguinModel
      .getPenguin(index)
      .then(data => this.showPenguin(data))
  }

  showPenguin(penguinModelData) {
    const penguinViewModel = {
      name: penguinModelData.name,
      imageUrl: penguinModelData.imageUrl,
      size: penguinModelData.size,
      favoriteFood: penguinModelData.favoriteFood,
    }

    if (penguinModelData.index === 0) {
      penguinViewModel.previousIndex = penguinModelData.count - 1
    } else {
      penguinViewModel.previousIndex = penguinModelData.index - 1
    }

    if (penguinModelData.index === penguinModelData.count - 1) {
      penguinViewModel.nextIndex = 0
    } else {
      penguinViewModel.nextIndex = penguinModelData.index + 1
    }

    this.penguinView.render(penguinViewModel)
  }
}