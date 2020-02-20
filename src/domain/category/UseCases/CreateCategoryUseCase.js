import {withNewId} from '../../../helpers/decorators/withUuid'

class CreateCategoryUseCase {
  constructor({entityFactory, service}) {
    this._entityFactory = entityFactory
    this._service = service
  }

  @withNewId()
  async execute({
    id,
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

    return this._service
      .execute(categoryEntity)
      .then(categoryEntity => categoryEntity.toJSON())
  }
}

export {CreateCategoryUseCase}
