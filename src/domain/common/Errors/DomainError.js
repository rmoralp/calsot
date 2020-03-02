export class DomainError extends Error {
  /**
   * @constructor
   * @param {Object} param
   * @param {Number} param.code
   * @param {String} param.message
   */
  constructor({code, message} = {}) {
    super(message)
    this.code = code
  }
}
