import {JsonRepository} from './JsonRepository'

class CategoryRepositoriesFactory {
  static jsonRepository = () => new JsonRepository()
}

export {CategoryRepositoriesFactory}
