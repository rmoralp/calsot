import {inlineError} from '../../../helpers/decorators'

class CreateCategoryUseCase {
  constructor({createEntityMapper, service}) {
    this._createEntityMapper = createEntityMapper
    this._service = service
  }

  @inlineError
  async execute({slug, name, description, imageUrl, parentCategoryId} = {}) {
    const categoryEntity = this._createEntityMapper.map({
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
