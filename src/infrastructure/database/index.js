import {LocalDatabase} from './LocalDatabase'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import {env} from '../../env'

const getLocalDatabase = () => {
  const adapter = new FileSync(env.app.localDatabase)
  return low(adapter)
}

class Database {
  static localDatabase = () =>
    new LocalDatabase({
      db: getLocalDatabase()
    })
}

export {Database}
