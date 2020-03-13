import {JsonRepository} from './JsonRepository'
import {CommonErrorsFactory} from '../../common/Errors/factory'
import {storage} from '../../../infrastructure/storage'
import * as config from '../../../config'

class CategoryRepositoriesFactory {
  static jsonRepository = () =>
    new JsonRepository({
      storage: storage.categoryStorage(),
      databaseErrorFactory: CommonErrorsFactory.databaseError,
      config
    })
}

export {CategoryRepositoriesFactory}
