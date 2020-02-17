class CategoryStorage {
  constructor({database}) {
    this._database = database
  }

  create = category => this._database.create(category)
}

export {CategoryStorage}
