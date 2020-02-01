/* eslint-disable @typescript-eslint/no-use-before-define */
import {AnemicModelInterface} from './interfaces'

function mapValuesToPlainObjects(obj: object): object {
  return Object.keys(obj).reduce(
    (o, key) => {
      o[key] = obj[key]
      if (o[key] instanceof AnemicModel) o[key] = o[key].get()
      if (o[key] instanceof Object) o[key] = mapValuesToPlainObjects(o[key])
      return o
    },
    obj instanceof Array ? [] : {}
  )
}

function anemicInstanceToObject(obj: object): object {
  Object.keys(obj)
    .map((key) => key.replace('_', ''))
    .filter((key) => Object.prototype.hasOwnProperty.call(obj, key))
    .reduce((result, key) => ({
      ...result,
      key: obj._properties[key]
    }), {})
}

class AnemicModel implements AnemicModelInterface {
  constructor(properties = {}) {
    Object.keys(properties).forEach((key) => {
      this[`_${key}`] = properties[key]
    })
    Object.defineProperty(this, '_properties', {
      value: properties,
      writable: false,
      enumerable: false,
      configurable: false
    })
  }

  get(): object {
    return mapValuesToPlainObjects(anemicInstanceToObject(this))
  }
}

export {AnemicModel}
