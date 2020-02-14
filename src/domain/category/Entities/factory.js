import {CategoryEntity} from './CategoryEntity'

class CategoryEntitiesFactory {
  static categoryEntity = ({
    id,
    slug,
    name,
    description,
    imageUrl,
    parentCategoryId
  }) =>
    new CategoryEntity({
      id,
      slug,
      name,
      description,
      imageUrl,
      parentCategoryId
    })
}

export {CategoryEntitiesFactory}
