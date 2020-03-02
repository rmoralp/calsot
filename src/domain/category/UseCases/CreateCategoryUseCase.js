import {inlineError} from '../../../helpers/decorators'

class CreateCategoryUseCase {
  constructor({entityFactory, service}) {
    this._entityFactory = entityFactory
    this._service = service
  }

  @inlineError
  async execute({
    id = 'asdasd',
    slug,
    name,
    description,
    imageUrl,
    parentCategoryId
  } = {}) {
    const categoryEntity = this._entityFactory({
      id,
      slug,
      name,
      description,
      imageUrl,
      parentCategoryId
    })

    const [error, response] = await this._service.execute(categoryEntity)

    if (error) return Promise.reject(error)
    return response.toJSON()
  }
}

export {CreateCategoryUseCase}
