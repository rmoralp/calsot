class CreateCategoryUseCase {
  constructor({jsonRepository, entityFactory}) {
    this._jsonRepository = jsonRepository
    this._entityFactory = entityFactory
  }

  execute() {
    // const categoryEntity = this._entityFactory(category)
    return this._jsonRepository.createCategory()
  }
}

export {CreateCategoryUseCase}
