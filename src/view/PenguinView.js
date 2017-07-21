export default class PenguinView {
  constructor(element) {
    this.element = element
    this.onClickGetPenguin = null
  }

  render(viewModel) {
    this.element.innerHTML = `
      <h3>${viewModel.name}</h3>
      <img class="penguin-image"
        src="${viewModel.imageUrl}"
        alt="${viewModel.name}"/>
      <p><strong>Size:</strong> ${viewModel.size}</p>
      <p><strong>Favorite Food:</strong> ${viewModel.favoriteFood}</p>
      <a
        id="previousPenguin"
        class="previous button"
        href="javascript:void(0)"
        data-penguin-index="${viewModel.previousIndex}">Previous</a>
      <a
        id="nextPenguin"
        class="next button"
        href="javascript:void(0)"
        data-penguin-index="${viewModel.nextIndex}">Next</a>
    `

    this.previousIndex = viewModel.previousIndex
    this.nextIndex = viewModel.nextIndex

    // Add events
    const previousPenguin = this.element.querySelector('#previousPenguin')
    previousPenguin.addEventListener('click', this.onClickGetPenguin)

    const nextPenguin = this.element.querySelector('#nextPenguin')
    nextPenguin.addEventListener('click', this.onClickGetPenguin)

    nextPenguin.focus()
  }
}