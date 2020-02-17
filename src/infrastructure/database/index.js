import {LocalDatabase} from './LocalDatabase'

class Database {
  static localDatabase = () => new LocalDatabase()
}

export {Database}
