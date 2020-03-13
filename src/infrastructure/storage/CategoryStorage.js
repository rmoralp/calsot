class CategoryStorage {
  constructor({database}) {
    this._database = database
    this._source = 'category'
    this._database.setDefault({source: this._source})
  }

  create = payload =>
    this._database.create({
      source: this._source,
      payload
    })
}

export {CategoryStorage}
