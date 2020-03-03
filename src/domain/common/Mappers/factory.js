import {CreateEntityMapper} from './CreateEntityMapper'
import {v4 as generateId} from 'uuid'

class CommonMappersFactory {
  static createEntityMapper = () =>
    new CreateEntityMapper({
      generateId
    })
}

export {CommonMappersFactory}
