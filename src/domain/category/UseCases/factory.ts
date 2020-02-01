class CategoryUseCasesFactory {
  static getCategoryUseCase = () => Promise.resolve('get category')

  static getCategoryListUseCase = () => Promise.resolve('get categories list')

  static saveCategoryUseCase = () => Promise.resolve('save category')
}

export {CategoryUseCasesFactory}
