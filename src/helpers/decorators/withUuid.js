import {v4} from 'uuid'

function withNewId() {
  return function(target) {
    if (typeof target.descriptor.value !== 'function') return target

    const original = target.descriptor.value

    target.descriptor.value = function(args) {
      const result = original.apply(this, [
        {
          ...args,
          id: v4()
        }
      ])
      return result
    }

    return target
  }
}

export {withNewId}
