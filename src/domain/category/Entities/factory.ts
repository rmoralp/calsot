import {CategoryEntity} from './CategoryEntity'

class CategoryEntitiesFactory {
  static categoryEntity = ({
    id,
    slug,
    name,
    description,
    imageUrl,
    parentCategoryId
  }): CategoryEntity => new CategoryEntity({
    id,
    slug,
    name,
    description,
    imageUrl,
    parentCategoryId
  })
}

export {CategoryEntitiesFactory}
