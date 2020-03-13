class CreateEntityMapper {
  constructor({generateId}) {
    this._generateId = generateId
  }

  setEntityFactory(entityFactory) {
    this._entityFactory = entityFactory
    return this
  }

  map(data) {
    const id = this._generateId()
    return this._entityFactory({
      ...data,
      id
    })
  }
}

export {CreateEntityMapper}
