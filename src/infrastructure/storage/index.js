import {CategoryStorage} from './CategoryStorage'
import {Database} from '../database'

class Storage {
  constructor({database}) {
    this._database = database
  }

  categoryStorage = () => new CategoryStorage({database: this._database})
}

/**
 * Use configured Database in .env
 */
const storage = new Storage({database: Database.localDatabase()})

export {storage}
