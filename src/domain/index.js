import {CategoryUseCasesFactory as CategoryFactory} from './category/UseCases/factory'

const domain = {
  getCategoryUseCase: CategoryFactory.getCategoryUseCase,
  getCategoryListUseCase: CategoryFactory.getCategoryListUseCase,
  createCategoryUseCase: CategoryFactory.createCategoryUseCase
}

export {domain}
