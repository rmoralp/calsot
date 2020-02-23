class LocalDatabase {
  constructor({db}) {
    this._db = db
  }

  setDefault = async ({source}) => this._db.defaults({[source]: []}).write()

  create = async ({source, payload}) =>
    this._db
      .get(source)
      .push(payload)
      .write()

  read = async inputData => inputData
  update = async inputData => inputData
  delete = async inputData => inputData
}

export {LocalDatabase}
