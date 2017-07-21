const PenguinModel = function PenguinModel(request) {
  this.request = request.bind(window)
  this.cache = null
}

PenguinModel.prototype.getPenguin = function getPenguin(index) {
  if (this.cache) {
    return Promise.resolve(Object.assign({}, this.cache[index], {
        index: index,
        count: this.cache.length
      }))
  }
  return this.request('https://codepen.io/beautifulcoder/pen/vmOOLr.js')
    .then(res => res.json())
    .then((res) => {
      this.cache = res
      return Object.assign({}, res[index], {
        index: index,
        count: res.length
      })
    })
}

export default PenguinModel