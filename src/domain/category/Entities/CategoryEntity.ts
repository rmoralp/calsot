import {AnemicModel} from '../../helpers/AnemicModel'

interface CategoryInterface {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  parentCategoryId: string;
}

class CategoryEntity extends AnemicModel implements CategoryInterface {}

export {CategoryEntity}
