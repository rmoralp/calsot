import {CreateCategoryUseCase} from './CreateCategoryUseCase'
import {CategoryEntitiesFactory} from '../Entities/factory'
import {CategoryServicesFactory} from '../Services/factory'
import {uuid} from '../../helpers/uuid'

class CategoryUseCasesFactory {
  static getCategoryUseCase = () => Promise.resolve('get category')

  static getCategoryListUseCase = () => Promise.resolve('get categories list')

  static createCategoryUseCase = () =>
    new CreateCategoryUseCase({
      entityFactory: CategoryEntitiesFactory.categoryEntity,
      service: CategoryServicesFactory.createCategoryService(),
      uuid: uuid
    })
}

export {CategoryUseCasesFactory}
