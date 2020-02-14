class CreateCategoryUseCase {
  constructor({entityFactory, service, uuid}) {
    this._entityFactory = entityFactory
    this._service = service
    this._uuid = uuid
  }

  async execute({slug, name, description, imageUrl, parentCategoryId} = {}) {
    const categoryId = this._uuid.get()
    const categoryEntity = this._entityFactory({
      id: categoryId,
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
