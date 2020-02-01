import {CategoryUseCasesFactory as CategoryFactory} from './category/UseCases/factory'

const domain = {
  getCategoryUseCase: CategoryFactory.getCategoryUseCase,
  getCategoryListUseCase: CategoryFactory.getCategoryListUseCase,
  saveCategoryUseCase: CategoryFactory.saveCategoryUseCase
}

export {domain}
