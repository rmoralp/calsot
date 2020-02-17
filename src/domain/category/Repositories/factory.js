import {JsonRepository} from './JsonRepository'
import {storage} from '../../../infrastructure/storage'

class CategoryRepositoriesFactory {
  static jsonRepository = () =>
    new JsonRepository({
      storage: storage.categoryStorage()
    })
}

export {CategoryRepositoriesFactory}
