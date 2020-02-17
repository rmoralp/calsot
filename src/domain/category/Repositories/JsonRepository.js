class JsonRepository {
  /**
   * @constructor
   * @param {Object} param
   * @param {Object} param.storage
   */
  constructor({storage}) {
    this._storage = storage
  }

  async createCategory(categoryEntity) {
    return this._storage.create(categoryEntity)
  }
}

export {JsonRepository}
