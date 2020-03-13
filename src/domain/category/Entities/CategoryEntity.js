import {AnemicModel} from '../../helpers/AnemicModel'

class CategoryEntity extends AnemicModel {
  /**
   * @constructor
   * {String} id
   * {String} slug
   * {String} name
   * {String} description
   * {String} imageUrl
   * {String} parentCategoryId
   */

  isValid() {
    return (
      this._isString(this._id) &&
      this._isString(this._slug) &&
      this._isString(this._name)
    )
  }
}

export {CategoryEntity}
