import {inlineError} from '../../../helpers/decorators/inlineError'

class CreateCategoryService {
  constructor({jsonRepository}) {
    this._jsonRepository = jsonRepository
  }

  @inlineError
  async execute(categoryEntity) {
    if (!categoryEntity.isValid()) return

    const [error, response] = await this._jsonRepository.createCategory(
      categoryEntity
    )

    if (error) return Promise.reject(error)
    return response
  }
}

export {CreateCategoryService}
