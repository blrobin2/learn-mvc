import PenguinModel from './model/PenguinModel'
import PenguinView from './view/PenguinView'
import PenguinController from './controller/PenguinController'

const penguinModel = new PenguinModel(window.fetch)
const targetElement = document.getElementById('listOfPenguins')
const penguinView = new PenguinView(targetElement)

const controller = new PenguinController(penguinView, penguinModel)
controller.onClickGetPenguin({currentTarget: { dataset: {penguinIndex: 0}}})