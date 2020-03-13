import {CreateCategoryUseCase} from './CreateCategoryUseCase'
import {CategoryEntitiesFactory} from '../Entities/factory'
import {CategoryServicesFactory} from '../Services/factory'
import {CommonMappersFactory} from '../../common/Mappers/factory'

class CategoryUseCasesFactory {
  static getCategoryUseCase = () => Promise.resolve('get category')

  static getCategoryListUseCase = () => Promise.resolve('get categories list')

  static createCategoryUseCase = () =>
    new CreateCategoryUseCase({
      createEntityMapper: CommonMappersFactory.createEntityMapper().setEntityFactory(
        CategoryEntitiesFactory.categoryEntity
      ),
      service: CategoryServicesFactory.createCategoryService()
    })
}

export {CategoryUseCasesFactory}
