import {isPromise} from '../js/isPromise'

const _runner = ({instance, original} = {}) => {
  return function(...args) {
    const response = []
    Object.defineProperty(response, '__INLINE_ERROR__', {
      enumerable: false,
      writable: true,
      value: true
    })
    try {
      const returns = original.apply(instance, args)

      if (isPromise(returns)) {
        return returns
          .then(r => {
            response[0] = null
            response[1] = r
            return response
          })
          .catch(e => {
            response[0] = e
            response[1] = null
            return Promise.resolve(response)
          })
      } else {
        response[0] = null
        response[1] = returns
        return response
      }
    } catch (e) {
      response[0] = e
      response[1] = null
      return response
    }
  }
}

/**
 * Usage: `@inlineError`
 */
function inlineError(target) {
  if (typeof target.descriptor.value !== 'function') return target

  const {key: fnName} = target
  const {value: fn, configurable, enumerable} = target.descriptor

  target.descriptor = Object.assign(
    {},
    {
      configurable,
      enumerable,
      get() {
        const _fnRunner = _runner({
          instance: this,
          original: fn
        })
        Object.defineProperty(this, fnName, {
          configurable: true,
          writable: true,
          enumerable: false,
          value: _fnRunner
        })
        return _fnRunner
      },
      set(newValue) {
        Object.defineProperty(this, fnName, {
          configurable: true,
          writable: true,
          enumerable: true,
          value: newValue
        })

        return newValue
      }
    }
  )

  return target
}

export {inlineError}
