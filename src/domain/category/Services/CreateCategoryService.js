class CreateCategoryService {
  constructor({jsonRepository}) {
    this._jsonRepository = jsonRepository
  }

  async execute(categoryEntity) {
    return this._jsonRepository.createCategory(categoryEntity)
  }
}

export {CreateCategoryService}
