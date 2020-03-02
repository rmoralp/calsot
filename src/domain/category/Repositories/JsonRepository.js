import {inlineError} from '../../../helpers/decorators/inlineError'

class JsonRepository {
  /**
   * @constructor
   * @param {Object} param
   * @param {Object} param.storage
   * @param {Function} param.databaseErrorFactory
   * @param {Object} config
   */
  constructor({storage, databaseErrorFactory, config}) {
    this._storage = storage
    this._databaseErrorFactory = databaseErrorFactory
    this._config = config
  }

  @inlineError
  async createCategory(categoryEntity) {
    return this._storage
      .create(categoryEntity.toJSON())
      .then(cat => categoryEntity)
      .catch(_ =>
        this._databaseErrorFactory({
          code: this._config.HTTP.SERVICE_UNAVAILABLE,
          message: 'Can not create this category'
        })
      )
  }
}

export {JsonRepository}
