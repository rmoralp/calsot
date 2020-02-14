import {CreateCategoryUseCase} from './CreateCategoryUseCase'
import {CategoryRepositoriesFactory} from '../Repositories/factory'
import {CategoryEntitiesFactory} from '../Entities/factory'

class CategoryUseCasesFactory {
  static getCategoryUseCase = () => Promise.resolve('get category')

  static getCategoryListUseCase = () => Promise.resolve('get categories list')

  static createCategoryUseCase = () =>
    new CreateCategoryUseCase({
      jsonRepository: CategoryRepositoriesFactory.jsonRepository(),
      entityFactory: CategoryEntitiesFactory.categoryEntity
    })
}

export {CategoryUseCasesFactory}
