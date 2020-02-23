class CreateCategoryService {
  constructor({jsonRepository}) {
    this._jsonRepository = jsonRepository
  }

  async execute(categoryEntity) {
    if (!categoryEntity.isValid()) return
    return this._jsonRepository.createCategory(categoryEntity)
  }
}

export {CreateCategoryService}
