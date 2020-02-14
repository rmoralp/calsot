import {CreateCategoryService} from './CreateCategoryService'
import {CategoryRepositoriesFactory} from '../Repositories/factory'

class CategoryServicesFactory {
  static createCategoryService = () =>
    new CreateCategoryService({
      jsonRepository: CategoryRepositoriesFactory.jsonRepository()
    })
}

export {CategoryServicesFactory}
